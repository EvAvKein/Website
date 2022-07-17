export default (request, response) => {
  switch (request.method) {
    case "GET": {

      response.json(/* */);
      break;
    };
    case "POST": {

      response.json(/* */);
      break;
    };
    case "PATCH": {

      response.json(/* */);
      break;
    };
    default: {
      response.json("invalid request");
    };
  };
};

/* see TODO.md for context on why these are not in typescript */