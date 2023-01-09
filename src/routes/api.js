const router = require("express").Router();
const { ProductList } = require("../controllers/productsController");

router.get("/products/:pageNo/:perPage/:searchKeyword", ProductList);

module.exports = router;
