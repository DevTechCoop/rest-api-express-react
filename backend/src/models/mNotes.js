const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
    {
        title: String,
        content: { type: String},
        author: { type: String },
        date: Date
    }, {
        timestamps: true
    });

module.exports = model('Notes', noteSchema);