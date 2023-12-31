// models/CampaignModel.js
import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnection.js";

const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[1,30]
      }
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);



export default Category;