const PDFDocument = require("pdfkit");
const fs = require("fs");
const { user } = require("./db");
const express=require("express");
const router=express.Router();

router.get("/download-pdf", async (req, res) => {
  const students = await user.find(); // mongo se saara data

  const doc = new PDFDocument();
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=students.pdf");

  doc.pipe(res);

  // Title
  doc.fontSize(18).text("Student Attendance List", { align: "center" });
  doc.moveDown();

  // Table heading
  doc.fontSize(12).font("Helvetica-Bold");

doc.text("Name", 50, doc.y, { width: 120 });
doc.text("Roll No", 180, doc.y, { width: 120 });
doc.text("Attendance", 310, doc.y, { width: 120 });
doc.text("Branch", 450, doc.y);

doc.moveDown();
  
  // Data rows
  doc.font("Helvetica");

students.forEach((s) => {
  const y = doc.y;

  doc.text(s.name, 50, y, { width: 120 });
  doc.text(s.roll, 180, y, { width: 120 });
  doc.text(s.attendance + "%", 310, y, { width: 120 });
  doc.text(s.branch, 450, y);

  doc.moveDown();
});
 
  doc.end();
});

module.exports=router
