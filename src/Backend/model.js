const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
});

// module.exports = mongoose.model("personal", Task);

const Statistic = mongoose.model("statistic", dataSchema);

module.exports = Statistic;

// const Task = new mongoose.Schema([
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//   },
// ]);
