const express= require("express");
const booksRouter=express.Router();
function router(nav)
{
    var books=[
                    {title:"Nalukettu", author:"M T Vasudevan nair", genre:"novel",image:"nalukettu.jpg" },
                    {title:"Kayar", author:"Thakazhi Shiva Shankara Pilla", genre:"novel",image:"kayar.jpg"  },
                    {title:"Khasakhinte Ithihasam", author:"O V Vijayan", genre:"novel",image:"khasakkinteithihasam.jpg" }
                            ];


    booksRouter.get('/',(req,res)=>{
                                        res.render('books',{
                                                                nav,
                                                                books,
                                                                title:"Books"
                                                                        });
                                                });
    booksRouter.get('/:id',(req,res)=>
                                    {
                                        var id=req.params.id;
                                        res.render('book',{
                                                            nav,
                                                            book:books[id],
                                                            title:"book"
                                        });
                                                    });

            return booksRouter;
}






module.exports= router;