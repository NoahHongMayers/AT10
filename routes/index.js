/**
 * @file     app.js
 * @author   Noah Hong Mayers | 202430525@edu.clg.qc.ca
 * @version  1.0
 * @date     September 22 2026
 * @brief    client router
 */

var express = require('express');// Import the Express framework
var router = express.Router();// Create a new router object to handle routes


router.get('/', function (req, res, next) {
  res.render('pages/index', { title: 'Home' });
});

module.exports = router;// Export the router object to be used in other parts of the application
