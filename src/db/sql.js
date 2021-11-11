/** User SQL */
export const createComment = 'INSERT INTO comments (episode_id,ip_address,text) VALUES ($1,$2,$3) returning *';
export const fetchCommentCount = 'SELECT COUNT(episode_id) * FROM comments';
export const fetchAllCommentsForMovi = 'SELECT * FROM comments WHERE comment_id=$1';

export const fetchAllCommentsForMovie = 'SELECT * FROM comments WHERE episode_id=$1 ORDER BY id DESC';


