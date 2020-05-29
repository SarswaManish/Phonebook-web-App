
const exphbs=require('express-handlebars')
const express=require('express')
const bodyparser=require('body-parser')

var app=express()
app.listen(3000,()=>
	console.log('server is listening at port:3000'))
