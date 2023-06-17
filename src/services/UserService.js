import db from "../models/index";
const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.User.findAll({});
      console.log("data", data);
      resolve({
        errCode: 0,
        data: data,
      });
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  getAllUser,
};
