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
let blogTexts = [];
let blogText = "";
app.post("/submit", (req, res) => {
    blogText = req.body.blogText;
    blogTexts.push(blogText);
    res.redirect("/");  
});


app.post('/action1', (req, res) => {
  const action = req.body.action; 
  
  if (action === "delete") {
    const indexesToDelete = req.body.deleteTexts; 
    if (indexesToDelete) {
      blogTexts = blogTexts.filter((text, index) => !indexesToDelete.includes(index.toString()));
    }
    res.redirect('/');
  } else if (action === "edit") {
    const editIndex = req.query.editIndex; 
    if (editIndex !== undefined) {
      const textToEdit = blogTexts[editIndex];
      res.render("editing.ejs", { textToEdit, editIndex });
    } else {
      res.redirect('/'); 
    }
  }
});
app.post('/update', (req, res) => {
  const updatedText = req.body.blogText;
  const editIndex = req.body.editIndex;
  blogTexts[editIndex] = updatedText;  
  res.redirect('/');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });