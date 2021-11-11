import { Router } from 'express';
import { commentObj } from '../controllers/comment';
import { commentValidator } from '../validations';

export const router = Router();


router.post('/api/v1/episodes/:episode_id/comments', commentValidator.validateComment, commentObj.addComment);
router.get('/api/v1/episodes/:episode_id/comments', commentObj.fetchAllCommentsForMovie);
router.get('/api/v1/characters', commentObj.fetchAllCharacters);
//router.get('/api/v1/characters', commentObj.fetchAllCharacters);

