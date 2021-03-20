import PostMessage from '../controllers/postMessage.js';
export const getPost = async (req, res) => {
  try{
    const getMessages = await PostMessage.find();
    res.status(200).json(getMessages);
  }catch(err){
    res.status(404).json({message: err.message})
  }
}

export const createdPost = (req, res) => {
  res.send('this is from creating post page')
}