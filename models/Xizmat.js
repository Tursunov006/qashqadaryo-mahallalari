const mongoose = require('mongoose');

const xizmatSchema = new mongoose.Schema({
    nomi: { type: String, required: true },
    kategoriya: {
        type: String,
        enum: ['tez_yordam', 'yongin', 'militsiya', 'gaz', 'elektr', 'suv', 'dorixona', 
               'shifoxona', 'veterinar', 'maktab', 'bogcha', 'masjid', 'bozor', 'bank', 'pochta'],
        required: true
    },
    kategoriya_nomi: String,
    mahalla: { type: mongoose.Schema.Types.ObjectId, ref: 'Mahalla' },
    tuman: { type: mongoose.Schema.Types.ObjectId, ref: 'Tuman' },
    viloyat: { type: mongoose.Schema.Types.ObjectId, ref: 'Viloyat' },
    manzil: String,
    telefon: [String],
    ish_vaqti: String,
    ish_rejimi: {
        dushanba: String,
        seshanba: String,
        chorshanba: String,
        payshanba: String,
        juma: String,
        shanba: String,
        yakshanba: String
    },
    direktor: String,
    xodimlar: Number,
    xizmatlar: [String],
    narxlar: String,
    qoshimcha: String,
    is_24_7: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Xizmat', xizmatSchema);