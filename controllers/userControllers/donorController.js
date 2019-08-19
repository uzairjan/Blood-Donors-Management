


exports.index = (req, res) => {
  res.render('admin/donors/donors');
};

exports.create = (req, res) => {
    res.send("creating");
};

exports.edit = (req, res) => {
  res.send("editing");
};

exports.delete = (req, res) => {
  res.send("deleting");
};

exports.store = (req, res) => {
  res.send("storing");
};


exports.update = (req, res) => {
  res.send("updating");
};