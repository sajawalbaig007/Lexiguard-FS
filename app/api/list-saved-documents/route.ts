import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const folderPath = path.join(process.cwd(), "saved-documents");

    if (!fs.existsSync(folderPath)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(folderPath);

    const docs = files.map((file, index) => {
      const content = fs.readFileSync(path.join(folderPath, file), "utf-8");
      return {
        id: index + 1,
        title: file.replace(/\.html$/, ""),
        time: new Date(parseInt(file.match(/\d+/)?.[0] || "0")).toLocaleString(),
        content,
        createdAt: new Date(parseInt(file.match(/\d+/)?.[0] || "0")).toISOString(),
      };
    });

    return NextResponse.json(docs);
  } catch (error) {
    console.error("Error fetching saved documents:", error);
    return NextResponse.json({ error: "Failed to fetch documents" }, { status: 500 });
  }
}