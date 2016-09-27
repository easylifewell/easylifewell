var sms =  require('../../model/sms.js');


module.exports = function(req, res){
    sms.send(req.query.phone, req.query.num)
    res.send('phone:' + req.query.phone + '  num:' + req.query.num);
};
