var express=require('express');
var app=express();

app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/JS'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res){
res.render('index.html');
});

var states = ["California", "Alabama", "Arkansas", "Arizona", "Alaska", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming" ];

app.get('/search',function(req,res){
  
 
 var key = req.query.key;
 key = key.toLowerCase();


  var results = [];
  for (var i = 0; i < states.length; i++) {


    if (states[i].toLowerCase().indexOf(key) == 0) {

      results.push(states[i]);
    }
  }
    res.end(JSON.stringify(results));
});


var server=app.listen(3000,function(){
console.log("We have started our server on port 3000");
});