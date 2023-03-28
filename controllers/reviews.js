const BathroomModel = require('../models/bathroom');

module.exports = {
    create,
    update,
    edit
}

function create(req, res) {
    console.log(req.body, '<- req.body')
    // pulling the bathroom with a specific id that is going to be reviewed and storing the document in the brDoc variable
    BathroomModel.findById(req.params.id).then(function(brDoc) {
        console.log(brDoc)
        console.log(req.user, '<- req.user')
        // requiring these properties for the review process
        req.body.username = req.user.name;
        req.body.userId = req.user._id;
        // req.body.email = req.user.email;

//adding req.body to the reviews array and storing it in brDoc
        brDoc.reviews.push(req.body);
        brDoc.save().then(function() {
            res.redirect(`/bathrooms/${req.params.id}`)
        })
    }).catch(err => {
        console.log(err, '<- review creation error');
        res.send(err)
    })
}

// function update(req, res, next) {
//     console.log(req.user, '<-req.user')
//     console.log(req.params, '<-req.params')
//     // calling on the review with a specific id to update
// BathroomModel.findOneAndUpdate({'reviews._id': 
// // calling on the user that made the review with a specific id
// req.params.id, 'reviews.userId': req.user._id})
// // updating the review document with new information
// .then(function(updateDoc) {
// // {new:true} returns the updated document
// req.body, {new:true}
//  res.redirect(`/bathrooms/${updateDoc._id}`);
// }).catch(function(err) {
//     return next(err);
// })
// }


function update(req, res) {
    // using the review id to pluck it from the db
    BathroomModel.findOne({'reviews._id':req.params.
    id}).then(function(updateDoc) {
        // accessing the review by it's id and accessing the text propety
        updateDoc.reviews.id(req.params.id).text = req.body.text;
        // making sure the user id property matches the id of the logged in user
        if (!updateDoc.reviews.id(req.params.id).userId.equals(req.user._id))
        updateDoc.save().then(() => {
            return res.redirect(`/review/${BathroomModel.id}`);
        }).catch(function(err) {
            console.log(err)
        })
    })
}


function edit(req, res) {
    // retrieving the review within the bathroom model
    BathroomModel.findOne({'reviews._id': req.params.
    id}).then(function(editBr) {
        res.render('reviews/edit', {review:editBr.reviews.id(req.params.id)});
    })
}