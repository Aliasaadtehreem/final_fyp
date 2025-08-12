import Family from "../models/Family.js";
import User from "../models/User.js";
import generateToken from "../utils/generatetoken.js";

// Create a new family
export const createFamily = async (req, res) => {
  try {
    const { familyName } = req.body;

    if (!familyName) {
      return res.status(400).json({ message: "Family name is required" });
    }

    const family = new Family({
      familyName,
      members: [req.user._id], // creator as first member
    });

    await family.save();
    res.status(201).json({ message: "Family created successfully", family });
  } catch (error) {
    res.status(500).json({ message: "Error creating family", error: error.message });
  }
};

// Invite a family member by email
export const inviteFamilyMember = async (req, res) => {
  try {
    const { familyId } = req.params;
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const family = await Family.findById(familyId);
    if (!family) {
      return res.status(404).json({ message: "Family not found" });
    }

    // Only existing members can invite
    if (!family.members.includes(req.user._id)) {
      return res.status(403).json({ message: "Not authorized to invite to this family" });
    }

    family.invitedEmails.push({ email });
    await family.save();

    res.status(200).json({ message: "Invitation sent successfully", family });
  } catch (error) {
    res.status(500).json({ message: "Error inviting member", error: error.message });
  }
};

// Accept family invitation
export const acceptInvitation = async (req, res) => {
  try {
    const { familyId } = req.params;

    const family = await Family.findById(familyId);
    if (!family) {
      return res.status(404).json({ message: "Family not found" });
    }

    // Check if user email is invited
    const invitation = family.invitedEmails.find(
      inv => inv.email === req.user.email && !inv.accepted
    );

    if (!invitation) {
      return res.status(400).json({ message: "No pending invitation found" });
    }

    // Mark as accepted
    invitation.accepted = true;
    family.members.push(req.user._id);
    await family.save();

    res.status(200).json({ message: "Invitation accepted", family });
  } catch (error) {
    res.status(500).json({ message: "Error accepting invitation", error: error.message });
  }
};

// Get all families for the logged-in user
export const getMyFamilies = async (req, res) => {
  try {
    const families = await Family.find({ members: req.user._id }).populate("members", "name email");
    res.status(200).json(families);
  } catch (error) {
    res.status(500).json({ message: "Error fetching families", error: error.message });
  }
};
