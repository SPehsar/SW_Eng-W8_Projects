require("dotenv").config() // provides access to .env file contents
const express = require("express");
const app = express();
const PORT = 3000;
const Pokemon = require("./models/pokemon");
const reactViews = require("express-react-views");
const mongoose = require("mongoose")


// console.log(process.env.MONGO_URI) // to test connection to MongoDB Server
// type  npm run dev  in bash/VSCode console 1:41 class video recording


// ===== Connection to Database =====
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })


  // This verifies connection to MongoDB server
  mongoose.connection.once("open",() => {
    console.log("connected to mongo")
  })


// General steps to set view enginf in application
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());

// Testing and setting Middleware
app.use((req, res, next)=> {
    console.log("Middleware is Running for all routes");
    next();
});


// this part was replica of what we had in the class for middleware
app.use(express.urlencoded({extended:false}));


// Landing page is rendered here.
app.get("/", (req, res) => {
    res.render("StartPage");
});


// Renders Index.jsx
app.get("/pokemon", (req, res) => {
    // Query model to return all pokemons
    Pokemon.find({}, (error, allPokemons) => { // pokemons **** Check it was fruits
      if (!error) {
        res.status(200).render("Index", { // *** maybe onkly Index no pokemon
          pokemon: allPokemons
        })
      } else {
        res.status(400).send(error)
      }
    })
  
  })


// New
app.get("/pokemon/new", (req, res) => { // ** check "new" here it is similar case to fruits anyway
    res.render("New");
});


//Create new Pokemon
app.post("/pokemon", (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        if (!error) {
          // redirects after creating pokemon, to the Index page
          res.status(200).redirect("/pokemon") // ***** which i put view nme
        } else {
          res.status(400).send("<h2 style='text-align: center'>Sorry :( , Zomething zBroke!</h2>" + 
          "<br></br>" +
          "<center><img src='https://www.boredpanda.com/blog/wp-content/uploads/2021/07/CLFmWwbJppd-png__700.jpg' width='200' height='200'></img></center>" +
          '<br></br>' +
          "<p style='text-align: center'>zMake sure to zput correct alphabatical pokemon name and zcorrect URL for z image.</p>"  + 
          '<br></br>'  + 
          '<center><a href="/"><input type="submit" value="Start All Over" /></a></center>')
        }
      })
});


//Show me what you got!
app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (error, foundPokemon) => {
    if (!error) {
      res
        .status(200)
        .render("Show", {
          pokemon: foundPokemon
        })
    } else {
      res
        .status(400)
        .send("<h2 style='text-align: center'>Sorry :( , Zomething zBroke!</h2>" + 
          "<br></br>" +
          "<center><img src='https://www.boredpanda.com/blog/wp-content/uploads/2021/07/CLFmWwbJppd-png__700.jpg' width='200' height='200'></img></center>" +
          '<br></br>' +
          "<p style='text-align: center'>zMake sure to zput correct alphabatical pokemon name and zcorrect URL for z image.</p>"  + 
          '<br></br>'  + 
          '<center><a href="/"><input type="submit" value="Start All Over" /></a></center>')
    }
  })
})


// error handler middleware if not using preceding error handler
// app.use((error, req, res, next) => {
//     console.error(error.stack);
//     res.status(500).send("Something Broke!");
//    })


// Tell the app to listen on PORT 
// for HTTP requests from clients
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});