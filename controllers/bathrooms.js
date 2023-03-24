const BathroomModel = require('../models/bathroom');

module.exports = {
    new: newBathroom,
    create,
    index,
    show
}

function newBathroom(req, res) {
 res.render('bathrooms/new')
}

function create(req, res) {
    req.body.createBathroom = !!req.body.createBathroom;
    console.log(req.body);

    BathroomModel.create(req.body).then(function(createdBathroomInDb) {
        console.log(createdBathroomInDb)
        res.redirect(`/bathrooms/${createdBathroomInDb._id}`);
    }).catch((err) => {
        console.log(err);
      res.send('Check the terminal or log the err object')
    })
}

function index(req, res) {
    BathroomModel.find({}).then(function(allBathrooms) {
        console.log(allBathrooms)
        res.render('bathrooms/index', {bathrooms: allBathrooms})
    }).catch(function(err) {
        console.log(err);
        res.send(err)
    })
}

function show(req, res) {
    BathroomModel.findById(req.params.id).then(function(bathroom){review.find({bathroom: bathroom._id}).then(function(reviews) {
        console.log(bathroom)
        res.render('bathrooms/show', {bathroom: bathroom, review: reviews})
    }) })

}