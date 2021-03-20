import PostMessage from '../models/postMessage.js';
export const getPost = async (req, res) => {
  try{
    const getMessages = await PostMessage.find();
    res.status(200).json(getMessages);
  }catch(err){
    res.status(404).json({message: err.message})
  }
}

export const createdPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try{
    await newPost.save();
    res.status(201).json(newPost);
  }catch(err){
    res.status(209).json({message: err.message});
  }
}