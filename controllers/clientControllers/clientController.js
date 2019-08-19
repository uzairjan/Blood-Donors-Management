
const Request = '../../model/request';
exports.registerRequest = (req, res) => {
  try {
    Request.create({});
    res.send(req.body);
  } catch (error) {
    
  }
};

exports.index = (req, res) => {
  res.render("client/index", { layout: "client_layout" });
}

exports.about = (req, res) => {
  res.render("client/about", { layout: "client_layout" });
}


exports.faqs = (req, res) => {
  res.render("client/faq", { layout: "client_layout" });
};

exports.requests = (req, res) => {
  res.render("client/requests", { layout: "client_layout" });
};

exports.donor = (req, res) => {
  res.render("client/register_donor", { layout: "client_layout" });
};

exports.login = (req, res) => {
  res.render("client/login", { layout: "client_layout" });
};


exports.feedback = (req, res) => {
  res.render("client/feedback", { layout: "client_layout" });
};