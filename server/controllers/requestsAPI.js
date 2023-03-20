const Reqs = require('../models/requests')

module.exports = class API {
    //-----------------------------------------this is for requests--------------------------------
    //fetch all requests
    static async fetchAllReqs(req, res) {
        try {
            const posts = await Reqs.find();
            res.status(200).json(posts); 
        } catch (err) {
            res.status(404).json({ message: err.message});
        }
    }
    //fetch only 1 request
    static async fetchReqsById(req, res) {
        const id = req.params.id;
        try {
            const post = Reqs.findById();
            res.status(200).json(post);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    //post request
    static async postRequest(req, res) {
        console.log("=-----------------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=------------------------=");
        const body = req.body;
        try {
            await Reqs.create(body);
            res.status(201).json({ message: 'Req successfully added' });
            console.log("okOKOKOKOK")
        } catch (err) {
            console.log("errrrrrrr")
            res.status(400).json({ message: err.message })
        }
    }

    //update request
    static async updateRequest(req, res) {
        const id = req.params.id;
        const newPost = req.body;
        try {
            await Reqs.findByIdAndUpdate(id, newPost);
            res.status(200).json({ message: 'UPDATED SUCCESSFULLY' })
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }
    //delete request
    static async deleteRequest(req, res) {
        const id = req.params.id;
        try {
            const result = await Reqs.findByIdAndDelete(id);
            res.status(200).json({ message: 'DELETED SUCCESSFULLY' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}