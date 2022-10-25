const mongoose = require('mongoose');

const FactsSchema = new mongoose.Schema(
    {
        name: [{
            type: String
        }],
        desc: [{
            type: String
        }]
    },
    {timestamps: true}
);

    const Facts = mongoose.model('Facts', FactsSchema);

    module.exports = Facts;