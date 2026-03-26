import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { contractType, discloser, recipient, purpose, day, month, year, notes } = body;

    // AI generation logic here
    const prompt = `Generate a ${contractType} contract for ${discloser} and ${recipient} for the purpose of ${purpose} on ${day}-${month}-${year}. Additional notes: ${notes}`;
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const contractText = completion.choices[0].message?.content || "";

    return NextResponse.json({ contract: contractText });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to generate contract" }, { status: 500 });
  }
}