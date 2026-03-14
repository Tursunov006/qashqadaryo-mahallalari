// config/oneid.js - OneID sozlamalari
module.exports = {
    // TEST UCHUN SOZLAMALAR (keyinchalik o'zgartirasiz)
    client_id: 'test_client_id',
    client_secret: 'test_client_secret',
    redirect_uri: 'http://localhost:3000/auth/oneid/callback',
    
    // OneID URL'lar
    auth_url: 'https://my.gov.uz/uz/oauth2/authorize',
    token_url: 'https://my.gov.uz/uz/oauth2/token',
    userinfo_url: 'https://my.gov.uz/uz/oauth2/userinfo',
    
    // So'rov doirasi
    scope: 'openid profile email phone',
    
    // Test rejimi (haqiqiy OneID bo'lmaganda ishlatish uchun)
    test_mode: true
};