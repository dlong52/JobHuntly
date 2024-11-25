const { Client } = require("@elastic/elasticsearch");
const dotenv = require("dotenv");
dotenv.config();
// Initialize the Elasticsearch client
const client = new Client({
  node: process.env.ELASTIC_URL, // Your Elasticsearch URL
  auth: {
    // apiKey: "", //Your API key
    username: process.env.ELASTIC_USERNAME, // Your username
    password: process.env.ELASTIC_PASSWORD, // Your password
  },
  tls: {
    rejectUnauthorized: false, // Chấp nhận chứng chỉ tự ký
  },
});

// Test the connection
const checkElastic = async () => {
    try {
        const health = await client.cluster.health();
        console.log('Elasticsearch connected:', health);
    } catch (error) {
        console.error('Error connecting to Elasticsearch:', error);
    }
};

module.exports = { client, checkElastic };
