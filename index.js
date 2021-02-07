// const http = require ("http");



const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get('/api/v1/githubUser/:githubUserName/avatar', (req,res) => { res.send("Avatar") });
app.get('/api/v1/githubUser/:githubUserName/repo/:repoName', (req,res) => { res.send("repoName") });
app.get('/api/v1/githubUser/:githubUserName/repo/:repoName/contributers', (req,res) => { res.send("contributers") });

app.listen(port);




