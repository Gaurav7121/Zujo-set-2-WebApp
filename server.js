//Importing all required packages
const fs = require('fs');
const csv = require('csv-parser');
const express = require("express");
const mongoose = require('mongoose');
var formidable = require('formidable');
const bodyParser = require("body-parser");

//creating Express App
const app = express();
//Using EJS as our ViewEngine
app.set('view engine', 'ejs');
//Using Bodyparser to access data recieved from form
app.use(bodyParser.urlencoded({extended: true}));
//Giving Access to Public folder for accessing CSS / Images(favicon)
app.use(express.static(__dirname + '/public'));
//Connecting MongoDB for Database
mongoose.connect('mongodb://localhost:27017/myzujoDB',{useNewUrlParser:true,useUnifiedTopology: true});

//creating Schema for storing data in required format
const zujoSchema = {
  username:String,
  amount:Number,
  day:Number,
  month:Number,
  year:Number
};

//creating Model for storing Data
const Zuser = mongoose.model('Zujouser',zujoSchema);

//To render Homepage as we run our web app
app.get("/", function(req, res){
    res.render('index',{error:'',response:''});
});

//To recieve file uploaded on webapp
app.post("/",function(req,res){
    var alphaNumeric = /^[0-9a-zA-Z]+$/;
    var positiveCount = 0;
    var negativeCount = 0;
    var flag = 0;
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            // oldpath : temporary folder to which file is saved to
            var op = files.csvfile.path;

            var np = __dirname + '/uploads/' + files.csvfile.name;
            // copy the file to a new location

            fs.createReadStream(op)
              .pipe(csv())
              .on('data', (record) => {
                flag=1;
                const usr = record.username;
                const amt = record.amount;
                const date = record.date.toString().split('-');

                if(usr.match(alphaNumeric) && amt==parseInt(Number(amt)) && date.length!=1)
                {
                  positiveCount = positiveCount + 1;
                  const newZuser = new Zuser({
                    username:usr,
                    amount:amt,
                    day:date[0],
                    month:date[1],
                    year:date[2]
                  });
                  newZuser.save();
                }
                else
                {
                  negativeCount = negativeCount + 1;
                }
              })
              .on('end', () => {
                if(flag==0){
                  res.render('index',{error:'Either CSV file is Empty or No file Uploaded!!',response:''});
                }
                else{
                  res.render('index',{error:negativeCount.toString()+' no. of records discarded ',response:positiveCount.toString()+' no. of records inserted successfully in database'});
                }
              });
        });
    } );

//to display all records from database to the webpage
app.get('/display',function(req,res){
  Zuser.find({}, function (err, Zusers) {
    if (err) {
        console.log(err);
    } else {
        res.render("display", { users: Zusers })
    }
})
});

//to perform groupby operation using year or username based on parameter passed as "Field" in url
app.get('/groupby/:field',function(req,res){
  const field = req.params.field;
  if(field.toLowerCase() == 'year'){
  var aggData = [
    {$group: {
      _id: "$year",
      obj: { $push: { name: "$username", amt: "$amount", year: 'n'} },
      sum:{$sum:'$amount'}
    }}
  ];
} else if(field.toLowerCase() == 'username'){
    var aggData = [
      {$group: {
        _id: "$username",
        obj: { $push: { year: "$year",month:"$month",day:"$day",amt: "$amount", name: 'n'} },
        sum:{$sum:'$amount'}
      }}
    ];
}
Zuser.aggregate(aggData, function(err, users){
    if (err) { return def.reject(err); }
    res.render('newview',{logs:users})
  });
});

//to start server at required port(3000 at this time)
app.listen(3000,function(){
  console.log('server started at port 3000!');
});
