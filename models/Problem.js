const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    kategoriya: {
        type: String,
        enum: ['yol', 'suv', 'elektr', 'kanalizatsiya', 'axlat', 'yoritish', 'transport', 'xavfsizlik', 'ijtimoiy', 'boshqa'],
        required: true
    },
    kategoriya_nomi: {
        type: String,
        required: true
    },
    mavzu: {
        type: String,
        required: true
    },
    tavsif: {
        type: String,
        required: true
    },
    manzil: {
        kocha: String,
        uy_raqam: String,
        orientir: String
    },
    foydalanuvchi: {
        ism: String,
        telefon: String,
        yashirin: {
            type: Boolean,
            default: false
        }
    },
    rasm: [String],
    status: {
        type: String,
        enum: ['yangi', 'korilmoqda', 'jarayonda', 'hal_qilindi', 'rad_etildi'],
        default: 'yangi'
    },
    muhimlik: {
        type: String,
        enum: ['past', 'orta', 'yuqori', 'kritik'],
        default: 'orta'
    },
    ovozlar: {
        type: Number,
        default: 0
    },
    ovoz_berganlar: [{
        type: String
    }],
    izohlar: [{
        foydalanuvchi: String,
        matn: String,
        sana: {
            type: Date,
            default: Date.now
        }
    }],
    admin_izoh: String,
    hal_qilindi_sana: Date,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Problem', problemSchema);