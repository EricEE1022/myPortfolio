const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET || "jBPg9maI74F6kGgE",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://emioweieric:jBPg9maI74F6kGgE@cluster0.o3yt1.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=Cluster0" ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/mernproject",
};
export default config;
