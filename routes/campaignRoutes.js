// routes/campaignRoutes.js
import express from 'express';
import { getAllCampaigns } from '../controllers/campaignController';

const router = express.Router();

router.get('/campaigns', getAllCampaigns);

export default router;
