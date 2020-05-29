// 26- Mini Project adaptation//

// const router = require("express").Router();
// const orkout = require("../models/workout.js");

// router.post("/api/transaction", ({ body }, res) => {
//  Transaction.create(body)
//   .then(dbTransaction => {
//    res.json(dbTransaction);
//   })
//   .catch(err => {
//    res.status(400).json(err);
//   });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//  Transaction.insertMany(body)
//   .then(dbTransaction => {
//    res.json(dbTransaction);
//   })
//   .catch(err => {
//    res.status(400).json(err);
//   });
// });

// router.get("/api/transaction", (req, res) => {
//  Transaction.find({})
//   .sort({ date: -1 })
//   .then(dbTransaction => {
//    res.json(dbTransaction);

const Workout = require("../models/healthy.js");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        console.log("err", err);
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        console.log("err", err);
        res.json(err);
      });
  });
};
