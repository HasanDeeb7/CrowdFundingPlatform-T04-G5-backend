import User from "./models/User.models.js";
import Creator from "./models/Creator.models.js";
import Campaign from "./models/campaignModel.js";
import Donor from "./models/donor.js";
import Donations from "./models/donations.js";
import Category from "./models/categoryModel.js";
import sequelize from "./config/dbConnection.js";
import Admin from "./models/adminModel.js";
// import Category from "./models/categoryModel.js"

// Donor and Campaign
Donor.hasMany(Donations, { onDelete: "CASCADE" });

Donations.belongsTo(Donor, { onDelete: "CASCADE" });

// Category and Campaign
Category.hasMany(
  Campaign,
  { onDelete: "CASCADE" },
  { foreignKey: "CategoryId" }
);
Campaign.belongsTo(Category), { foreignKey: "CategoryId" };

// Creator and Campaign
Creator.hasMany(Campaign, { onDelete: "CASCADE" });
Campaign.belongsTo(Creator, { onDelete: "CASCADE" });

// Creator and User

User.hasOne(Creator, { onDelete: "CASCADE" });
Creator.belongsTo(User, { onDelete: "CASCADE" });
// Donor and User
User.hasOne(Donor, { foreignKey: "UserId", onDelete: "CASCADE" });
Donor.belongsTo(User, { foreignKey: "UserId", onDelete: "CASCADE" });

// Admin and User
User.hasOne(Admin, { onDelete: "CASCADE" });
Admin.belongsTo(User, { onDelete: "CASCADE" });

// donations and campaigns
Donations.belongsTo(Campaign, { onDelete: "CASCADE" });
Campaign.hasMany(Donations, { onDelete: "CASCADE" });

// await User.sync({alter: true})
// await Admin.sync({alter: true})
// await sequelize.sync({alter:true})
// await Campaign.sync({ alter: true });
// await Donor.sync({ alter: true });
// await Donations.sync({ alter: true });
