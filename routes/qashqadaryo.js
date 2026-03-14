const express = require('express');
const router = express.Router();

// Barcha tumanlarning to'g'ri mahallalari - Qashqadaryo viloyati
const tumanMahallalari = {
    'Kasbi tumani': [
        { nomi: 'Denov MFY', rais: 'Rahimov A.', telefon: '+998 90 123 45 67', aholi: 1500 },
        { nomi: 'Komilon MFY', rais: 'Shodmonov B.', telefon: '+998 90 234 56 78', aholi: 1800 },
        { nomi: 'Maymanoq MFY', rais: 'Tursunov C.', telefon: '+998 90 345 67 89', aholi: 1600 },
        { nomi: 'Masit MFY', rais: 'Odilov D.', telefon: '+998 90 456 78 90', aholi: 1700 },
        { nomi: 'Muglon MFY', rais: 'Hasanov E.', telefon: '+998 90 567 89 01', aholi: 2000 },
        { nomi: 'Qamashi MFY', rais: 'Ismoilov F.', telefon: '+998 90 678 90 12', aholi: 1900 },
        { nomi: 'Qataghon MFY', rais: 'Juraev G.', telefon: '+998 90 789 01 23', aholi: 1400 },
        { nomi: 'Talishbe MFY', rais: 'Karimov H.', telefon: '+998 90 890 12 34', aholi: 1300 },
        { nomi: 'Shakarjoy MFY', rais: 'Lunin I.', telefon: '+998 90 901 23 45', aholi: 1600 },
        { nomi: 'Toshqorghon MFY', rais: 'Muhammadov J.', telefon: '+998 90 012 34 56', aholi: 1500 },
        { nomi: 'Yangihayot MFY', rais: 'Nazarov K.', telefon: '+998 90 123 45 68', aholi: 1700 },
        { nomi: 'Yuksalish MFY', rais: 'Omonov L.', telefon: '+998 90 234 56 79', aholi: 1800 },
        { nomi: 'Xojaqarliq MFY', rais: 'Parov M.', telefon: '+998 90 345 67 90', aholi: 1400 }
    ],
    'Kitob tumani': [
        { nomi: 'Markaziy MFY', rais: 'Qodirov N.', telefon: '+998 90 456 78 91', aholi: 2200 },
        { nomi: 'Bog\'iston MFY', rais: 'Rahimov O.', telefon: '+998 90 567 89 02', aholi: 1900 },
        { nomi: 'Guliston MFY', rais: 'Salokhiddinov P.', telefon: '+998 90 678 90 13', aholi: 2100 },
        { nomi: 'Yangi Shahar MFY', rais: 'Toshboyev Q.', telefon: '+998 90 789 01 24', aholi: 2000 },
        { nomi: 'Sariqamish MFY', rais: 'Urunov R.', telefon: '+998 90 890 12 35', aholi: 1800 },
        { nomi: 'Xorazm MFY', rais: 'Valiev S.', telefon: '+998 90 901 23 46', aholi: 1700 },
        { nomi: 'Navoi MFY', rais: 'Xojaev T.', telefon: '+998 90 012 34 57', aholi: 1600 },
        { nomi: 'Samarqand MFY', rais: 'Yusupov U.', telefon: '+998 90 123 45 69', aholi: 1800 }
    ],
    'Koson tumani': [
        { nomi: 'Guvalak Bolmas MFY', rais: 'Zakirov V.', telefon: '+998 90 234 56 80', aholi: 1600 },
        { nomi: 'Gulbogʻ MFY', rais: 'Ergashev W.', telefon: '+998 90 345 67 91', aholi: 1500 },
        { nomi: 'Dostlik MFY', rais: 'Fakhriddinov X.', telefon: '+998 90 456 78 92', aholi: 1700 },
        { nomi: 'Koson MFY', rais: 'G\'aniyev Y.', telefon: '+998 90 567 89 03', aholi: 2000 },
        { nomi: 'Obidida MFY', rais: 'Hamdamov Z.', telefon: '+998 90 678 90 14', aholi: 1400 },
        { nomi: 'Olachabob MFY', rais: 'Ishmixanov A.', telefon: '+998 90 789 01 25', aholi: 1600 },
        { nomi: 'Pototi MFY', rais: 'Jalolov B.', telefon: '+998 90 890 12 36', aholi: 1500 },
        { nomi: 'Gala MFY', rais: 'Kurbanov C.', telefon: '+998 90 901 23 47', aholi: 1800 },
        { nomi: 'Tinchlik MFY', rais: 'Latipov D.', telefon: '+998 90 012 34 58', aholi: 1700 }
    ],
    'Nishon tumani': [
        { nomi: 'Balxiyak MFY', rais: 'Mirzayev E.', telefon: '+998 90 123 45 70', aholi: 1600 },
        { nomi: 'Nishon MFY', rais: 'Nizomov F.', telefon: '+998 90 234 56 81', aholi: 1900 },
        { nomi: 'Navroʻz MFY', rais: 'Orifov G.', telefon: '+998 90 345 67 92', aholi: 1700 },
        { nomi: 'Oydin MFY', rais: 'Pavlenko H.', telefon: '+998 90 456 78 93', aholi: 1500 },
        { nomi: 'Oqoltin MFY', rais: 'Qodirov I.', telefon: '+998 90 567 89 04', aholi: 1400 },
        { nomi: 'Paxtazor MFY', rais: 'Rasulov J.', telefon: '+998 90 678 90 15', aholi: 1800 },
        { nomi: 'Qirkduloch MFY', rais: 'Sodiqov K.', telefon: '+998 90 789 01 26', aholi: 1600 },
        { nomi: 'Shirinobod MFY', rais: 'Tursunov L.', telefon: '+998 90 890 12 37', aholi: 1700 }
    ],
    'Mirishkor tumani': [
        { nomi: 'Avvona MFY', rais: 'Umarov M.', telefon: '+998 90 901 23 48', aholi: 1500 },
        { nomi: 'Ayzabod MFY', rais: 'Valikhanov N.', telefon: '+998 90 012 34 59', aholi: 1600 },
        { nomi: 'Baluj MFY', rais: 'Yuldashev O.', telefon: '+998 90 123 45 71', aholi: 1400 },
        { nomi: 'Bahoriston MFY', rais: 'Zaynutdinov P.', telefon: '+998 90 234 56 82', aholi: 1800 },
        { nomi: 'Barhayot MFY', rais: 'Abdullayev Q.', telefon: '+998 90 345 67 93', aholi: 1700 },
        { nomi: 'Baraka MFY', rais: 'Barataev R.', telefon: '+998 90 456 78 94', aholi: 1600 },
        { nomi: 'Boston MFY', rais: 'Chekurov S.', telefon: '+998 90 567 89 05', aholi: 1900 },
        { nomi: 'Dostlik MFY', rais: 'Davletov T.', telefon: '+998 90 678 90 16', aholi: 1500 },
        { nomi: 'Guliston MFY', rais: 'Eminov U.', telefon: '+998 90 789 01 27', aholi: 1700 },
        { nomi: 'Gulobod MFY', rais: 'Fakhriddinov V.', telefon: '+998 90 890 12 38', aholi: 1600 }
    ],
    'Shahrisabz tumani': [
        { nomi: 'Abziyat MFY', rais: 'G\'aniyev W.', telefon: '+998 90 901 23 49', aholi: 1800 },
        { nomi: 'Avazmalik MFY', rais: 'Hamdamov X.', telefon: '+998 90 012 34 60', aholi: 1700 },
        { nomi: 'Amir Temur MFY', rais: 'Ishmixanov Y.', telefon: '+998 90 123 45 72', aholi: 2000 },
        { nomi: 'Achchigi MFY', rais: 'Jalolov Z.', telefon: '+998 90 234 56 83', aholi: 1600 },
        { nomi: 'Bigmi MFY', rais: 'Kurbanov A.', telefon: '+998 90 345 67 94', aholi: 1500 },
        { nomi: 'Bogishamol MFY', rais: 'Latipov B.', telefon: '+998 90 456 78 95', aholi: 1700 },
        { nomi: 'Gyelon MFY', rais: 'Mirzayev C.', telefon: '+998 90 567 89 06', aholi: 1600 },
        { nomi: 'Duxchi MFY', rais: 'Nizomov D.', telefon: '+998 90 678 90 17', aholi: 1800 }
    ],
    'Dehqonobod tumani': [
        { nomi: 'Gumbuloq MFY', rais: 'Orifov E.', telefon: '+998 90 789 01 28', aholi: 1700 },
        { nomi: 'G\'oroti MFY', rais: 'Pavlenko F.', telefon: '+998 90 890 12 39', aholi: 1600 },
        { nomi: 'Darkhon MFY', rais: 'Qodirov G.', telefon: '+998 90 901 23 50', aholi: 1800 },
        { nomi: 'Dehqonobod MFY', rais: 'Rasulov H.', telefon: '+998 90 012 34 61', aholi: 1900 },
        { nomi: 'Duob MFY', rais: 'Sodiqov I.', telefon: '+998 90 123 45 73', aholi: 1500 },
        { nomi: 'Dostlik MFY', rais: 'Tursunov J.', telefon: '+998 90 234 56 84', aholi: 1700 },
        { nomi: 'Zavqiy MFY', rais: 'Umarov K.', telefon: '+998 90 345 67 95', aholi: 1400 }
    ],
    'Yakkabog\' tumani': [
        { nomi: 'Yakkabog\' MFY', rais: 'Valikhanov L.', telefon: '+998 90 456 78 96', aholi: 1900 },
        { nomi: 'Bozon MFY', rais: 'Yuldashev M.', telefon: '+998 90 567 89 07', aholi: 1700 },
        { nomi: 'Toshkent MFY', rais: 'Zaynutdinov N.', telefon: '+998 90 678 90 18', aholi: 1600 },
        { nomi: 'Xanon MFY', rais: 'Abdullayev O.', telefon: '+998 90 789 01 29', aholi: 1800 },
        { nomi: 'Buyuk MFY', rais: 'Barataev P.', telefon: '+998 90 890 12 40', aholi: 1500 }
    ],
    'Qarshi tumani': [
        { nomi: 'Beshkent MFY', rais: 'Chekurov Q.', telefon: '+998 90 901 23 51', aholi: 1800 },
        { nomi: 'Aralovul MFY', rais: 'Davletov R.', telefon: '+998 90 012 34 62', aholi: 1700 },
        { nomi: 'Xontepa MFY', rais: 'Eminov S.', telefon: '+998 90 123 45 74', aholi: 1600 },
        { nomi: 'Magzon MFY', rais: 'Fakhriddinov T.', telefon: '+998 90 234 56 85', aholi: 1900 },
        { nomi: 'Darvoz MFY', rais: 'G\'aniyev U.', telefon: '+998 90 345 67 96', aholi: 1500 }
    ],
    'Chiroqchi tumani': [
        { nomi: 'Chiroqchi MFY', rais: 'Hamdamov V.', telefon: '+998 90 456 78 97', aholi: 1800 },
        { nomi: 'Navoiy MFY', rais: 'Ishmixanov W.', telefon: '+998 90 567 89 08', aholi: 1700 },
        { nomi: 'Abdullayev MFY', rais: 'Jalolov X.', telefon: '+998 90 678 90 19', aholi: 1600 },
        { nomi: 'Sarbandi MFY', rais: 'Kurbanov Y.', telefon: '+998 90 789 01 30', aholi: 1900 }
    ],
    'Guzor tumani': [
        { nomi: 'Guzor MFY', rais: 'Latipov Z.', telefon: '+998 90 890 12 41', aholi: 1800 },
        { nomi: 'Qoyliq MFY', rais: 'Mirzayev A.', telefon: '+998 90 901 23 52', aholi: 1700 },
        { nomi: 'Omon MFY', rais: 'Nizomov B.', telefon: '+998 90 012 34 63', aholi: 1600 },
        { nomi: 'Xojaniyoz MFY', rais: 'Orifov C.', telefon: '+998 90 123 45 75', aholi: 1500 }
    ],
    'Qamashi tumani': [
        { nomi: 'Qamashi MFY', rais: 'Pavlenko D.', telefon: '+998 90 234 56 86', aholi: 1900 },
        { nomi: 'Navoi MFY', rais: 'Qodirov E.', telefon: '+998 90 345 67 97', aholi: 1700 },
        { nomi: 'Markaziy MFY', rais: 'Rasulov F.', telefon: '+998 90 456 78 98', aholi: 1600 }
    ],
    'Muborak tumani': [
        { nomi: 'Muborak MFY', rais: 'Sodiqov G.', telefon: '+998 90 567 89 09', aholi: 1800 },
        { nomi: 'Shofa MFY', rais: 'Tursunov H.', telefon: '+998 90 678 90 20', aholi: 1700 },
        { nomi: 'Tepa MFY', rais: 'Umarov I.', telefon: '+998 90 789 01 31', aholi: 1600 }
    ],
    'Kokdala tumani': [
        { nomi: 'Kokdala MFY', rais: 'Valikhanov J.', telefon: '+998 90 890 12 42', aholi: 1900 },
        { nomi: 'Turpak MFY', rais: 'Yuldashev K.', telefon: '+998 90 901 23 53', aholi: 1700 },
        { nomi: 'Yangi Tog\' MFY', rais: 'Zaynutdinov L.', telefon: '+998 90 012 34 64', aholi: 1600 }
    ]
};

// Qashqadaryo bosh sahifasi
router.get('/', (req, res) => {
    const tumanlar = [
        { nomi: 'Kasbi tumani', mahallalar: 13, icon: '🏺' },
        { nomi: 'Kitob tumani', mahallalar: 8, icon: '📚' },
        { nomi: 'Koson tumani', mahallalar: 9, icon: '🏜️' },
        { nomi: 'Nishon tumani', mahallalar: 8, icon: '🏞️' },
        { nomi: 'Mirishkor tumani', mahallalar: 10, icon: '🌅' },
        { nomi: 'Shahrisabz tumani', mahallalar: 8, icon: '🏛️' },
        { nomi: 'Dehqonobod tumani', mahallalar: 7, icon: '🌾' },
        { nomi: 'Yakkabog\' tumani', mahallalar: 5, icon: '🌳' },
        { nomi: 'Qarshi tumani', mahallalar: 5, icon: '🏘️' },
        { nomi: 'Chiroqchi tumani', mahallalar: 4, icon: '🕌' },
        { nomi: 'Guzor tumani', mahallalar: 4, icon: '🏔️' },
        { nomi: 'Qamashi tumani', mahallalar: 3, icon: '🏙️' },
        { nomi: 'Muborak tumani', mahallalar: 3, icon: '🛢️' },
        { nomi: 'Kokdala tumani', mahallalar: 3, icon: '💧' }
    ];
    res.render('qashqadaryo/index', { tumanlar });
});

// Barcha mahallalar ro'yxati
router.get('/mahallalar', (req, res) => {
    res.render('qashqadaryo/mahallalar');
});

// Qidiruv
router.get('/qidiruv', (req, res) => {
    const q = req.query.q || '';
    res.send(`<h1>"${q}" boʻyicha qidiruv natijalari</h1><a href="/qashqadaryo/mahallalar">Orqaga</a>`);
});

// 24/7 Xizmatlar
router.get('/xizmatlar', (req, res) => {
    const xizmatlar = [
        { nomi: 'Tez yordam', telefon: '103', kategoriya: 'Tibbiyot', ish_vaqti: '24/7' },
        { nomi: 'Yongin', telefon: '101', kategoriya: 'Favqulodda', ish_vaqti: '24/7' },
        { nomi: 'Militsiya', telefon: '102', kategoriya: 'Xavfsizlik', ish_vaqti: '24/7' },
        { nomi: 'Gaz xizmati', telefon: '104', kategoriya: 'Kommunal', ish_vaqti: '24/7' },
        { nomi: 'Elektr', telefon: '105', kategoriya: 'Kommunal', ish_vaqti: '24/7' },
        { nomi: 'Suv', telefon: '106', kategoriya: 'Kommunal', ish_vaqti: '24/7' }
    ];
    res.render('qashqadaryo/xizmatlar', { xizmatlar });
});

// Tuman boʻyicha mahallalar
router.get('/tuman/:nomi', (req, res) => {
    const tumanNomi = decodeURIComponent(req.params.nomi);
    const mahallalar = tumanMahallalari[tumanNomi] || [];
    res.render('qashqadaryo/tuman', { tuman: tumanNomi, tumans: mahallalar });
});

module.exports = router;
