const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/convert', (req, res) => {
    const { markdown } = req.body;
    if (!markdown) {
        return res.status(400).send('Markdown content is required');
    }
    res.json({ html: markdown }); 
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
