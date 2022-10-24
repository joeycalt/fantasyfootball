const mongoose = require('mongoose');

const FactsSchema = new mongoose.Schema(
    { 
    name:{type:String, required:true},  
    desc: {type:String, required:true},
    },
    
    {timestamps: true}


    
    );

    const Facts = mongoose.model('Facts', FactsSchema);

    module.exports = Facts;