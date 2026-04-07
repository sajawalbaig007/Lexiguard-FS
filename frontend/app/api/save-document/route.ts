import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { document } = data;

    if (!document) {
      return NextResponse.json({ error: "Document is required" }, { status: 400 });
    }

    // Path where documents will be saved
    const savePath = path.join(process.cwd(), "saved-documents");
    
    // Create folder if it doesn't exist
    if (!fs.existsSync(savePath)) {
      fs.mkdirSync(savePath);
    }

    // Save the document with a timestamped filename
    const fileName = `document-${Date.now()}.html`;
    const filePath = path.join(savePath, fileName);

    fs.writeFileSync(filePath, document, "utf-8");

    return NextResponse.json({ message: "Document saved successfully", fileName });
  } catch (error) {
    console.error("Error saving document:", error);
    return NextResponse.json({ error: "Failed to save document" }, { status: 500 });
  }
}