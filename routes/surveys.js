const express = require('express');
const router = express.Router();
const Survey = require('../models/Survey');

// Barcha so'rovnomalar
router.get('/', async (req, res) => {
    try {
        const surveys = await Survey.find({ faol: true }).sort('-created_at');
        res.render('surveys/index', { surveys });
    } catch (err) {
        console.error(err);
        res.redirect('/');
    }
});

// So'rovnoma qatnashish
router.get('/:id', async (req, res) => {
    try {
        const survey = await Survey.findById(req.params.id);
        res.render('surveys/show', { survey });
    } catch (err) {
        console.error(err);
        res.redirect('/surveys');
    }
});

// Javob yuborish
router.post('/:id/vote', async (req, res) => {
    try {
        const survey = await Survey.findById(req.params.id);
        const userId = req.ip;
        
        if (survey.qatnashchilar.includes(userId)) {
            req.flash('error', 'Siz allaqachon qatnashgansiz');
            return res.redirect('/surveys');
        }
        
        // Javoblarni saqlash
        for (let i = 0; i < survey.savollar.length; i++) {
            const javob = req.body[`savol_${i}`];
            if (javob) {
                survey.savollar[i].javoblar.push({
                    foydalanuvchi: userId,
                    javob: javob
                });
            }
        }
        
        survey.qatnashchilar.push(userId);
        await survey.save();
        
        req.flash('success', 'So\'rovnomada qatnashganingiz uchun rahmat!');
        res.redirect('/surveys');
    } catch (err) {
        console.error(err);
        req.flash('error', 'Xatolik yuz berdi');
        res.redirect('/surveys');
    }
});

// Natijalar
router.get('/:id/results', async (req, res) => {
    try {
        const survey = await Survey.findById(req.params.id);
        res.render('surveys/results', { survey });
    } catch (err) {
        console.error(err);
        res.redirect('/surveys');
    }
});

module.exports = router;