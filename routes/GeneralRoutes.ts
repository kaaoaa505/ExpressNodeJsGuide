import express from "express";
import path from "path";

import PathHelper from "../helpers/PathHelper";

const GeneralRoutes = express.Router();

GeneralRoutes.get("/", (_req, res) => {
  res.sendFile(path.join(PathHelper.rootDir, "views", "general", "index.html"));
});

export default GeneralRoutes;
