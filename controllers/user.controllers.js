import User from "../models/User.models.js";
import fs from "fs";
import path from "path";

function removeImage(image) {
  fs.unlink(image, (err) => {
    if (err) {
      console.log(`we can't delete the image`);
    } else {
      console.log("image deleted");
    }
  });
}

async function getAllUsers(req, res) {
  let getAll = await User.findAll();
  return res.status(200).json(getAll);
}

function addNewUser(req, res) {
  let user = req.body;
  const image = req.file.path;
  if (
    !user.firstName ||
    !user.lastName ||
    !user.userName ||
    !user.password ||
    !user.role
  ) {
    if (image) {
      removeImage(image);
    }
    return res.status(400), json({ error: "missing required property" });
  } else if (!image) {
    return res.status(400).json({ error: "missing image" });
  } else {
    user.image = image;

    let newUser = User.create({ ...user })
      .then((res) => {
        console.log(res);
        return res.status(200).json(newUser);
      })
      .catch((error) => {
        console.error("Failed to create a new record : ", error);
        return res.status(400).json(error);
      });
    // User.sync();
  }
}

// async function updateUser(req, res) {
//   const user = req.body;
//   user.id = req.params.id;
//   const newImage = req.file.path;
//   const found = await user.findOne({ where: { id: id } });
//   if (!found) {
//     if (newImage) {
//       removeImage(newImage);
//     }
//     return res.status(400).json({ error: "id not found" });
//   }
//   const oldImage = found.image;
// }

function deleteUser(req, res) {
  let id = req.params.id;
  let user = User.destroy({ where: { id: id } })
    .then(() => {
      console.log("Successfully deleted record.");
      res.status(200).json("deleted");
    })
    .catch((error) => {
      console.error("Failed to delete record : ", error);
      res.status(400).json("not deleted");
    });
}
export { getAllUsers, addNewUser, /* updateUser,*/ deleteUser };