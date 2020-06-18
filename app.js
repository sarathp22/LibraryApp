const express= require('express');
const app= new express;
const nav= [{title:"BOOKS",link:'/books'},{title:"AUTHOR",link:'/author'},{title:"SIGNUP",link:'/signup'},{title:"LOGIN",link:'/login'},{title:"ADDBOOK",link:'/addbook'}];
const booksRouter= require("./src/router/booksroutes")(nav);
const authorRouter=require("./src/router/authorroutes")(nav);
const loginRouter=require("./src/router/loginroutes")(nav);
const signupRouter=require("./src/router/signuproutes")(nav);
const addbookRouter=require("./src/router/addbookroutes")(nav);


app.set('view engine', 'ejs');
app.set('views', __dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/author',authorRouter);
app.use('/login',loginRouter);
app.use('/signup', signupRouter);
app.use('/addbook',addbookRouter);
app.use(express.static('./public'));
app.get('/',(req,res)=>{
                            res.render('index',{
                                                    nav,
                                                    title:"Library App"
                                                         });

});
app.listen(5000);