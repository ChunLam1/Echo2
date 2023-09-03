const express = require("express");
const cors = require("cors");

require("dotenv").config();
const errorMiddleware = require("./middlewares/errorMiddleware");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const { connectDb } = require("./config/db.js");
const { initializeRoles } = require("./config/db.js");

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/upload.routes")(app);
require("./routes/stripe.routes")(app);

const subscriptionRoute = require("./routes/subscription.routes.js");
require("./routes/stripe.routes")(app);

app.use("/api/subscription", subscriptionRoute);
const audioRoutes = require("./routes/audio");
const samplesPackRoutes = require("./routes/samplesPack");
const searchRoutes = require("./routes/search.js");

app.use("/api/audio", audioRoutes);
app.use("/api/samplesPack", samplesPackRoutes);
app.use("/api/search", searchRoutes);
app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

connectDb()
  .then(() => {
    // Initialize roles collection
    initializeRoles();
    // Start the server
    app.listen(process.env.PORT, () => {
      console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database:", err);
    process.exit(1);
  });
