const router = require('express').Router();
// const userRouter = require('./users');
// const movieRouter = require('./movies');
// const auth = require('../middlewares/auth');
// const NotFoundError = require('../middlewares/errors/notFoundError');
const { /*login,*/ createUser } = require('../controllers/users');
const { signupValidate, /*signinValidate*/ } = require('../middlewares/validate');

router.post('/signup', signupValidate, createUser);
// router.post('/signin', signinValidate, login);

// router.use('/users', auth, userRouter);
// router.use('/movies', auth, movieRouter);
// router.use('/', () => {
//   throw new NotFoundError('Запрашиваемый ресурс не найден');
// });

module.exports = router;















