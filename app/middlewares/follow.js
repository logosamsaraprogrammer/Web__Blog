var Follow = require('../models/follow');


exports.add = function(req,res){
     var _user = req.session.user;
     var _tid = req.query.tid;
    if(_user._id){
        Follow.findOne({from:_user._id},function(err,follow){
            if(err)
                console.log(err);
            if(follow){
                if(follow.to.indexOf(_tid)>=0)
                    res.send({success:1});
                else{
                    follow.to.push(_tid);
                    follow.save(function(err,follow){
                        if(err){
                            console.log(err)
                        }
                        res.send({success:1});
                    })
                }
            }else{
                var _follow = new Follow({
                    from: _user._id,
                    to:[_tid]
                });
                _follow.save(function (err, res) {
                    if(err)
                        console.log(err);
                    res.send({success:1});
                });
            }
        })


    }else{
        res.send({success:1});
    }
};

exports.listfollows = function (req, res) {
    Follow.fetch(function(err, follows) {
        if (err) {
            console.log(err)
        }

        res.render('admin_follows', {
            user: req.session.user,
            title: '关注列表页面',
            follows: follows
        })
    })
};