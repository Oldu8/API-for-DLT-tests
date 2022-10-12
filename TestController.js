import Test from './models/Tests.js'

class TestController {
    async create(req, res) {
        try {
            const { id, question, category, testNumber, incorrect_answers, correct_answer, imageUrl } = req.body;
            const test = await Test.create({
                id, question, category, testNumber, incorrect_answers, correct_answer, imageUrl
            })
            res.json(test)
        } catch (error) {
            res.status(500).json({
                message: 'Cannot create test',
                error
            })

        }
    }

    async getAll(req, res) {
        try {
            const tests = await Test.find();
            res.json(tests)
        } catch (error) {
            res.status(500).json({
                message: 'Cannot get all tests',
                error
            })

        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(404).json({
                    message: 'Cant find test by id'
                })
            }
            const test = await Test.findById(id);

            res.json(test)
        } catch (error) {
            res.status(500).json({
                message: 'Cannot get one test',
                error
            })

        }
    }
    async update(req, res) {
        try {

        } catch (error) {
            res.status(500).json({
                message: 'Cannot update test',
                error
            })

        }
    }
    async delete(req, res) {
        try {

        } catch (error) {
            res.status(500).json({
                message: 'Cannot delete test',
                error
            })

        }
    }
}

export default new TestController();