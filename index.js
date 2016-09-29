var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mongoose-data');

var db = mongoose.connection;

db.once('open', function() {
  var userSchema = mongoose.Schema({
    name: String,
    password:String,
    age:Number
  })

  var User = mongoose.model('user', userSchema);
  // ppp 是实际数据库中 一条记录的名字
  // var lin = new user({ name: 'Lin',password:'1234',age: 21});
  // 成功构建一条数据记录的结构
  // lin.save()
  // 保存操作

  //  修改一条记录
  // User.findById({_id: '57ecba405638fc0f119b5e9e'},function(err,user){
  //   user.name = 'tianqi'
  //   user.save(function(err){
  //     console.log('我更新了');
  //     User.find().exec(function(err,users){
  //       //异步执行
  //       console.log(users);
  //     })
  //   })
  // })

  console.log('我先出来了');

  // 删除一条记录
  User.findById({_id: '57ecba405638fc0f119b5e9e'},function(err,user){
    user.remove(function(err){
      console.log('我删除了');
      User.find().exec(function(err,users){
        console.log(users);
      })
    })
  })

});
