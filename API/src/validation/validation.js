import { ResponseError } from "../error/response-error.js";

export const validate = (schema, request) => {
  const { error, value } = schema.validate(request, {
    abortEarly: false,
    allowUnknown: false,
  });

  if (error) {
    throw new ResponseError(400, error.message);
  } else {
    return value;
  }
};
