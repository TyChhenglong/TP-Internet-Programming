const mongodb = require("./db/db.js");
const Cat = mongodb.model("Cat", {name: String,age: Number});
const kitty = new Cat ({name:'LYLY',age: 10,});
kitty.save().then(() => console.log('meav')); 
