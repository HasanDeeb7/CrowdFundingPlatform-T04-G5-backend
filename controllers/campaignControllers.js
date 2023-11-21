// controllers/campaignController.js
import CampaignModel from '../models/CampaignModel';

export const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await CampaignModel.findAll();
    res.json(campaigns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
