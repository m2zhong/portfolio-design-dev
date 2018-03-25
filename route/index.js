exports.view = function(req, res, next){
    console.log("Currently in route/index.js");
    res.render('index');
}