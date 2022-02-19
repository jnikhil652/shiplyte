const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const pageRouter = require("./routes/pageRoutes");
const brandRouter = require("./routes/brandRoutes");
const seriesRouter = require("./routes/seriesRoutes");
const chassisNumberRouter = require("./routes/chassisNumberRoutes");
const modelRouter = require("./routes/modelRoutes");
const blogRouter = require("./routes/blogRoutes");
const adminRouter = require("./routes/adminRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const productRouter = require("./routes/productRoutes");
const bannerRouter = require("./routes/bannerRoutes");
const carRouter = require("./routes/carRoutes");
const addressRouter = require("./routes/addressRoutes");
const orderRouter = require("./routes/orderRoutes");
const subscriber = require("./routes/subscriberRoutes")
const bannerimage = require("./routes/banner-routes")
const homeproduct = require("./routes/homeproduct-routes")


require("dotenv").config();
const app = express();

app.use(cors());
app.use(cookieParser());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

connect();
app.use(bodyParser.json());
app.use("/", userRouter);
app.use("/", pageRouter);
app.use("/", brandRouter);
app.use("/", seriesRouter);
app.use("/", chassisNumberRouter);
app.use("/", modelRouter);
app.use("/", blogRouter);
app.use("/", adminRouter);
app.use("/", categoryRouter);
app.use("/", productRouter);
app.use("/", bannerRouter);
app.use("/", carRouter);
app.use("/", addressRouter);
app.use("/", orderRouter);
app.use("/api", subscriber);
app.use("/", bannerimage)
app.use("/", homeproduct)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
