const mongoose = require('mongoose');

const tumanSchema = new mongoose.Schema({
    nomi: { type: String, required: true },
    viloyat: { type: mongoose.Schema.Types.ObjectId, ref: 'Viloyat' },
    markazi: String,
    maydoni: Number,
    aholi_soni: Number,
    mahallalar_soni: Number,
    telefon: String,
    hokim: String,
    gerb: String,
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tuman', tumanSchema);