require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
// const cors = require('cors');
// const errors = require('celebrate');

// const { requestLogger, errorLogger } = require('./middlewares/logger');
// const router = require('./routes/index');

const app = express();
app.use(helmet());

const { PORT = 3000, DB = 'mongodb://localhost:27017/bitfilmsdb' } = process.env;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// const allowedCors = [
//   // 'https://kozazavr.fun',
//   // 'http://kozazavr.fun',
//   // 'kozazavr.fun',
//   'http://localhost:3000',
//   'localhost:3000',
//   'https://localhost:3000',
//   'http://localhost:3001',
// ];

// app.use(cors({
//   origin: allowedCors,
// }));

// app.use((req, res, next) => {
//   const { origin } = req.headers;

//   if (allowedCors.includes(origin)) {
//     res.header('Access-Control-Allow-Origin', origin);
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//   }

//   next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(requestLogger);

// app.use(router);

// app.use(errorLogger);
// app.use(errors());

// app.use((err, req, res, next) => {
//   if (err.statusCode) {
//     res.status(err.statusCode).send({ message: err.message });
//   } else {
//   // если у ошибки нет статуса, выставляем 500
//     const { statusCode = 500, message } = err;

//     res.status(statusCode).send({
//       // проверяем статус и выставляем сообщение в зависимости от него
//       message: statusCode === 500
//         ? 'На сервере произошла ошибка'
//         : message,
//     });
//   }
//   next();
// });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
