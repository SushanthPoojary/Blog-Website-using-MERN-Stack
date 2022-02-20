const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {$set: req.body},
                    {new: true}
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }

        } else {
            res.status(401).json("you can only update your post!");
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
         console.log("hit");
        const post = await Post.findById(req.params.id);
        console.log(post.username);
        if (post.username === req.body.username) {
           
            try {
                console.log("hit");
                const response = await post.delete();
                console.log(r);
                res.status(200).json(response);
            } catch (err) {
                res.status(500).json(err);
            }

        } else {
            res.status(401).json("you can only delete your post!");
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username){
            posts = await Post.find({username});
        } else if(catName){
            posts = await Post.find({categories: {
                $in: [catName]
            }});
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {

    }
});


module.exports = router;


