const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/movieApp' ,{useNewUrlParser: true, useUnifiedTopology: true} )
.then(()=>{
console.log("CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO ERRORR!!!")
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
const Product = mongoose.model('product', productSchema);
const bike = new Product({name:"Mountain Bike" ,price: 999, color: "red"});
bike.save()
.then(data => {
    console.log("AT WORKED!")
    console.log(data);

})
.catch(err => {
    console.log("OH NO ERROR!")
    console.log(err)
})