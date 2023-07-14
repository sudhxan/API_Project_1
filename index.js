//npm init
//npm i express
//npm i nodemon
// npx nodemon index.js

const express = require("express");

//database
const database = require("./database");

//initialize express
const booky = express();

/*
Route            /
Description      Get all the books
Access           PUBLIC
Parameter        NONE
Methods          GET
*/

booky.get("/", (req,res) => {
  return res.json({books: database.books});
});

/*
Route            /is
Description      Get specific book
Access           PUBLIC
Parameter        /isbn
Methods          GET
*/

booky.get("/is/:isbn", (req,res) => {
  const getSpecificBook = database.books.filter((book) => book.ISBN === req.params.isbn);

  if(getSpecificBook.length === 0) {
    return res.json({error: `No book found for the ISBN number: ${req.params.isbn}`});
  }
  return res.json({book: getSpecificBook});
});

/*
Route            /c
Description      Get specific book
Access           PUBLIC
Parameter        /isbn
Methods          GET
*/

booky.get("/c/:category", (req,res) => {
  const getSpecificBook = database.books.filter((book) => book.category.includes(req.params.category));

  if(getSpecificBook.length === 0) {
    return res.json({error: `No book found for the category: ${req.params.category}`});
    }
  return res.json({book: getSpecificBook});
});

/*
Route            /author
Description      Get all authors
Access           PUBLIC
Parameter        NONE
Methods          GET
*/

booky.get("/author", (req,res) => {
  return res.json({authors: database.author});
});

/*
Route            /author/id/
Description      Get all authors based on id
Access           PUBLIC
Parameter        idno
Methods          GET
*/


booky.get("/author/idno/:id", (req,res) => {
  const getSpecificAuthor = database.author.filter(
   (author) => author.id == req.params.id); //double equal to for integer should be used

  if(getSpecificAuthor.length === 0){
    return res.json({error: `No author found for the ID no: ${id}`});
  }
  return res.json({authors: getSpecificAuthor});
});

/*
Route            /author/book
Description      Get all authors based on books
Access           PUBLIC
Parameter        isbn
Methods          GET
*/

booky.get("/author/book/:isbn", (req,res) => {
  const getSpecificAuthor = database.author.filter(
    (author) => author.books.includes(req.params.isbn)
  );

  if(getSpecificAuthor.length === 0){
    return res.json({
      error: `No author found for the book of ${req.params.isbn}`
    });
  }
  return res.json({authors: getSpecificAuthor});
});



/*
Route            /publications
Description      Get all publications
Access           PUBLIC
Parameter        NONE
Methods          GET
*/

booky.get("/publications",(req,res) => {
  return res.json({publications: database.publication});
});

/*
Route            /publications
Description      Get all publications
Access           PUBLIC
Parameter        NONE
Methods          POST
*/


booky.listen(3000, () => {
  console.log("Server is up and running!");
});
