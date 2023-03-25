const mongoose = require('mongoose');

// Create your User Model
const reviewSchema = new mongoose.Schema(
    {
     review: String,
     userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
     userName: String   
    }
)


const bathroomSchema = new mongoose.Schema(
    {
name: String,
address: String,
accessCode: Number,
reviews: [reviewSchema],
    },
);
module.exports = mongoose.model('Bathroom', bathroomSchema);
