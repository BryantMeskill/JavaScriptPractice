const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const members = require("../../Members");

// Gets All Members
router.get("/", (req, res) => res.json(members));

// Get Single Member
router.get("/", (req, res) => {
  // Checks for requested member, returns true or false.
  const found = members.some((member) => member.id === parseInt(req.params.id));
  // If true, return member info. Else, return status of 400 with error message.
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ msg: `No member found with id of ${req.params.id}` });
  }
});

// Create Member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and email." });
  }

  members.push(newMember);
  res.json(members);
  // res.redirect("/");
});

// Update Member
router.put("/", (req, res) => {
  // Checks for requested member, returns true or false.
  const found = members.some((member) => member.id === parseInt(req.params.id));
  // If true, update member info. Else, return status of 400 with error message.
  if (found) {
    const updateMem = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        // If new member name/email is added, update it. Otherwise, use current name/email.
        member.name = updateMem.name ? updateMem.name : member.name;
        member.email = updateMem.email ? updateMem.email : member.email;
        res.json({ msg: "Member updated.", member });
      }
    });
  } else {
    res
      .status(400)
      .json({ msg: `No member found with id of ${req.params.id}` });
  }
});

// Delete Member
router.delete("/:id", (req, res) => {
  // Checks for requested member, returns true or false.
  const found = members.some((member) => member.id === parseInt(req.params.id));
  // If true, return member info. Else, return status of 400 with error message.
  if (found) {
    res.json({
      msg: "Member Deleted",
      members: members.filter(
        (member) => member.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res
      .status(400)
      .json({ msg: `No member found with id of ${req.params.id}` });
  }
});

module.exports = router;
