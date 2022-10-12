import Test from './models/Tests.js'

class TestService {
    async create(test) {
        const createdTest = await Test.create(test)
        return createdTest
    }

    async getAll() {
        const tests = await Test.find();
        return tests

    }
    async getOne(id) {
        if (!id) {
        }
        const test = await Test.findById(id);
        return test
    }
    async update(test) {
        console.log(test)
        if (!test._id) {
            throw new Error('id is not defined')
        }
        const updatedTest = await Test.findByIdAndUpdate(test._id, test, { new: true })
        return updatedTest
    }
    async delete(id) {
        if (!id) {
            throw new Error('id is not defined')
        }
        const test = await Test.findByIdAndDelete(id);
        return test
    }
}

export default new TestService();