const Router = require("express");
const router = new Router();
const offersController = require("../controllers/offersController.js");

router.get("/get-count-likes", offersController.getCountLikes);
router.get("/check-like-user", offersController.checkLike);
router.post("/add-like-user", offersController.addLike);
router.post("/delete-like-user", offersController.deleteLike);

router.get("/get-categories", offersController.getCategories);
router.get("/get-on-status", offersController.getOnStatus);
router.get("/get-offers", offersController.getOffers);
router.get("/get-user-offers", offersController.getUserOffers);
router.get("/get-offer", offersController.getOffer);
router.post("/add-offer", offersController.addOffer);
router.post("/change-offer", offersController.changeOffer);
router.post("/delete-offer", offersController.deleteOffer);

module.exports = router;
