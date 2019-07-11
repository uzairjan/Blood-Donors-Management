var Request = require('../../models/request');

exports.index = (req, res) => {
    Request.find((err, docs)=>{
        res.render('admin/requests',{requests: docs});
    });
};