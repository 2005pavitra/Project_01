const fs = require("fs");

const myLogger = (logFile) => (req, res, next) => {
    const log = `Method: ${req.method}, URL: ${req.url}, Timestamp: ${new Date().toISOString()}\n`;
    fs.appendFile(logFile, log, (err) => {
        if (err) {
            console.error("Logging error:", err);
        }
    });
    next();
};

module.exports = { myLogger };

