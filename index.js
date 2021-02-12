const https = require("https");

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/api/v1/githubUser/:githubUserName/avatar", (req, res) => {
    console.log("request");
  res.send("Avatar");
});

app.get("/api/v1/githubUser/:githubUserName/repo/:repoName", (req, res) => {

    var options = {
        host: 'https://api.github.com',
        path: `/repos/${req.params.githubUserName}/${req.params.repoName}`,
        method: 'GET',
        headers: {
            "User-Agent" : "node-js"
        }
       
    };
    https.get(`https://api.github.com/${req.params.githubUserName}/${req.params.repoName}`, options,(resp) => {
        let data = '';
        resp.on("data", (chunk) => {
            data += chunk;
          });
            resp.on("end", () => {
                data = JSON.parse(data);
                if(data.message === "Not Found"){
                    res.status(200).send("Repo Not Found");
                } else {
                    res.status(400).send(data);
                }
            });
    });
});

app.get(
  "/api/v1/githubUser/:githubUserName/repo/:repoName/contributers",
  (req, res) => {
    res.send("contributers");
  }
);

app.listen(port);

console.log(`Server running on port ${port}`);