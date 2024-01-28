import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app=express();
const port=3000;
const API_URL="https://v2.jokeapi.dev/joke/";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>
{
    res.render("index.ejs");
})

app.post("/",async (req,res)=>
{
    try {
        const type=req.body.type;
        const response= await axios.get(API_URL+type);
        console.log(req.body);
        res.render("index.ejs",{content: response.data})
    } catch (error) {
        console.log(error.message);
    }
})

app.listen(port,(req,res)=>
{
    console.log(`Listening at port ${port}`);
})