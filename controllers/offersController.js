const ApiError = require("../error/ApiError.js");
const OffersService = require("../services/OffersService.js");

class UserController {
  async checkLike(req, res, next) {
    const { id } = req.user;
    const { idOffer } = req.query;
    try {
      const check = await OffersService.checkLike(id, idOffer);
      res.json(check);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async addLike(req, res, next) {
    const { id } = req.user;
    const { idOffer } = req.body;
    try {
      await OffersService.addLike(id, idOffer);
      res.json({ message: "Added" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async deleteLike(req, res, next) {
    const { id } = req.user;
    const { idOffer } = req.body;
    try {
      await OffersService.deleteLike(id, idOffer);
      res.json({ message: "Deleted" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getCountLikes(req, res, next) {
    const { idOffer } = req.query;
    try {
      const statusAll = await OffersService.getCountLikes(idOffer);
      res.json(statusAll);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getOnStatus(req, res, next) {
    const { status } = req.query;
    try {
      const statusAll = await OffersService.getOnStatus(status);
      res.json(statusAll);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getCategories(req, res, next) {
    try {
      const categories = await OffersService.getCategories();
      res.json(categories);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getOffers(req, res, next) {
    try {
      const offers = await OffersService.getAll();
      res.json(offers);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getUserOffers(req, res, next) {
    const { id } = req.user;
    try {
      const offers = await OffersService.getUserAll(id);
      res.json(offers);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getOffer(req, res, next) {
    const { idOffer } = req.query;
    try {
      const offers = await OffersService.getOne(idOffer);
      res.json(offers);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async addOffer(req, res, next) {
    const { id } = req.user;
    const { title, address, category, description } = req.body;
    try {
      await OffersService.add(id, title, address, category, description);
      res.json({ message: "Added" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async changeOffer(req, res, next) {
    const { id } = req.user;
    const { idOffer, title, address, category, description } = req.body;
    try {
      await OffersService.change(
        id,
        idOffer,
        title,
        address,
        category,
        description
      );
      res.json({ message: "Changed" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async deleteOffer(req, res, next) {
    const { id } = req.user;
    const { idOffer } = req.body;
    try {
      await OffersService.delete(id, idOffer);
      res.json({ message: "Deleted" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new UserController();
