exports.view = function(req, res, next){
    console.log("Currently in route/about.js");
    res.render('about');
}