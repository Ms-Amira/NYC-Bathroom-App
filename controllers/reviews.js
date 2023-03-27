const BathroomModel = require('../models/bathroom');

module.exports = {
    create,
    update
}

function create(req, res) {
    console.log(req.body, '<- req.body')
    BathroomModel.findById(req.params.id).then(function(brDoc) {
        console.log(brDoc)
        console.log(req.user, '<- req.user')
        req.body.username = req.user.name;
        req.body.userId = req.user._id;
        req.body.email = req.user.email;

        brDoc.reviews.push(req.body);
        brDoc.save().then(function() {
            res.redirect(`/bathrooms/${req.params.id}`)
        })
    }).catch(err => {
        console.log(err, '<- review creation error');
        res.send(err)
    })
}

function update(req, res) {
    console.log(req.user, '<-req.user')
    console.log(req.params, '<-req.params')
BathroomModel.findOneAndUpdate({'reviews._id': 
req.params.id, 'reviews.userId': req.user._id})
.then(function(updateDoc) {
req.body, {new:true}
// updateDoc.save().then(function() {
 res.redirect(`/bathrooms/${updateDoc._id}`);
}).catch(function(err) {
    return next(err);
})
}