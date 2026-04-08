const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

/* ✅ GET all products */
app.get("/products", (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result);
    });
});

/* ✅ GET product by ID */
app.get("/products/:id", (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM products WHERE id=?", [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result);
    });
});

/* ✅ INSERT product */
app.post("/products", (req, res) => {
    const { id, title, description, imageurl, unitprice, likes } = req.body;

    const sql = "INSERT INTO products VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [id, title, description, imageurl, unitprice, likes],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.send("Product added");
        });
});

/* ✅ UPDATE product */
app.put("/products/:id", (req, res) => {
    const id = req.params.id;
    const { title, description, imageurl, unitprice, likes } = req.body;

    const sql = `UPDATE products
                SET title=?, description=?, imageurl=?, unitprice=?, likes=?
                WHERE id=?`;

    db.query(sql, [title, description, imageurl, unitprice, likes, id],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.send("Product updated");
        });
});

/* ✅ DELETE product */
app.delete("/products/:id", (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM products WHERE id=?", [id],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.send("Product deleted");
        });
});

app.listen(7777, () => {
    console.log("Server running on http://localhost:7777");
});