const Post = require('../models/posts');
const fs = require('fs');


module.exports = class API {
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
        const imagename = req.file.filename;
        post.image = imagename;
        try {
            await Post.create(post);
            res.status(200).json({ message: 'Post successfuly added'});
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
     //update item
     static async updateItem(req, res) {
        // res.send('Updated item');
        const id = req.params.id;
        let new_image = "";
        if (req.file) {
            new_image = req.file.filename;
            try {
                fs.unlinkSync('./uploads/' + req.body.old_image);
            } catch (err) {
                console.log(err)
            }
        } else {
            new_image = req.body.old_image;
        }
        const newPost = req.body;
        newPost.image = new_image;

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
            if(result.image != '') {
                try {
                    fs.unlinkSync('./uploads' + result.image);
                } catch (err) {
                    console.log(err);
                }
            }
            res.status(200).json({ message: 'Post deleted sucessfully'});
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}