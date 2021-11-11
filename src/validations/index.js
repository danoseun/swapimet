import express from 'express';
import Joi from 'joi';
import db  from '../db/config';
import { errorResponse } from '../utils/response';
import { statusCodes } from '../utils/statuscode';
import { messages } from '../utils/message';





export const commentValidator = {

    /** This functions validates user input data
        * @param {object} req - The request object
        * @param {object} res - The response oject
        * @param {function} next
        * @returns {object} JSON representing the failure message
        */
    async validateComment(req, res, next) {
      let { text } = req.body;
      let ip_address = req.ip;
      
      const schema = Joi.object().keys({ 
        ip_address: Joi.string().required(),
        text: Joi.string().max(500).required(),
      });

      const dataToValidate = { 
        ip_address,
        text
      } 

    const validation = schema.validate(dataToValidate);

    try {
      if (validation.error) {
          errorResponse(res, statusCodes.badRequest, validation.error.details[0].message);
          return;
      }
        let commentObj = {
            ip_address,
            text
        }
        req.body = commentObj;
        return next();

      } catch (error) {
        errorResponse(res, statusCodes.serverError, error.message);
      }
    },
  };