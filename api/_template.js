export default (request, response) => {
  if (request.method === "POST") {

    response.json({/*  */});
  } else if (request.method === "GET") {

    response.json({/*  */});
  } else if (request.method === "PATCH") {

    response.json({/*  */});
  } else {
    response.json("invalid request");
  };
};

/* see TODO.md for context on why these are not in typescript */