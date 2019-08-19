function hbsHelpers(hbs){
    return hbs.create({
        defaultLayout: "layout",
        extname: ".hbs",
        helpers:{
            formateDate: function(date, options){
                var day = ("0" + date.getDate()).slice(-2);
                var month = ("0" + (date.getMonth() + 1)).slice(-2);
                var year = date.getFullYear();
                var formatedDate = day + "-" + month + "-" + year;

             return formatedDate;
            },
            isValue: function(condtion, options){
                if(options.hash.desired === options.hash.type){
                    return options.fn(this);
                }else{
                    return options.inverse(this);
                }
            }
        }

    });
}

module.exports = hbsHelpers;


// {{#isValue variable value="hero"}}
//     it matches, so do some stuff
// {{/isValue}}