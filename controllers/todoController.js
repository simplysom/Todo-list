var bodyParser=require('body-parser');
var mongoose=require('mongoose');
//var data=[{item:'Get Milk'},{item:'walk dog'},{item:'kick some coding ass!!!'}];//dummy data
var urlencodedParser=bodyParser.urlencoded({extended:false});

//connnect to database
mongoose.connect('mongodb+srv://das:som12345@todo-list-c4sbo.mongodb.net/todo-list?retryWrites=true&w=majority');

//Create a Schema
var todoSchema=new mongoose.Schema({
    item:String
});
var Todo=mongoose.model('todo-list',todoSchema);
/*var itemOne=Todo({item:"Get flowers"}).save(function(err){
    if(err) throw err;
    console.log("item saved");
})*/
module.exports=function(app){
    app.get('/todo',function(req,res){
        Todo.find({},function(err,data){
            if(err) throw err;
            res.render('todo',{todos:data});
        });
      
    });
    app.post('/todo',urlencodedParser,function(req,res){
        var newTodo=Todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);
        })
        
    });
    app.delete('/todo/:item',function(req,res){
        Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        });

    });
};