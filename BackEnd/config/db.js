const db = require("../models");
const Role = db.role;

exports.connectDb = () => {
  return db.mongoose
    .connect(`mongodb+srv://root2:${process.env.MONGO_PWD}@cluster0.eccfpfg.mongodb.net/YEPDB`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Connected to the database successfully!");
    })
    .catch((err) => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });
};

exports.initializeRoles = async () => {
  try {
    const count = await Role.countDocuments();
    if (count === 0) {
      await Promise.all([
        new Role({ name: "user" }).save(),
        new Role({ name: "moderator" }).save(),
        new Role({ name: "admin" }).save()
      ]);
      console.log("Added roles to the collection.");
    }
  } catch (err) {
    console.log("Error initializing roles:", err);
  }
};

