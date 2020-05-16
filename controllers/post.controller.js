var UserM = require('../models/user.model');
var PostM = require('../models/post.model');

module.exports.create = async (req,res) => {
    var id = req.signedCookies.id;
    var user = await UserM.findById(id);
    console.log(user);
    res.render('post/create',{
        user: user
    });
}
module.exports.createPOST = (req,res) => { // Tạo bài viết (Conntent)
    // console.log(req.signedCookies.id);
    // req.body.user = req.signedCookies.id;
    // req.body.banner = "/" + req.file.destination + req.file.filename;
    console.log(req.body);
    // PostM.create(req.body, function (err, UserM) {
    //     if (err) return handleError(err);
    //     // saved!
    //     console.log(PostM.title + "da duoc them vao database")
    // });
    // res.redirect('/');
}
// Test
module.exports.upload = (req, res) => {
	// Some operation
	res.send({
		"uploaded": 1,
    	"fileName": "IMAGE.PNG",
    	"url": "/public/img/user-upload"
	})
}
//
module.exports.id = async (req, res) => {
    var id = req.params.id;
    var data = await (await PostM.findById(id).populate('user').populate('comment.user'));
    res.render('post/post-index', {
        data: data
        // comment: comment
    });
}