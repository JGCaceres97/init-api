export default {
  DB: {
    URI: process.env.MONGODB_URI || '',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD
  },
  JWTSecret: process.env.JWT_Secret || 'Wh4tAr3Y0uLo0K1nGF0r'
};
