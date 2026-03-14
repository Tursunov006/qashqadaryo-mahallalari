const mongoose = require('mongoose');

const viloyatSchema = new mongoose.Schema({
    nomi: { type: String, required: true, unique: true },
    markazi: String,
    aholi_soni: Number,
    mahallalar_soni: Number,
    rasmiy_sayt: String,
    gerb: String,
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Viloyat', viloyatSchema);