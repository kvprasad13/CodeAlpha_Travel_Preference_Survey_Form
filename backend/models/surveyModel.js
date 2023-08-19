const mongoose = require('mongoose');
const surveySchema = mongoose.Schema({
    personalInfo: {
        type: Object,
        required: [true, "Please fill Personal Information"]
    },
    travelPlanning: {
        type: Object,

        required: [true, "Please fill Travel Planning"]
    }
    ,
    travelHabits: {
        type: Object,
        required: [true, "Please fill Travel Habits"]
    },
    travelDestinations: {
        type: Object,
        required: [true, "Please fill Travel Destinations"]
    },
    additionalComments: {
        type: String,
        required: [true, "Please fill Additional Comments"]
    }
});


module.exports = mongoose.model("Survey", surveySchema);