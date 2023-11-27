import express from 'express'
import { createDonation, getDonations } from '../controllers/donationsConroller.js'
import { checkBalance } from '../middlewares/donationsMidware.js'
import { authorize } from '../middlewares/auth.js';

const donationRouter = express.Router();

donationRouter.post("/add", authorize, checkBalance, createDonation);
donationRouter.get("/read", authorize, getDonations);

export default donationRouter;
