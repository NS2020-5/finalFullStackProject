const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entertainerSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        // unique: true
    }
    // occupation:{
    //     enum: ["DJ", "Officiant", "Event Organizer", "Instrumentalist", "Vocalist", "Caterer", "User"],
    // },
    // description: {
    //     type: String
    // }
    //figure out how to import images
    
})

module.exports = mongoose.model('entertainer', entertainerSchema);
