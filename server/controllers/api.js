const Post = require('../models/posts');
const Meds = require('../models/meds');
const fs = require('fs');
const meds = require('../models/meds');


module.exports = class API {
    //---------------------------------------------------------this is for patients------------------------------------
    //fetch all items
    static async fetchAllItems(req, res) {
        // res.send('hello from api'); ---test
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    //fetch item by id
    static async fetchItemById(req, res) {
        // res.send('Fetch item by ID');
        const id = req.params.id;
        try {
            const post =  await Post.findById(id);
            res.status(200).json(post);
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }
     //post item
     static async postItem(req, res) {
        // res.send('posting method accessed');
        const post = req.body;
        // debugger
        // console.log(req.file.filename)
        // const imagename = req.file.filename;
        // console.log(imagename)
        // post.image = imagename;
        try {
            await Post.create(post);
            res.status(201).json({ message: 'Post successfuly added'});
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
     //update item
     static async updateItem(req, res) {
        // res.send('Updated item');
        const id = req.params.id;
        const newPost = req.body;
        try {
            await Post.findByIdAndUpdate(id, newPost);
            res.status(200).json({ message: 'post updated successfuly'})
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }
     //delete item
     static async deleteItem(req, res) {
        // res.send('Deleted item');
        const id = req.params.id;
        try {
            const result = await Post.findByIdAndDelete(id);
            res.status(200).json({ message: 'Post deleted sucessfully'});
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    //----------------------------------------------------------this is for meds--------------------------------------
    static async fetchAllmeds(req, res) {
        // res.send('hello from api'); ---test
        try {
            const posts = await Meds.find();
            res.status(200).json(posts);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    //fetch item by id
    static async fetchMedsById(req, res) {
        // res.send('Fetch item by ID');
        const id = req.params.id;
        try {
            const post =  await Meds.findById(id);
            res.status(200).json(post);
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }
     //post item
     static async postMed(req, res) {
        // res.send('posting method accessed');
        const body = req.body;
        try {
            await Meds.create(body);
            res.status(200).json({ message: 'Post successfuly added'});
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
    //update item
    static async updateMed(req, res) {
        // res.send('Updated item');
        const id = req.params.id;
        const newPost = req.body;
        try {
            await Meds.findByIdAndUpdate(id, newPost);
            res.status(200).json({ message: 'post updated successfuly'})
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }
    //delete item
    static async deleteMed(req, res) {
        // res.send('Deleted item');
        const id = req.params.id;
        try {
            const result = await Meds.findByIdAndDelete(id);
            res.status(200).json({ message: 'Post deleted sucessfully'});
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

}