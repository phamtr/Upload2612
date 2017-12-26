
var express = require('express')
var app = express()
var multer = require('multer')
app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(3500)


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  var upload = multer({ storage: storage });
  app.post('/', upload.single('file'), function(req, res, next){
    console.log(req.file);
    res.send('Upload file thanh cong');
  });
  app.get('/', (req, res) => res.render('form'));