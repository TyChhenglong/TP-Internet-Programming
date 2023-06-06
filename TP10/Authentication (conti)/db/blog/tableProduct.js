const { string } = require("joi");
const database = require("../data/db.js");
const { Schema, model } = database;

const category = new Schema({
    name  : String,
    categoryID : String
 })
 
 const subcategory = new Schema({
       name: String,
       categoryID : String,
       subcategoryID : String,
 }) 
 
 const product = new Schema({
       name : String,
       subcategoryID : String,
       productID : String,  
 })

const categoryProdouct = database.model('Category', category)
const subcategoryProdouct = database.model("Subcategory", subcategory)
const productProdouct = database.model("Product",product)
module.exports = {categoryProdouct,subcategoryProdouct,productProdouct} 
 
 