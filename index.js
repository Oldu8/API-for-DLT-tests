import express from 'express';
import mongoose from 'mongoose';
import router from './router.js'

const DB_URL = `mongodb+srv://DLT_admin:DLT_pass0508@testsarr.kwctz52.mongodb.net/?retryWrites=true&w=majority`
const app = express();
const PORT = 8080;
app.use(express.json())

app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL,)
            .then(() => console.log('DB is ok'))
            .catch((err) => console.log('DB error', err))
        app.listen(PORT, () => console.log('Server has been started on port' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp();