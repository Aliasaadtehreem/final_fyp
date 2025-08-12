import Link from "../models/Link.js";
import Family from "../models/Family.js";
import Patient from "../models/Patient.js";

// Create a new link between family and patient
export const createLink = async (req, res) => {
  try {
    const { familyId, patientId, role } = req.body;

    if (!familyId || !patientId || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate role
    if (!["patient", "familyMember"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    // Optional: Check if family exists
    const familyExists = await Family.findById(familyId);
    if (!familyExists) {
      return res.status(404).json({ message: "Family not found" });
    }

    // Optional: Check if patient exists
    const patientExists = await Patient.findById(patientId);
    if (!patientExists) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const newLink = new Link({ familyId, patientId, role });
    await newLink.save();

    res.status(201).json(newLink);
  } catch (error) {
    console.error("Error creating link:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all links
export const getAllLinks = async (req, res) => {
  try {
    const links = await Link.find()
      .populate("familyId", "familyName")
      .populate("patientId", "name age");
    res.json(links);
  } catch (error) {
    console.error("Error fetching links:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get link by ID
export const getLinkById = async (req, res) => {
  try {
    const link = await Link.findById(req.params.id)
      .populate("familyId", "familyName")
      .populate("patientId", "name age");

    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    res.json(link);
  } catch (error) {
    console.error("Error fetching link:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete link
export const deleteLink = async (req, res) => {
  try {
    const link = await Link.findByIdAndDelete(req.params.id);

    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    res.json({ message: "Link deleted successfully" });
  } catch (error) {
    console.error("Error deleting link:", error);
    res.status(500).json({ message: "Server error" });
  }
};
