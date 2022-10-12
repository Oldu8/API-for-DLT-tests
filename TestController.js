import Test from './models/Tests.js'
import TestService from './TestService.js';

class TestController {
    async create(req, res) {
        try {
            const test = await TestService.create(req.body)
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
            const tests = await TestService.getAll();
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
            const test = await TestService.getOne(req.params.id);
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
            const updatedTest = await TestService.update(req.body)
            return res.json(updatedTest)

        } catch (error) {
            res.status(500).json({
                message: 'Cannot update test',
                error
            })

        }
    }
    async delete(req, res) {
        try {
            const test = await TestService.delete(req.params.id);
            return res.json(test)
        } catch (error) {
            res.status(500).json({
                message: 'Cannot delete test',
                error
            })

        }
    }
}

export default new TestController();