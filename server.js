const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(session({
    secret: 'qashqadaryo_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/qashqadaryo', require('./routes/qashqadaryo'));
app.use('/faollar', require('./routes/faollar'));
app.use('/auth', require('./routes/auth'));

// Bosh sahifa
app.get('/', (req, res) => {
    const user = req.session.user || null;
    const faol = req.session.faol || null;
    
    res.render('index', { user, faol });
});

// 404
app.use// 404 sahifa
app.use((req, res) => {
    res.status(404).render('404');
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log('\n' + '='.repeat(50));
    console.log('🌍 QASHQADARYO MAHALLALARI (YANGI DIZAYN)');
    console.log('='.repeat(50));
    console.log(`✅ Server: http://localhost:${PORT}`);
    console.log('='.repeat(50));
});