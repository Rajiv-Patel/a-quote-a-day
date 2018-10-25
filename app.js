var express=require('express');//showing as required imported express will handle HTTP
var app=express();//creating an application, express() to var. called app

//one basic root route using get( )
//Logical way for separating yoru functionality routing folders and files
//you can associate your route with database, filesystem also 
app.get('/',function(request,response){  //not using request obj yet, only for data request
  //specifying route .get.method(RouteRouteURL'/',function.handelar(req,res))
  
  response.sendFile(__dirname+'/index.html'); //1st-quote.a.day/index.html
  //using global var of express, __dirname where our current app.js file is residing
  //same path we have our index.html which we are sending back default page
});

//http://localhost:8080/hello (creatign Routing Link /hello)
app.get('/hello',function(request,response){  
  response.send("Hellow, How are you String"); 
});

var port = process.env.PORT || 8080; //if PORT is specify than it will not use 8080
//var port= global-object (process).(environmentSubObj_variable).env.PORT or 8080;
// use port 8080 unless there exists a preconfigured port
//in this case we have not specify the PORT so we will use default 8080

var server=app.listen(port,function(req,res){ 
  //express().listen(8080,function(request,response))
//listening Function(port:8080,CallBackFun(req,res))
    console.log("Open on Browser http://localhost:"+port + "to see page"); //port 8080

    //whenever app started as a server it will have (req,res) cycle, that is where our 
    //console.log
});


