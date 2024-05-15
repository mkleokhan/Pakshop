const multer = require('multer');
const path = require('path');

// Define storage options
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../frontend/src/uploaded-images');
  },
  filename: function (req, file, cb) {
    // Save filename with extension
    cb(null, Date.now() + (file.originalname));
  }
});

// Create an instance of Multer middleware with the configured storage options
const upload = multer({ storage: storage });

module.exports = upload;