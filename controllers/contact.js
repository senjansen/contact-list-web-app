"use strict"

const Model = require('../models');
const Contact = Model.Contact;

class ContactController {
    static getContacts(req, res) {
        Contact.findAll()
            .then((contacts) => {
                res.send(contacts);
            })
            .catch((err) => {
                res.send(err.message);
            })
    }

    static postContact(req, res) {
        let values = req.body

        Contact.create(values)
            .then(() => {
                return Contact.findAll({
                    limit: 1,
                    order: [[ 'createdAt', 'DESC' ]]
                });
            })
            .then((contacts) => {
                let contact = contacts[0];
                res.send(contact);
            })
            .catch((err) => {
                res.status(422).send(err.message);
            })
    }

    static putContact(req, res) {
        let values = req.body;
        let id = Number(req.params.id);

        Contact.update(values, {
            where: {
                id
            }
        })
        .then(() => {
            return Contact.findOne({
                where: {
                    id
                }
            })
        })
        .then((contact) => {
            res.send(contact);
        })
        .catch((err) => {
            res.send(err.message);
        })
    }

    static deleteContact(req, res) {
        let id = Number(req.params.id);

        Contact.destroy({
            where: {
                id
            }
        })
        .then(() => {
            res.send('successfully deleted!');
        })
        .catch((err) => {
            res.send(err.message);
        })
    }
}

module.exports = ContactController;