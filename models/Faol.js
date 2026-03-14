const mongoose = require('mongoose');

const faolSchema = new mongoose.Schema({
    ism: { type: String, required: true },
    familiya: { type: String, required: true },
    sharif: String,
    lavozim: { 
        type: String, 
        enum: ['rais', 'oqsoqol', 'inspektor', 'xotin-qizlar', 'yoshlar', 'kotib', 'faol'],
        required: true 
    },
    lavozim_nomi: String,
    telefon: { type: String, required: true, unique: true },
    login: { type: String, required: true, unique: true },
    parol: { type: String, required: true },
    kocha: String,
    uy_raqam: String,
    rasm: { type: String, default: 'default-avatar.png' },
    stats: {
        qaragan_muammolar: { type: Number, default: 0 },
        hal_qilgan: { type: Number, default: 0 },
        jarayonda: { type: Number, default: 0 }
    },
    last_login: Date,
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Faol', faolSchema);