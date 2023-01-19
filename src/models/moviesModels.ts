import joi from 'joi';

export const postSchema = joi.object({
    name: joi.string().required().min(3),
    platform: joi.string().required().min(3),
    genre: joi.string().required().min(3)
});

export const putSchema = joi.object({
    status: joi.boolean().required(),
    rating: joi.number(),
    summary: joi.string().min(3)
});