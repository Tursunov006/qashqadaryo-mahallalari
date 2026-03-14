const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    sarlavha: {
        type: String,
        required: true
    },
    qisqa: String,
    matn: {
        type: String,
        required: true
    },
    rasm: String,
    kategoriya: {
        type: String,
        enum: ['elon', 'tadbir', 'yangilik', 'muhim'],
        default: 'yangilik'
    },
    muhim: {
        type: Boolean,
        default: false
    },
    korishlar: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('News', newsSchema);