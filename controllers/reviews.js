// const BathroomModel = require('../models/bathroom');

// module.exports = {
//     create,
//     delete: deleteReview
// }

// function create(req, res) {
//     console.log(req.body)
//     BathroomModel.findById(req.params.id).then(function(bahtroomDoc) {
//         console.log(bahtroomDoc)
//         console.log(req.user)
//         req.body.username = req.user.name;
//         req.body.userId = req.user._id;

//         bahtroomDoc.reviews.push(req.body);
//         bahtroomDoc.save().then(function() {
//             res.redirect(`/flights/${req.params.id}`)
//         })
//     }).catch(err => {
//         console.log(err);
//         res.send(err)
//     })
// }

// function deleteReview(req, res, next) {
//     BathroomModel.findOne({'reviews._id': req.params.id, 'reviews.userId': req.user._id}).then(function(bathroom) {
//         if(!bathroom) return res.redirect('/bathrooms');
//         bathroom.reviews.remove(req.params.id);
//         bathroom.save().then(function() {
//             res.redirect(`/bathrooms/${bathroom._id}`);
//         }).catch(function(err) {
//             return next(err);
//         })
//     })
// }