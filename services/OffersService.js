const db = require("../db");

class OffersService {
  async checkLike(id, idOffer) {
    const check = await db.query(
      "select * from likes where id_user = $1 and id_offer = $2",
      [id, idOffer]
    );
    if (check.rows.length > 0) {
      return "yes";
    } else {
      return "no";
    }
  }
  async addLike(id, idOffer) {
    await db.query("insert into likes values (default, $1, $2)", [id, idOffer]);
    return;
  }
  async deleteLike(id, idOffer) {
    await db.query("delete from likes where id_user = $1 and id_offer = $2", [
      id,
      idOffer,
    ]);
    return;
  }
  async getCountLikes(idOffer) {
    const countLikes = await db.query(
      "select count(id) from likes where id_offer = $1",
      [idOffer]
    );
    return countLikes.rows;
  }
  async getOnStatus(status) {
    const categories = await db.query(
      "select * from offers where status = $1",
      [status]
    );
    return categories.rows;
  }
  async getCategories() {
    const categories = await db.query("select distinct category from offers");
    return categories.rows;
  }
  async getAll() {
    const offers = await db.query("select * from offers");
    return offers.rows;
  }
  async getUserAll(id) {
    const offers = await db.query("select * from offers where id_user = $1", [
      id,
    ]);
    return offers.rows;
  }
  async getOne(idOffer) {
    const offers = await db.query("select * from offers where id = $1", [
      idOffer,
    ]);
    return offers.rows;
  }
  async add(id, title, address, category, description) {
    await db.query(
      "insert into offers values (default, $1, $2, $3, $4, $5, default)",
      [id, title, address, category, description]
    );
    return;
  }
  async change(id, idOffer, title, address, category, description) {
    await db.query(
      "update offers set title = $2, address = $3, category = $4, description = $5 where id_user = $1 and id = $6",
      [id, title, address, category, description, idOffer]
    );
    return;
  }
  async delete(id, idOffer) {
    await db.query("delete from offers where id = $1 and id_user = $2", [
      idOffer,
      id,
    ]);
    return;
  }
}

module.exports = new OffersService();
