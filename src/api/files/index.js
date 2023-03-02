import Express from "express";
import multer from "multer";

const filesRouter = Express.Router();

filesRouter.post(
  "/uploadCover",
  multer().single("uploadCover"),
  async (req, res, next) => {
    //uploadCover here must be match with the FE and postman when upload... (link)
    try {
      console.log("FILE:", req.file);
      res.send({ message: "file uploaded" });
    } catch (error) {
      next(error);
    }
  }
);

// filesRouter.post("/uploadCover", multer().array(), async (req, res, next) => {
//   try {
//     res.send({ message: "file uploaded" });
//   } catch (error) {
//     next(error);
//   }
// });

// filesRouter.post("/uploadAvatar", multer(), async (req, res, next) => {
//   try {
//   } catch (error) {
//     next(error);
//   }
// });

export default filesRouter;
