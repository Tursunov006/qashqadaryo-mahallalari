const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    sarlavha: {
        type: String,
        required: true
    },
    tavsif: String,
    savollar: [{
        savol: String,
        turi: {
            type: String,
            enum: ['radio', 'checkbox', 'text', 'select'],
            default: 'radio'
        },
        variantlar: [String],
        javoblar: [{
            foydalanuvchi: String,
            javob: mongoose.Schema.Types.Mixed,
            sana: {
                type: Date,
                default: Date.now
            }
        }]
    }],
    faol: {
        type: Boolean,
        default: true
    },
    boshlanish: Date,
    tugash: Date,
    qatnashchilar: [String],
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Survey', surveySchema);