const express = require("express");
const promosRouter = express.Router();
const {
    get,
    getId,
    editPromo,
    addPromo,
    searchPromo,
    deleted,
} = require("../controllers/promos");

promosRouter.get("/", get);
promosRouter.get("/search", searchPromo);
promosRouter.get("/:id", getId);
promosRouter.post("/promo", addPromo);
promosRouter.patch("/:id", editPromo);
promosRouter.delete("/:id", deleted);
module.exports = promosRouter;
