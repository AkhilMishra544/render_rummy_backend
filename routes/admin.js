const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const adminSecret = req.headers['x-admin-secret'];
  if (adminSecret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  res.json({
    status: 'You are Malik ✅',
    control: ['users', 'wallets', 'games'],
    uptime: process.uptime()
  });
});

module.exports = router;
