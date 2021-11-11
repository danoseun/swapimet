import db from '../db/config';
import { successResponseWithData, errorResponse } from '../utils/response';
import { statusCodes } from '../utils/statuscode';
import { messages } from '../utils/message';
import { createComment, fetchAllCommentsForMovie } from '../db/sql';
import { fetchCharacters, filterCharacters } from '../utils/fetch';




export const commentObj = {

    /**
     * Add Comment
     * @param req - Request body object
     * @param res - Response object
     */
    async addComment(req, res){
        try {
            if(req.params.episode_id){
                const values = [req.params.episode_id, req.body.ip_address, req.body.text];
                const result = await db.query(createComment, values);
                successResponseWithData(res, statusCodes.created, messages.created, result.rows[0]);
            } else {
                return 'wrong parameters supplied'
            }
        }
        catch(error){
            errorResponse(res, statusCodes.serverError, error.message);
        }    
    },
    

   /** 
     * All Comments
    */
    async fetchAllCommentsForMovie(req, res){
        try {
            const { rows, rowCount } = await db.query(fetchAllCommentsForMovie, [req.params.episode_id]);
            successResponseWithData(res, statusCodes.success, messages.success, {rows, rowCount});
        } catch(error){
         errorResponse(res, statusCodes.serverError, error.message);
        }
    },

    /** 
     * All Comments with sort and filter
    */
     async fetchAllCharacters(req, res){
        try {
            if(req.query.sort){
                const result = await fetchCharacters(req.query.sort)
                successResponseWithData(res, statusCodes.success, messages.success, result);
            }
            const result = await filterCharacters(req.query.gender);
            successResponseWithData(res, statusCodes.success, messages.success, result);
        } catch(error){
         errorResponse(res, statusCodes.serverError, error.message);
        }
    }

}