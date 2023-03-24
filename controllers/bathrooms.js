const BathroomModel = require('../models/bathroom');

module.exports = {
    // new: newBathroom,
    create,
    index
}

// function newBathroom(req, res) {
//  res.render('bathrooms/new')
// }

function create(req, res) {
    req.body.createBathroom = !!req.body.createBathroom;
    console.log(req.body);

    BathroomModel.create(req.body).then(function(createdBathroomInDb) {
        console.log(createdBathroomInDb)
        res.redirect(`/bahtrooms/${createdBathroomInDb._id}`);
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