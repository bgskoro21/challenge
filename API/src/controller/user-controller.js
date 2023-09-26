import userServices from "../services/user-services.js";

const create = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await userServices.create(request);
    res.status(201).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await userServices.login(request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  create,
  login,
};
