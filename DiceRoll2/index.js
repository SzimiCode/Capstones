import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var week = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const day = new Date("2024-09-28T10:58:30");
    var weekday = day.getDay();
    
    if (weekday < 6 || weekday > 0){
        week = "week";
    }
    else{
        week = "weekend";
    }
    console.log(week);
    res.render("index.ejs", {
        dayType: week,
    });
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });