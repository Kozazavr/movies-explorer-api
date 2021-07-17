const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
// const UnauthorizedError = require('../middlewares/errors/unauthorizedError');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        return validator.isEmail(v);
      },
      message: 'Incorrect mail format!',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    select: false,
  },
});

// userSchema.statics.findUserByCredentials = function (email, password) {
//   return this.findOne({ email }).select('+password')
//     .then((user) => {
//       if (!user) {
//         throw new UnauthorizedError('Неправильные почта или пароль');
//       }
//       return bcrypt.compare(password, user.password)
//         .then((matched) => {
//           if (!matched) {
//             throw new UnauthorizedError('Неправильные почта или пароль');
//           }
//           return user;
//         });
//     });
// };

module.exports = mongoose.model('user', userSchema);
