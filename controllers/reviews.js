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


async function update(req, res) {
    const bathroom = await BathroomModel.findOne({'reviews._id': req.params.id});
    console.log(bathroom, '<- bathroom')
    const reviewsDoc = bathroom.reviews.id(req.params.id);
    console.log(reviewsDoc, '<- reviewsDoc')
    if(!reviewsDoc.userId.equals(req.user._id)) {
        return res.redirect('/bathrooms')
    }
    reviewsDoc.review = req.body.review;
    console.log(reviewsDoc, '<-reviewsDoc')
    await bathroom.save();
    console.log(bathroom, '<-bathrooms new')
    res.redirect(`/bathrooms/${bathroom._id}`)
}

function edit(req, res) {
    const bathroom = BathroomModel.findOne({'reviews._id': req.params.id})
    const review = bathroom.reviews.id(req.params.id)
    .then(function() {
        res.render('bathrooms/show', {review});
    }).catch(function(err) {
        console.log(err, '<- error for edit function')
    })
}