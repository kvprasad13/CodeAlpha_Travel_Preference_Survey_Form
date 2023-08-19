
const connectDb = require('./config/dbConnection.js');
const express = require('express');
const dotenv = require('dotenv').config();

const Survey = require('./models/surveyModel.js');
const asyncHandler = require('express-async-handler');

const cors = require('cors');
connectDb();
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', asyncHandler(async (req, res) => {
    const allSurveyDetails = await Survey.find();
    if (!allSurveyDetails) {
        res.status(404);

        throw new Error("No records found.")

    }
    res.status(200).send(allSurveyDetails);


}));
app.get('/:id', asyncHandler(async (req, res) => {
    const surveyDetails = await Survey.findById(req.params.id);
    if (!surveyDetails) {
        res.status(404);

        throw new Error("Invalid id provided.")

    }
    res.status(200).send(surveyDetails);


}));
app.post('/', asyncHandler(async (req, res) => {

    const { personalInfo, travelPlanning, travelHabits, travelDestinations, additionalComments } = req.body;

    if (!personalInfo || !travelPlanning || !travelHabits || !travelDestinations || !additionalComments) {
        res.status(404);
        throw new Error("All fields are required");
    }
    else {

        const survey = await Survey.create({ personalInfo, travelPlanning, travelHabits, travelDestinations, additionalComments });


        res.status(201);

        res.send(`survey details registered ${survey}`);

    }
}));

app.delete('/:id', asyncHandler(async (req, res) => {

    const record = await Survey.findByIdAndDelete(req.params.id);
    if (!record) {
        res.send(404);
        throw new Error("No record found");
    }
    res.status(200).send("The given id record has been deleted successfully");


}));

app.listen(port, () => {
    console.log(`listening on port  ${port}`);
});