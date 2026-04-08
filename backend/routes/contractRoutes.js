import express from "express";
import templateRegistry from "../templateRegistry.js";
import Document from "../models/Document.js";

const router = express.Router();

// Helper: Get today's date
const getTodayDate = () => {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// ================= GET ALL TEMPLATES =================
router.get("/templates", (req, res) => {
  try {
    res.json(Object.keys(templateRegistry));
  } catch (error) {
    console.error("Error fetching templates:", error);
    res.status(500).json({ error: "Failed to fetch templates" });
  }
});

// ================= GET QUESTIONS =================
router.get("/questions/:templateName", (req, res) => {
  try {
    const templateName = req.params.templateName;
    const template = templateRegistry[templateName];

    if (!template) {
      console.error("Template not found:", templateName);
      return res.status(404).json({ error: "Template not found" });
    }

    res.json(template.questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

// ================= GENERATE DOCUMENT =================
router.post("/generate", (req, res) => {
  try {
    const { templateName, formData } = req.body;

    if (!templateName || !formData) {
      return res.status(400).json({
        error: "templateName and formData are required",
      });
    }

    const templateEntry = templateRegistry[templateName];

    if (!templateEntry) {
      console.error("Template not found:", templateName);
      return res.status(404).json({ error: "Template not found" });
    }

    // ✅ AUTO-ADD TODAY'S DATE
    const todayDate = getTodayDate();
    const finalFormData = {
      ...formData,
      date: formData.date || todayDate,  // User's date if provided, else today
    };

    // Generate document
    const document = templateEntry.template(finalFormData);

    res.json({ document });
  } catch (error) {
    console.error("Error generating document:", error);
    res.status(500).json({ error: "Failed to generate document" });
  }
});

// ================= SAVE DOCUMENT =================
router.post("/save-document", async (req, res) => {
  try {
    const { templateName, content } = req.body;

    if (!templateName || !content) {
      return res.status(400).json({
        message: "Template name and content are required",
      });
    }

    const newDocument = new Document({
      templateName,
      content,
    });

    await newDocument.save();

    res.status(201).json({
      message: "Document saved successfully",
      document: newDocument,
    });
  } catch (error) {
    console.error("SAVE ERROR:", error);
    res.status(500).json({
      message: "Failed to save document",
    });
  }
});

// ================= GET ALL DOCUMENTS =================
router.get("/documents", async (req, res) => {
  try {
    const documents = await Document.find().sort({ createdAt: -1 });
    res.json(documents);
  } catch (error) {
    console.error("FETCH ERROR:", error);
    res.status(500).json({
      message: "Failed to fetch documents",
    });
  }
});

export default router;