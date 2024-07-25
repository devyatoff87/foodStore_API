import express from "express";
import cors from "cors";
import foods from '../data/food.data.json';

const app = express();
//need these cors for development phase
const port = 5000;


app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}));

app.get("", (request, response) => {
  console.log(request);
  response.send('home page')
});

//get all foods
app.get("/api/foods", (request, response) => {
  response.send(foods)
});

//search food by name
app.get("/api/foods/search/:searchTerm", (request, response) => {
  const searchTerm = request.params.searchTerm;
  const food = foods.filter((f) => {
    return f.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  response.send(food)
});


app.listen(port, () => {
  console.log("Website is serving successfully on http://localhost:" + port);
})
