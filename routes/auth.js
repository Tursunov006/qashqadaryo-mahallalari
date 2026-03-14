const express = require('express');
const router = express.Router();

// Test foydalanuvchilar
const testUsers = [
    { jshshir: '12345678901234', ism: 'Alisher', familiya: 'Karimov', telefon: '+998901234567', email: 'alisher@mail.uz' },
    { jshshir: '12345678901235', ism: 'Dilnoza', familiya: 'Rahimova', telefon: '+998902345678', email: 'dilnoza@mail.uz' }
];

// Mahalla faolini tekshirish
function checkIfFaol(jshshir) {
    if (jshshir === '12345678901234') {
        return {
            id: 1,
            ism: 'Alisher',
            familiya: 'Karimov',
            lavozim: 'rais',
            lavozim_nomi: 'Mahalla raisi'
        };
    }
    return null;
}

// OneID test sahifasi
router.get('/oneid', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>OneID Test rejimi</title>
            <style>
                body {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    font-family: 'Inter', sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    padding: 20px;
                }
                .test-box {
                    background: white;
                    padding: 40px;
                    border-radius: 30px;
                    max-width: 500px;
                    width: 100%;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
                    animation: slideUp 0.6s ease;
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                h2 {
                    color: #1B5E20;
                    text-align: center;
                    margin-bottom: 30px;
                    font-size: 28px;
                }
                .test-user {
                    background: #f0f9f0;
                    border: 2px solid #4CAF50;
                    border-radius: 20px;
                    padding: 25px;
                    margin: 15px 0;
                    cursor: pointer;
                    transition: 0.3s;
                }
                .test-user:hover {
                    background: #4CAF50;
                    color: white;
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(76,175,80,0.4);
                }
                .test-user:hover .role {
                    color: rgba(255,255,255,0.9);
                }
                .user-name {
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 5px;
                }
                .user-phone {
                    font-size: 18px;
                    margin-bottom: 5px;
                }
                .role {
                    color: #4CAF50;
                    font-size: 14px;
                }
                .back {
                    text-align: center;
                    margin-top: 20px;
                }
                .back a {
                    color: #666;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class="test-box">
                <h2>🔐 OneID Test rejimi</h2>
                <p style="text-align: center; color: #666; margin-bottom: 30px;">
                    Haqiqiy OneID ulanishisiz test qilish
                </p>
                
                <div class="test-user" onclick="location.href='/auth/oneid/test/12345678901234'">
                    <div class="user-name">👤 Alisher Karimov</div>
                    <div class="user-phone">+998 90 123 45 67</div>
                    <div class="role">Mahalla raisi</div>
                </div>
                
                <div class="test-user" onclick="location.href='/auth/oneid/test/12345678901235'">
                    <div class="user-name">👩 Dilnoza Rahimova</div>
                    <div class="user-phone">+998 90 234 56 78</div>
                    <div class="role">Xotin-qizlar raisi</div>
                </div>
                
                <div class="back">
                    <a href="/faollar/login">← Orqaga</a>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Test rejimi login
router.get('/oneid/test/:jshshir', (req, res) => {
    const jshshir = req.params.jshshir;
    const user = testUsers.find(u => u.jshshir === jshshir);
    
    if (user) {
        req.session.user = {
            id: user.jshshir,
            ism: user.ism,
            familiya: user.familiya,
            email: user.email,
            phone: user.telefon,
            oneid: true
        };
        
        const faol = checkIfFaol(user.jshshir);
        if (faol) {
            req.session.faol = faol;
        }
        
        res.send(`
            <script>
                alert('✅ Xush kelibsiz, ${user.ism} ${user.familiya}!');
                window.location.href='/';
            </script>
        `);
    } else {
        res.send(`
            <script>
                alert('❌ Foydalanuvchi topilmadi');
                window.location.href='/auth/oneid';
            </script>
        `);
    }
});

module.exports = router;