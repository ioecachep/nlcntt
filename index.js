// req.query
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/NienLuanCNTT", { useNewUrlParser: true })

const homeRoute =  require('./routes/home.route')
const userRoute =  require('./routes/user.route')
const postRoute =  require('./routes/post.route')
const authRoute =  require('./routes/auth.route')
const db = require('./db');

const port = 3000;
const app = express();
// Set pug engine-->
app.set('view engine', 'pug');
app.set('views', './views');
// Set req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('nlcntt2020'));
//
const authMiddleware = require('./middleware/auth.middleware')

// Router
app.use('/public', express.static('public'))
app.use('/', authMiddleware.loginOrNo, homeRoute) // Trang Chủ
app.use('/user',userRoute) // Người dùng - User
app.use('/post', authMiddleware.requireAuth, postRoute) // Bài Viết - Post
app.use('/auth',authRoute) // Xác thực đăng nhập
// Listen Port
app.listen(port, () => console.log("Server is running..."));