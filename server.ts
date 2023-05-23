import express from "express";
import timeout from "connect-timeout";
import path from "path";

import PathHelper from "./helpers/PathHelper";
import AdminRoutes from "./routes/AdminRoutes";
import GeneralRoutes from "./routes/GeneralRoutes";
import GeneralController from "./controllers/GeneralController";

const app = express();

app.use(timeout('5s'));

app.use(express.static(path.join(PathHelper.rootDir, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/admin", AdminRoutes);
app.use(GeneralRoutes);
app.use(GeneralController.notFound);

app.listen(3000);
