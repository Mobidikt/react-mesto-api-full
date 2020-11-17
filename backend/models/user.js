const { Schema, model } = require('mongoose');
const validator = required('validator');

const userSchema = new Schema({
  name: {
    type: String,
    // required: true,
    minlength: 2,
    maxlength: 30,
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String,
    // required: true,
    minlength: 2,
    maxlength: 30,
    default: 'Исследователь',
  },
  avatar: {
    type: String,
    // required: true,
    match: [/(https?|ftp|file):\/\/(www\.)?([-a-z0-9]+\.)([0-9a-z].*)/, 'введён некорректный URL'],
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: {
      validator(v) {
        return validator.isEmail(v);
      },
      message: 'Неверный email',
    }
  },
  password: {
    type: String,
    require: true,
    select: false,
  }
}, { versionKey: false });

module.exports = model('user', userSchema);
