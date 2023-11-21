// models/CampaignModel.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConnection';

const CampaignModel = sequelize.define('CampaignModel', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  target: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive', 'completed'),
    allowNull: false,
    defaultValue: 'active',
  },
  // other fields...
});

export default CampaignModel;
