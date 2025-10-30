import express from "express";
import Record from "../models/record.js";
import auth from "../middleware/auth.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const cleanJSON = text => {
  const s = text.replace(/```json/g, "").replace(/```/g, "");
  return JSON.parse(s);
};

router.post("/analyze", auth, async (req, res) => {
  try {
    const { symptoms } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `
Symptoms: ${symptoms}
Respond strictly in JSON:
{"diagnosis":["..."],"risk":"...","advice":"..."}
    `;
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const ai = cleanJSON(text);
    const record = new Record({ userId: req.user.id, symptoms, ...ai });
    await record.save();
    res.json(ai);
  } catch {
    res.status(500).json({ msg: "AI failed" });
  }
});

router.get("/history", auth, async (req, res) => {
  const data = await Record.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(data);
});

export default router;
