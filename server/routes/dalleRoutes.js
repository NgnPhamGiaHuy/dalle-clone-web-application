import express from 'express';
import {OpenAI} from "openai";
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const openAI = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

router.route('/').get((req, res) => {
    res.send("Hello from DALL-E!")
});

router.route('/').post(async (req, res) => {
    try {
        const {prompt} = req.body;

        const aiResponse = await openAI.images.generate({
            prompt: prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image = aiResponse.data.data[0].b64_json;

        res.status(200).json({photo: image});
    } catch (error) {
        console.log(error)
    }
})

export default router;