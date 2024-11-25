const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const http = require('http'); // Import http module
const socketIo = require('socket.io');

const database = require('./src/configs/database');
const routes = require('./src/routes');
const {client, checkElastic} = require('./src/configs/elasticsearch');

const app = express();
const port = process.env.PORT || 5000;
const allowedOrigins = ['http://localhost:5174', 'http://localhost:5173'];

// Cấu hình CORS
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(bodyParser.json());
app.use(cookieParser());
dotenv.config();
database.connect();
routes(app);

// Tạo server HTTP từ ứng dụng Express
const server = http.createServer(app); 

// Khởi tạo Socket.IO và truyền server HTTP vào
const io = socketIo(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true,
  },
});
checkElastic()
// Lắng nghe sự kiện kết nối
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Tham gia phòng chat
  socket.on('joinRoom', (chatId) => {
    socket.join(chatId);
    console.log(`User joined chat room: ${chatId}`);
  });

  // Xử lý sự kiện gửi tin nhắn
  socket.on('sendMessage', (data) => {
    const { chatId, senderId, content } = data;

    // Phát tin nhắn đến tất cả các client trong phòng chat
    io.to(chatId).emit('receiveMessage', {
      chatId,
      senderId,
      content,
      timestamp: new Date(),
    });
  });

  // Ngắt kết nối
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Sử dụng server HTTP để lắng nghe trên cổng chỉ định
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
