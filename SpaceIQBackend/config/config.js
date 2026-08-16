const dotenv = require("dotenv");

dotenv.config();

if (!process.env.PORT) {
    throw new Error("PORT is not defined in environment variables");
}

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables");
}

// JWT_SECRET will be added later for authentication
// if (!process.env.JWT_SECRET) {
//     throw new Error("JWT_SECRET is not defined in environment variables");
// }

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,

    // JWT_SECRET: process.env.JWT_SECRET,
};