import UserService from "../services/UserService";
const getHomePage = (req, res) => {
  res.render("HomePage.ejs");
};
const getAllUser = async (req, res) => {
  try {
    let responese = await UserService.getAllUser();
    return res.status(200).json(responese);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errorCode: -1,
      data: "Erro from server",
    });
  }
};
module.exports = {
  getHomePage,
  getAllUser,
};
