import express from 'express';
import { getPost, createdPost, updatePost, deletePost } from '../controllers/posts.js';
const router = express.Router();

router.get('/', getPost);
router.post('/', createdPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;