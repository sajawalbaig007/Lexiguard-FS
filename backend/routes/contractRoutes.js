 import express from "express";
import templateRegistry from "../templateRegistry.js";
import Document from "../models/Document.js";

const router = express.Router();

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
      return res.status(404).json({ error: "Template not found" });
    }

    res.json(template.questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

// ================= GENERATE + SAVE DOCUMENT =================
router.post("/generate", async (req, res) => {
  try {
    const { templateName, formData } = req.body;

    if (!templateName || !formData) {
      return res.status(400).json({
        error: "templateName and formData are required",
      });
    }

    const templateEntry = templateRegistry[templateName];

    if (!templateEntry) {
      return res.status(404).json({ error: "Template not found" });
    }

    const documentHTML = templateEntry.template(formData);

    const newDocument = await Document.create({
      templateName,
      content: documentHTML,
      formData,
    });

    res.json({
      document: documentHTML,
      documentId: newDocument._id,
      saved: true, // 🔥 helps frontend know it's stored
    });
  } catch (error) {
    console.error("Error generating document:", error);
    res.status(500).json({ error: "Failed to generate document" });
  }
});

// ================= GET ALL ACTIVE DOCUMENTS =================
router.get("/documents", async (req, res) => {
  try {
    const documents = await Document.find({
      isDeleted: false,
    }).sort({
      createdAt: -1,
    });

    res.json(documents);
  } catch (error) {
    console.error("FETCH ERROR:", error);
    res.status(500).json({
      message: "Failed to fetch documents",
    });
  }
});

// ================= GET BIN DOCUMENTS =================
router.get("/bin", async (req, res) => {
  try {
    const documents = await Document.find({
      isDeleted: true,
    }).sort({
      deletedAt: -1,
    });

    res.json(documents);
  } catch (error) {
    console.error("BIN FETCH ERROR:", error);
    res.status(500).json({
      message: "Failed to fetch bin documents",
    });
  }
});

// ================= GET SINGLE DOCUMENT =================
router.get("/documents/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const document = await Document.findById(id);

    if (!document) {
      return res.status(404).json({
        message: "Document not found",
      });
    }

    res.json(document);
  } catch (error) {
    console.error("FETCH ONE ERROR:", error);
    res.status(500).json({
      message: "Failed to fetch document",
    });
  }
});

// ================= SOFT DELETE (MOVE TO BIN) =================
router.delete("/documents/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedDoc = await Document.findByIdAndUpdate(
      id,
      {
        isDeleted: true,
        deletedAt: new Date(),
      },
      { new: true }
    );

    if (!updatedDoc) {
      return res.status(404).json({
        message: "Document not found",
      });
    }

    res.json({
      message: "Document moved to bin",
      id, // 🔥 frontend uses this to update instantly
    });
  } catch (error) {
    console.error("SOFT DELETE ERROR:", error);
    res.status(500).json({
      message: "Failed to delete document",
    });
  }
});

// ================= RESTORE DOCUMENT =================
router.patch("/restore/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const restoredDoc = await Document.findByIdAndUpdate(
      id,
      {
        isDeleted: false,
        deletedAt: null,
      },
      { new: true }
    );

    if (!restoredDoc) {
      return res.status(404).json({
        message: "Document not found",
      });
    }

    res.json({
      message: "Document restored successfully",
      id, // 🔥 needed for frontend sync
    });
  } catch (error) {
    console.error("RESTORE ERROR:", error);
    res.status(500).json({
      message: "Failed to restore document",
    });
  }
});

// ================= PERMANENT DELETE =================
router.delete("/bin/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDoc = await Document.findByIdAndDelete(id);

    if (!deletedDoc) {
      return res.status(404).json({
        message: "Document not found",
      });
    }

    res.json({
      message: "Document permanently deleted",
      id, // 🔥 frontend uses this
    });
  } catch (error) {
    console.error("PERMANENT DELETE ERROR:", error);
    res.status(500).json({
      message: "Failed to permanently delete document",
    });
  }
});

// ❌ REMOVE THIS (DANGEROUS)
// router.delete("/documents", async (req, res) => {
//   await Document.deleteMany({});
// });

export default router;