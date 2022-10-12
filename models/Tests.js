import mongoose from 'mongoose'

const Test = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    question: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,

    },
    testNumber: {
        type: String,
        required: true,
    },
    incorrect_answers: {
        type: Array,
        default: [],
        required: true,
    },
    correct_answer: {
        type: String,
        required: true,
    },
    imageUrl: String,
}
)

export default mongoose.model('Tests', Test)