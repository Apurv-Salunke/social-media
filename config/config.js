const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "PRO_MERN_STACK",
  mongoUri:
    // "mongodb+srv://apurv4work:HLNOR0NqcjuwZbTF@academic-projects.fks1ku9.mongodb.net/?retryWrites=true&w=majority",
    "mongodb+srv://apurv4work:HLNOR0NqcjuwZbTF@academic-projects.fks1ku9.mongodb.net/mernproject?retryWrites=true&w=majority",
};
export default config;