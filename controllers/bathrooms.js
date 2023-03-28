const BathroomModel = require('../models/bathroom');

module.exports = {
    new: newBathroom,
    create,
    index,
    show,
    delete: deleteBathroom
}
// rendering the new bathroom
function newBathroom(req, res) {
 res.render('bathrooms/new')
}

function create(req, res) {
    // creating a bathroom and setting it to a value of either true or false
    req.body.createBathroom = !!req.body.createBathroom;
    console.log(req.body);
// creating a bathing and attaching it to the bathroom schema
    BathroomModel.create(req.body).then(function(createdBathroomInDb) {
        console.log(createdBathroomInDb)
        res.redirect(`/bathrooms/${createdBathroomInDb._id}`);
    }).catch((err) => {
        console.log(err);
      res.send('Check the terminal or log the err object')
    })
}

function index(req, res) {
    // using find to query the db for all of the bathrooms in my model
    BathroomModel.find({}).then(function(allBathrooms) {
        console.log(allBathrooms)
        // rendering all of the bathrooms
        res.render('bathrooms/index', {bathrooms: allBathrooms})
    }).catch(function(err) {
        console.log(err);
        res.send(err)
    })
}

function show(req, res) {
    // finding a bathroom by it's id
    BathroomModel.findById(req.params.id)
    .then(function(bathroom) {
        console.log(bathroom)
        // rendering the specific bathroom that's called upon
        res.render('bathrooms/show', {bathroom: bathroom})
    })

}

function deleteBathroom(req, res) {
    // finding a bathroom by it's id and allowing a logged in user permission
    BathroomModel.findByIdAndDelete({_id: req.params.id, userId: req.user._id}).then(function(deleteBr) {
        console.log(deleteBr);
        return res.redirect('/bathrooms');
    }).catch(function(err) {
        console.log(err, '<- delete error');
    })
}