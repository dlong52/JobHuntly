const { default: mongoose } = require("mongoose");
const { client } = require("../configs/elasticsearch");
const {
  indexCategoryToElasticsearch,
} = require("../elastic_services/CategoryServices");
const Category = require("../models/Category");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCategory = async (req, res) => {
  const category = new Category({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const newCategory = await category.save();
    await indexCategoryToElasticsearch(newCategory);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
        updated_at: Date.now(),
      },
      { new: true }
    );
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const search = async (req, res) => {
  const { q } = req.query;
  try {
    const body = await client.search({
      index: "categories",
      body: {
        query: {
          multi_match: {
            query: q,
            fields: ["name", "description"],
          },
        },
      },
    });

    // Kiểm tra nếu có kết quả từ Elasticsearch
    const hits = body.hits.hits;
    const results = hits.map((hit) => hit._source);

    // Trả về kết quả tìm kiếm
    res.status(200).json({
      status: "success",
      message: "Tìm kiếm thành công",
      data: results,
    });
  } catch (error) {
    // Lỗi trong quá trình tìm kiếm
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  search,
};
