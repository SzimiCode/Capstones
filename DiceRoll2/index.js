import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;




app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get("/", (req, res) => {
  const data = {
    blogText: blogText,
    blogTexts: blogTexts,
  };
  res.render("index.ejs", data);
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
let blogTexts = [];
let blogText = "";
app.post("/submit", (req, res) => {
    blogText = req.body.blogText;
    blogTexts.push(blogText);
    res.redirect("/");  
});
app.post('/action1', (req, res) => {
  const action = req.body.id;
  if (action === "delete") {
    const indexesToDelete = req.body.deleteTexts; 
    if (indexesToDelete) {
      blogTexts = blogTexts.filter((text, index) => !indexesToDelete.includes(index.toString()));
    }
  } else if (action === "edit") {
 
  }
  res.redirect('/');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });