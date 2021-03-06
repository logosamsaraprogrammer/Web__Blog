var Comment=require('../models/comment');
var Article=require('../models/article');

exports.giveApplause = function(req,res){
    var articleId=req.query.id;
     Article.update({
        _id: articleId
    }, {
        $inc: {
          applausec: 1
        }
      }, function(err) {
        if (err) {
          console.log(err);
          res.send({
              success: 0
          })
        }else{
          res.send({
              success: 1
          })
        }
    });
}


//admin post movie
exports.save = function(req,res){
    var _comment=req.body.comment;
    var articleId=_comment.article;

    Article.update({
        _id: articleId
    }, {
        $inc: {
          commentc: 1
        }
      }, function(err) {
        if (err) {
          console.log(err);
        }
    });

//如果已经有这条评论，此时就是给这条评论再增加评论，即叠楼
    if(_comment.cid){
        Comment.findById(_comment.cid,function(err,comment){
            var reply = {
                from:_comment.from,
                to:_comment.tid,
                content:_comment.content
            };
            comment.reply.push(reply);

            comment.save(function(err,comment){
                if(err){
                    console.log(err)
                }
                res.redirect('/article/show/'+articleId)
            })
        })
    }else{
        var comment=new Comment(_comment); //若没有这条评论则新增一条
        comment.save(function(err,comment){
            if(err){
                console.log(err)
            }
            res.redirect('/article/show/'+articleId)
        })
    }
};

exports.listcomments = function(req, res) {
    Comment.fetch(function(err, comments) {
        if (err) {
            console.log(err)
        }

        res.render('admin_comments', {
            user: req.session.user,
            title: '评论列表页面',
            comments: comments
        })
    })
};