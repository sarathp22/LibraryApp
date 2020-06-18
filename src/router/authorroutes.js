const express= require('express');
const authorRouter=express.Router();
function router(nav)
{
    var authors=[
                    {name:"M T Vasudevan Nair",des:"Madath Thekkepaattu Vasudevan Nair, popularly known as MT, is an Indian author, screenplay writer and film director. He is a prolific and versatile writer in modern Malayalam literature, and is one of the masters of post-Independence Indian literature.",work:" Naalukettu, Asuravithu, Kaalam, Randamoozham, ",img:"MT.jpg"},
                    {name:"Thakazhi Sivasankara Pillai",des:"Thakazhi Sivasankara Pillai, popularly known as Thakazhi after his place of birth, was an Indian novelist and short story writer of Malayalam literature. He wrote over 30 novels and novellas and over 600 short stories focusing on the lives of the oppressed classes. Known for his works such as Kayar (Coir, 1978) and Chemmeen (Prawns, 1956), Pillai was a recipient of the Padma Bhushan, the third highest Indian civilian award. He was also a recipient of the Jnanpith, India's highest literary award, awarded in 1984 for the novel Kayar.",work:" Avante Smaranakal, Randidangazhi, Kayar,Chemmeen",img:"thakazhi.jpg"},
                    {name:"O V Vijayan",des:"Ottupulackal Velukkuty Vijayan (2 July 1930 – 30 March 2005), commonly known as O. V. Vijayan, was an Indian author and cartoonist, who was an important figure in modern Malayalam language literature. Best known for his first novel Khasakkinte Itihasam (1969), Vijayan was the author of six novels, nine short-story collections, and nine collections of essays, memoirs and reflections.",work:"Khasakkinte Itihasam, Gurusagaram, Madhuram Gayathi",img:"OV.jpg"},
                                    ];
    authorRouter.get('/',(req,res)=>{
        res.render('author',{
                                nav,
                                authors,
                                title:"Authors",
                                work:"Famous works: "    
        });
    });

    authorRouter.get('/:id',(req,res)=>{
        var id= req.params.id;
        res.render('auth',{
            nav,
            aut:authors[id],
            title:"Author",
            work:"Famous works: "
        });
    });
    return authorRouter;
}

module.exports= router;







