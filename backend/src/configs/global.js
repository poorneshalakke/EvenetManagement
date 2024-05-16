const RESPONSE = {
  SUCCESS: {
    code: 200,
    message: "everything worked as expected",
  },
  AlreadyExist: {
    code: 201,
    message: "username already exist",
  },
  REQUIRED_PARAMS: {
    code: 202,
    message: "is required",
  },
  unkownEror: {
    code: 500,
    message: "something went wrong",
  },
  NotExist: {
    code: 204,
    message: "user not exist",
  },
  ACCESS_DENIED:{
    code:400,
    message:"access denied",
  },
  INVALID_TOKEN:{
    code:401,
    message:"invalid token",
  },
};

export default RESPONSE;
