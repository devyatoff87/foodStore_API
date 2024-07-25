import express from "express";
import cors from "cors";

const app = express();
//need these cors for development phase
const port = 5000;


app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}));

app.get("/api/foods", (request, response) => {
  console.log(request);
  response.send('I am working')
});

app.get("", (request, response) => {
  console.log(request);
  response.send('I am working')
});

app.listen(port, () => {
  console.log("Website is serving successfully on http://localhost:" + port);
})
