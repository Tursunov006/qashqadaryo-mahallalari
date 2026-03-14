const mongoose = require('mongoose');

const mahallaSchema = new mongoose.Schema({
    nomi: { type: String, required: true },
    tuman: { type: mongoose.Schema.Types.ObjectId, ref: 'Tuman' },
    viloyat: { type: mongoose.Schema.Types.ObjectId, ref: 'Viloyat' },
    indeks: String,
    manzil: String,
    
    // Rahbariyat
    rais: {
        ism: String,
        telefon: String,
        qabul: String
    },
    kotib: {
        ism: String,
        telefon: String
    },
    inspektor: {
        ism: String,
        telefon: String
    },
    
    // Statistika
    aholi_soni: Number,
    uylar_soni: Number,
    koChalar_soni: Number,
    xonadonlar: Number,
    
    // Aloqa
    telefon: String,
    email: String,
    ish_vaqti: {
        type: String,
        default: "09:00 - 18:00"
    },
    
    // Ijtimoiy tarmoqlar
    telegram: String,
    instagram: String,
    facebook: String,
    
    // Favqulodda xizmatlar
    favqulodda: {
        tez_yordam: { type: String, default: "103" },
        yongin: { type: String, default: "101" },
        militsiya: { type: String, default: "102" },
        gaz: { type: String, default: "104" },
        elektr: { type: String, default: "105" },
        suv: { type: String, default: "106" }
    },
    
    // 24/7 xizmatlar
    xizmatlar_24_7: [{
        nomi: String,
        telefon: String,
        manzil: String,
        turi: String
    }],
    
    // Qo'shni mahallalar
    qoshni_mahallalar: [{
        nomi: String,
        masofa: String,
        vaqt: String
    }],
    
    // Koordinatalar
    location: {
        lat: Number,
        lng: Number
    },
    
    // Rasm
    rasm: String,
    
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Mahalla', mahallaSchema);