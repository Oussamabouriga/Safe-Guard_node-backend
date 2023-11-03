import express from "express";
import {
  AjouterProgramme,
  getAllProg,
  getOnceProg,
  UpdateProg,
  deleteOnceProg,
} from "../controllers/programme.js";
import multer from "../middlewares/multer-config.js";

const router = express.Router();

router.route("/").post(multer, AjouterProgramme).get(getAllProg);

router
  .route("/:Titre")
  .get(getOnceProg)
  .delete(deleteOnceProg)
  .patch(UpdateProg);

export default router;
