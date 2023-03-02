const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Statistic = require("./model.js");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://santosh:Amma@cluster0.iwqqdfo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db connected..."));

app.get("/alldata", async (req, res) => {
  try {
    const data = await Statistic.find();
    return res.json(data);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => console.log("server loading>>>>"));

// const app = express();

// const MongoCli = require("./mongodb.js");

// app.use("express");
// app.use("mongodb");
// const server = async () => {
//   await MongoCli.init();

//   app.get("/call", async (req, res) => {
//     const tasks = await MongoCli.db
//       .collection("data")
//       .find({ topic: req.params.topic_wanted })
//       .toArray();
//     console.log(tasks);

//     return res.json(tasks);
//   });
// };

// app.listen(5000, () => console.log("server rendring..."));

// server();
// const mongoose = require("mongoose");
// const Task = require("./model");
// const data = require("./model");
// const app = express();

// app.use(express.json());

// const url =
//   "mongodb+srv://santosh:Nehitha@cluster0.iwqqdfo.mongodb.net/?retryWrites=true&w=majority";

// mongoose.set("strictQuery", false);

// mongoose.connect(url).then(() => console.log("DB Connected"));

// // app.get("/", (req, res) => {
// //   res.send("Hello world");
// // });

// app.post("/addtask", async (req, res) => {
//   const { name, email, password, phone } = req.body;

//   try {
//     const newData = new Task({
//       name: name,
//       email: email,
//       password: password,
//       phone: phone,
//     });
//     await newData.save();
//     return res.json(await Task.find());
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// // app.get("/task", async (req, res) => {
// //   try {
// //     return res.json(await Task.find());
// //   } catch (error) {
// //     console.log(error.message);
// //   }
// // });

// app.get("/alldata", async (req, res) => {
//   try {
//     return res.json(await data.find());
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// app.listen(5000, () => console.log("Server rendiring"));
