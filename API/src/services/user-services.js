import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { createUserValidation, loginUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const create = async (request) => {
  request = validate(createUserValidation, request);

  const totalUserInDatabase = await prismaClient.user.count({
    where: {
      username: request.username,
    },
  });

  if (totalUserInDatabase > 0) {
    throw new ResponseError(400, "Username has been registered!");
  }

  request.password = await bcrypt.hash(request.password, 10);

  const newUser = await prismaClient.user.create({
    data: request,
    select: {
      username: true,
      name: true,
    },
  });

  return newUser;
};

const login = async (request) => {
  request = validate(loginUserValidation, request);

  const user = await prismaClient.user.findUnique({
    where: {
      username: request.username,
    },
  });

  if (!user) {
    throw new ResponseError(401, "Username or password is wrong!");
  }

  const isPasswordValid = await bcrypt.compare(request.password, user.password);

  if (!isPasswordValid) {
    throw new ResponseError(401, "Username or password is wrong!");
  }

  const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_KEY, { expiresIn: "1h" });
  const refreshToken = jwt.sign({ username: user.username }, process.env.REFRESH_TOKEN_KEY, { expiresIn: "1h" });

  const token = {
    accessToken,
    refreshToken,
  };

  return token;
};

export default {
  create,
  login,
};
