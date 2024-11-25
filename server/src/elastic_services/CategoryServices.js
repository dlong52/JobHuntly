const { client } = require("../configs/elasticsearch");

// Function to index MongoDB document in Elasticsearch
const indexCategoryToElasticsearch = async (category) => {
    try {
      // Chỉ cần chắc chắn _id được chuyển đổi thành chuỗi
      const res = await client.index({
        index: "categories",  // Đảm bảo bạn đang sử dụng index đúng
        id: category._id.toString(),
        body: {
          name: category.name,
          description: category.description,
          created_at: category.created_at,
          updated_at: category.updated_at
        },
      });
      
      // Log kết quả Elasticsearch sau khi lưu thành công
      console.log(`Category indexed to Elasticsearch: ${res._id} - Result: ${res.result}`);
    } catch (error) {
      console.error("Error indexing category to Elasticsearch:", error);
      throw new Error("Failed to index category to Elasticsearch");
    }
  }

module.exports = {
    indexCategoryToElasticsearch,
};
