const mongoose = require('mongoose');
module.exports = () => {
  function connect() {
    mongoose.connect('mongodb+srv://haeng:ljhzz168254@haeng.i4ro5.mongodb.net/Haeng?retryWrites=true&w=majority', function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
  require('./user.js'); // user.js는 나중에 만듭니다.
};