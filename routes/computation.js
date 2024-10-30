const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Retrieve query parameter `x`, or use a random number
    const x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;

    // Apply Math.abs() to `x` as specified by your student ID ending in 1
    const y = Math.abs(x);

    // Format the response message
    const responseMessage = `Math.abs applied to ${x} is ${y}`;

    // Send the response
    res.send(responseMessage);
});

module.exports = router;
