export const URL =
  process.env.NODE_ENV === "production"
    ? "https://us-central1-better-infra.cloudfunctions.net/api/"
    : "http://localhost:5000/better-infra/us-central1/api";
