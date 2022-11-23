require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const Fruit = require("./models/fruits")
const reactViews = require('express-react-views')
const mongoose = require("mongoose")


mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once("open",() => {
  console.log("connected to mongo")
})


app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

app.use((req, res, next) => {
  console.log("Im running for all routes")
  console.log("1. middleware")
  next()
})

app.use(express.urlencoded({extended: false}))



app.get("/fruits", (req, res) => {
  Fruit.find({}, (error, allFruits) => {
    if (!error) {
      res.status(200).render("fruits/Index", {
        fruits: allFruits
      })
    } else {
      res.status(400).send(error)
    }
  })
})

app.get("/fruits/New", (req, res) => {
  console.log("2. controller")
  res.render("fruits/New")
})

app.post("/fruits", (req, res) => {
  console.log("2. controller")
  if (req.body.readyToEat === "on"){
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  Fruit.create(req.body, (error, createdFruit) => {
    if (!error) {
      // redirects after creating fruit, to the Index page
      res.status(200).redirect("/fruits")
    } else {
      res.status(400).send(error)
    }
  })
})



app.get("/fruits/:id", (req, res) => {
  Fruit.findById(req.params.id, (error, foundFruit) => {
    if (!error) {
      res
        .status(200)
        .render("fruits/Show", {
          fruit: foundFruit
        })
    } else {
      res
        .status(400)
        .send(error)
    }
  })
})



app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
});