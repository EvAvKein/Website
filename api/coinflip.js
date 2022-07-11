export default (request, response) => {
  if (request.method === "GET") {
    const coinflipTruthiness = Math.random() > 0.5;

    response.json({outcome: coinflipTruthiness});
  } else {
    response.json("invalid request");
  };
};