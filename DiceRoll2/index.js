import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { blogText: blogText });
});
app.get("/writing", (req, res) => {
    res.render("writing.ejs");
  })
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
  })
app.get("/search", (req, res) => {
    res.render("search.ejs");
  })

let blogText = "";
app.post("/submit", (req, res) => {
    blogText = req.body.blogText;  
    res.redirect("/");  
});
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });