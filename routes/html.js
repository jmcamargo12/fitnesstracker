let path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};

// router.get("/api/transaction", (req, res) => {
//  Transaction.find({})
//   .sort({ date: -1 })
//   .then(dbTransaction => {
//    res.json(dbTransaction);
//   })
//   .catch(err => {
//    res.status(400).json(err);
//   });
// });
