const asynchandler = require("express-async-handler");

const Contact = require("../models/contactModel");

//@description Get all contact
// @route GET /api/contacts
// @access public

const getContacts = asynchandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});


//@description Create contact
// @route POST /api/contacts
// @access public

const createContact = asynchandler(async (req, res) => {
    console.log("The request body is " + " Name " + req.body.name + " Address " + req.body.address + " Phone " + req.body.phone);
    const { name, address, phone } = req.body;
    if (!name || !address || !phone) {
        res.status(400);
        throw new Error("Name, Address and Phone are required");
    }
    const contact = new Contact({
        name,
        address,
        phone
    });
    res.status(201).json(contact);
});

//@description Get contact 
// @route GET by id /api/contacts/:id
// @access public

const getContact = asynchandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});
//@description Update  all contact
// @route PUT /api/contacts/:id
// @access public

const updateContact = asynchandler(async (req, res) => {
    res.status(200).json({ message: "Update Contact " + req.params.id });
});

//@description Delete  contact
// @route DELETE /api/contacts/:id
// @access public

const deleteContact = asynchandler(async (req, res) => {
    res.status(200).json({ message: "Delete Contact " + req.params.id });
});


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };