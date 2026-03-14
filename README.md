# Qashqadaryo Mahallalari - Viloyat Direktoryasi

Qashqadaryo viloyatining barcha tumanlar va mahallalari haqidagi web-sayt.

## Xususiyatlar

- ✨ **14 ta tuman** - Qashqadaryo viloyatining barcha tumanlari
- 🏘️ **Mahallalar ro'yxati** - Her tuman uchun to'liq mahallalar ma'lumoti
- 📱 **Responsive dizayn** - Mobil, tablet va desktopda mükammal ko'rinish
- 🎨 **Modern UI** - Gradient background va smooth animatsiyalar
- 🔍 **Tez qidiruv** - Mahallalarni tez topish

## Tumanlar

1. Kasbi tumani (13 ta mahalla)
2. Kitob tumani (8 ta mahalla)
3. Koson tumani (9 ta mahalla)
4. Nishon tumani (8 ta mahalla)
5. Mirishkor tumani (10 ta mahalla)
6. Shahrisabz tumani (8 ta mahalla)
7. Dehqonobod tumani (7 ta mahalla)
8. Yakkabog' tumani (5 ta mahalla)
9. Qarshi tumani (5 ta mahalla)
10. Chiroqchi tumani (4 ta mahalla)
11. Guzor tumani (4 ta mahalla)
12. Qamashi tumani (3 ta mahalla)
13. Muborak tumani (3 ta mahalla)
14. Kokdala tumani (3 ta mahalla)

## Texnologiyalar

- **Backend**: Node.js + Express.js
- **Frontend**: EJS, HTML, CSS, JavaScript
- **Database**: In-memory (JSON)
- **Docker**: Containerization

## Instalyatsiya

### Mahalliy o'rnatish

```bash
# Repozitoriyani clone qiling
git clone https://github.com/yourusername/qashqadaryo-mahallalari.git
cd qashqadaryo-mahallalari

# Dependencies o'rnatish
npm install

# Serverni ishga tushirish
npm start
```

Server `http://localhost:3000` da ishga tushadi.

### Docker bilan

```bash
# Image build qiling
docker build -t qashqadaryo-mahallalar:latest .

# Konteyner ishga tushiring
docker run -d -p 3000:3000 --name qashqadaryo qashqadaryo-mahallalar:latest
```

## API Routes

- `GET /qashqadaryo/` - Barcha tumanlar ro'yxati
- `GET /qashqadaryo/tuman/:nomi` - Tuman bo'yicha mahallalar
- `GET /qashqadaryo/xizmatlar` - 24/7 Xizmatlar
- `GET /qashqadaryo/mahallalar` - Barcha mahallalar

## Dizayn

- Modern gradient UI
- Responsive kartalar
- Smooth hover effektlari
- Mobile-friendly layout
- Font Awesome ikonkalar

## Fayl Struktura

```
qashqadaryo-mahallalari/
├── routes/
│   ├── qashqadaryo.js       # Qashqadaryo routes
│   ├── faollar.js
│   ├── auth.js
│   └── ...
├── views/
│   ├── qashqadaryo/
│   │   ├── tuman.ejs        # Tuman mahallalari
│   │   ├── xizmatlar.ejs
│   │   └── index.ejs
│   └── ...
├── public/                   # Static fayllar
├── server.js                # Main server file
├── package.json
├── Dockerfile
└── .gitignore
```

## Kontakt

- 📧 Email: developer@qashqadaryo.uz
- 📍 Qashqadaryo viloyati

## Litsenziya

MIT License - Batafsil ma'lumot uchun LICENSE faylini ko'ring

## Hissa Qo'shish

Agar siz bu loyihaga hissa qo'shmoqchi bo'lsangiz:

1. Fork qiling
2. Feature branch yarating (`git checkout -b feature/AmazingFeature`)
3. O'zgarishlarni commit qiling (`git commit -m 'Add some AmazingFeature'`)
4. Branch ga push qiling (`git push origin feature/AmazingFeature`)
5. Pull Request ochiring

---

**Qashqadaryo Viloyati Direktoryasi** - 2026
