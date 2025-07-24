const Student = require("../Model/student")

exports.getStudent = async (req, res) => {
    try {
        const data = await Student.find()
        return res.json({ errors: false, data:data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postStudent = async (req, res) => {
    try {
        const data = await Student.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.putStudent = async (req, res) => {
    try {
        const data = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteStudent = async (req, res) => {
    try {
        const data = await Student.findByIdAndUpdate(req.params.id, { active: false }, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}