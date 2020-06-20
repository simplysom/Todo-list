/* console.log("SON");
console.log(__dirname);
console.log(__filename);
//function expression
var fun=function(){
    console.log("This is how function expression works");
}

function callFunction(fun){
    fun();
}
callFunction(fun);
var count=require('./stuff');
const stuff = require('./stuff');
console.log(stuff.count([1,2,3,4,5,6,7]));
console.log(stuff.adder(3,7));
console.log(stuff.adder(stuff.pi,13));

var events=require('events');
var utils=require('util');
var Person=function(name){
    this.name=name;
}
var myEmitter=new events.EventEmitter();
utils.inherits(Person,events.EventEmitter);

myEmitter.on('SomeEvent',function(msg){
    console.log(msg);
})
var james=new Person('james');
var som=new Person('som');
var das=new Person('das');
var arr=[james,som,das];
myEmitter.emit('SomeEvent','The event was emitted');
arr.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name+"said"+msg);
    });
});
james.emit('speak','hey dudes');
var fs=require('fs');
var readme=fs.readFileSync('Readme.txt','utf8');
console.log(readme); */
/*var http=require('http');*/


/*var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    console.log("request was made"+req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    var myReadStream=fs.createReadStream(__dirname+'/Readme.txt','utf8');
    myReadStream.pipe(res);
});
server.listen(5000,'127.0.0.1');
console.log('Now listening on port 5000');
*/
var express=require('express');
var todoController=require('./controllers/todoController.js');
var app=express();

//set up template engine
app.set('view engine','ejs');
// static files
app.use(express.static('./public'));

//fire controllers
todoController(app);
//listen to port

app.listen(3000);
console.log("You are listening to port 3000!!");
