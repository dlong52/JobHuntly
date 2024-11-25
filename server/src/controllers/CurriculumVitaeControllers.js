const CVServices = require('../services/CVServices')

const updateCV = async (req, res, next) => {
    try {
        const CVId = req.params.id
        const data = req.body
        if (!CVId) {
            return res.status(404).json({
                status: 'error',
                message: 'Tài khoản không tồn tại!'
            })
        }
        const response = await CVServices.updateCV(CVId, data)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({ status: 'error', message: error.message });
    }
}
const deleteCV = async (req, res, next) => {
    try {
        const CVId = req.params.id
        const token = req.headers
        console.log(token);
        if (!CVId) {
            return res.status(404).json({
                status: 'error',
                message: 'Tài khoản không tồn tại!'
            })
        }
        const response = await CVServices.deleteCV(CVId)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({ status: 'error', message: error.message });
    }
}
const getAllCVs = async (req, res, next) => {
    try {
        const response = await CVServices.getAllCVs()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({ status: 'error', message: error.message });
    }
}
const getCVDetails = async (req, res, next) => {
    try {
        const CVId = req.params.id
        if (!CVId) {
            return res.status(404).json({
                status: 'error',
                message: 'Tài khoản không tồn tại!'
            })
        }
        const response = await CVServices.getCVDetails(CVId)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({ status: 'error', message: error.message });
    }
}

module.exports = {
    updateCV,
    deleteCV,
    getAllCVs,
    getCVDetails,
}
