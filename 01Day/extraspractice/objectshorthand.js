const name="Andrew";
const userAge=27;

const user={
    name:name,
    age:userAge,
    location:"Philadelphia"
}
console.log(user)

const user1={
    name, age:userAge,
    location:"Philadelphia"
}
console.log(user1)

// object destructing
const product={
    label:"Red Notebook",
    price:3,
    stock:201,
    salePrice:undefined,
    rating:4.2
}
const{label:labelName,price,stock,salePrice,rating=5}=product
console.log(labelName,price,stock,salePrice,rating)

// using as an function
const transcation=(type,{label,price,stock,salePrice,rating})=>{
console.log(type,labelName,price,stock,salePrice,rating)
}
transcation("order",product)