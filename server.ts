import express from "express";
import { StatusCodes } from "http-status-codes";
import path from "path";

import PathHelper from "./helpers/PathHelper";
import AdminRoutes from "./routes/AdminRoutes";
import GeneralRoutes from "./routes/GeneralRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(PathHelper.rootDir, "public")));

app.use("/admin", AdminRoutes);
app.use(GeneralRoutes);

app.use((_req, res) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .sendFile(path.join(PathHelper.rootDir, "views", "404.html"));
});

app.listen(3000);
