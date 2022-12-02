export const URL =
  process.env.NODE_ENV === "production"
    ? "https://us-central1-betterinfra-2d3f6.cloudfunctions.net/api"
    : "http://localhost:5001/betterinfra-2d3f6/us-central1/api";
