import express from "express";
import cors from "cors";
import { add } from "./math.js";
import { subtract } from "./math.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

function validateNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        return false;
    }

    return true;
}

app.get("/add", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (!validateNumbers(a, b)) {
        return res.status(400).json({ error: "Both values must be numbers" });
    }

    const result = add(a, b);
    res.json({ result });
});

app.get("/subtract", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (!validateNumbers(a, b)) {
        return res.status(400).json({ error: "Both values must be numbers" });
    }

    const result = subtract(a, b);
    res.json({ result });
});


app.post("/add", (req, res) => {
    const { a, b } = req.body;
    if (!validateNumbers(a, b)) {
        return res.status(400).json({ error: "Both values must be numbers" });
    }

    res.json({ result: add(a, b) });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});