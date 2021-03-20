import express from 'express';
import { getPost, createdPost } from '../controllers/posts.js';
const router = express.Router();

router.get('/', getPost);
router.post('/', createdPost);

export default router;