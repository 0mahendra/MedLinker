const asyncHandler = require("express-async-handler");
const Report = require("../Models/ReportModel");

// Utility function to handle the update operation
const updateReportField = async (filter, field, pic) => {
  const updateOperation = {
    $set: {
      [field]: pic,
    },
  };
  return await Report.findOneAndUpdate(filter, updateOperation);
};

const registerReport = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "Enter the user ID" });
  }

  const userExists = await Report.findOne({ userId });

  if (userExists) {
    return res.json(userExists);
  } else {
    const user = await Report.create({ userId });

    if (user) {
      return res.status(201).json({ userId: userId });
    } else {
      return res.status(400).json({ message: "Unable to create" });
    }
  }
});

const updateReport = asyncHandler(async (req, res) => {
  const { patientId, pic, sender } = req.body;
  const userId = patientId;

  if (!userId) {
    return res.status(400).json({ message: "Enter the user ID" });
  }

  const filter = { userId: userId };
  const reportFields = {
    registration: "Rreport",
    BloodReport: "Bpreport",
    UrineReport: "Ureport",
    Xreport: "Xreport",
    ECGReport: "ECGreport",
    MRIReport: "MRIreport",
  };

  const field = reportFields[sender];
  if (field) {
    const updateData = await updateReportField(filter, field, pic);
    if (!updateData) {
      return res.status(404).json({ message: "Report not found" });
    }
    return res.json({ message: "Report updated successfully" });
  } else {
    return res.status(400).json({ message: "Invalid sender type" });
  }
});

const getReport = asyncHandler(async (req, res) => {
  const { patientId, sender } = req.body;
  const userId = patientId;

  if (!userId) {
    return res.status(400).json({ message: "Enter the user ID" });
  }

  const filter = { userId: userId };
  const updateData = await Report.findOne(filter);

  if (!updateData) {
    return res.status(404).json({ message: "Report not found" });
  }

  // Depending on sender, you may want to return specific data
  // Here we simply return the whole report data
  return res.json(updateData);
});

module.exports = { registerReport, updateReport, getReport };
