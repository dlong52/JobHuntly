const express = require("express");
const categoryRouter = express.Router();
const CategoryController = require("../controllers/CategoryControllers");

categoryRouter.get("", CategoryController.getAllCategories); // get all categories
categoryRouter.get("/search", CategoryController.search); // get all categories
categoryRouter.get("/:id", CategoryController.getCategoryById);// get category
// categoryRouter.get("/search", CategoryController.search);
categoryRouter.post("", CategoryController.createCategory);
categoryRouter.put("/:id", CategoryController.updateCategory);
categoryRouter.delete("/:id", CategoryController.deleteCategory);

module.exports = categoryRouter;