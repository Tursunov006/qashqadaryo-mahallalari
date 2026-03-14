const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://127.0.0.1:27017/yangibog')
    .then(async () => {
        console.log('✅ MongoDB ga ulandi');
        
        const db = mongoose.connection.db;
        const collection = db.collection('faols');
        
        // Test faol
        const hashedPassword = await bcrypt.hash('123456', 10);
        
        await collection.insertOne({
            ism: 'Alisher',
            familiya: 'Karimov',
            lavozim: 'rais',
            lavozim_nomi: 'Mahalla raisi',
            telefon: '+998901234567',
            login: 'rais',
            parol: hashedPassword,
            kocha: 'Markaziy',
            uy_raqam: '1',
            stats: { qaragan_muammolar: 0, hal_qilgan: 0, jarayonda: 0 },
            created_at: new Date()
        });
        
        console.log('✅ Test faol yaratildi: rais / 123456');
        process.exit();
    })
    .catch(err => {
        console.error('❌ Xatolik:', err);
        process.exit(1);
    });