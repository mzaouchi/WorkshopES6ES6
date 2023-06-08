// // // // // function brahim(){
// // // // //     // {
// // // // //     //   var a = 5
// // // // //     //   console.log(a)
// // // // //     // }
// // // // //     // console.log(a)
  
// // // // //     // {
// // // // //     //   let b = 5
// // // // //     //   console.log(b)
// // // // //     // }
// // // // //     // let b = 9
// // // // //     // console.log(b)
  
// // // // //     {
// // // // //       const d = 9
// // // // //       console.log(d)
// // // // //     }
// // // // //     console.log(d)
  
  
// // // // //     return "Hello ES6"
// // // // //   }
  
// // // // //   console.log(brahim())


// // // // // const a = 9
// // // // // a = 7

// // // // // const t = [2,4,7,8,6]
// // // // // t[0]=9
// // // // // console.log(t)
// // // // // t.push(99999)
// // // // // console.log(t)
// // // // // t = "khjkh"

// // // // // const obj = {name : "Aziz",age : 16}

// // // // // obj.name = "Mohamed"

// // // // // console.log(obj)

// // // // // obj = 5


// // // // // function sum(a,b){
// // // // //   return a+b
// // // // // }

// // // // // console.log(sum(2,4))
// // // // // function(){

// // // // // }
// // // // // const sum=(a,b)=>{
// // // // //   return a+b
// // // // // }

// // // // // const sum = (a, b) => a + b
// // // // // console.log(sum(9,9))

// // // // var name=()=>'Hello mohamed'

// // // // console.log(name())

// // // // // var Hello =()=> "Hello Mohamed"
// // // // // console.log(Hello())

// // // // // var Hello=(name)=> "Hello "+name

// // // // // console.log(Hello("Aziz"))

// // // // // var Hello = name => "Hello " + name
// // // // // console.log(Hello("Ramez"))
// // // // //AZIZ
// // // // // function Hello(name){
// // // // //  return "Hello "+name
// // // // // }

// // // // // console.log(Hello("Aziz"))


// // // // var name = "Mohamed"
// // // // var age = 16


// // // // // console.log("Hello my name is"+" "+name+"my age is "+age)

// // // // console.log(`Hello my name
// // // // is ${name} and my 
// // // // age is ${age}`)


// // var user ={name :"Mohamed",age : 16, address : {city : "Tastour",zip : 9060}}

// // // const Hello =(p)=> `Hello my name is ${p.name}, my age is ${p.age} and i am from ${p.address.city}`

// // // console.log(Hello(user))

// // const Hello=(p)=>{
// //   const {name,address} = p
// //   const {city} = address
// //   return `Hello my name is ${name} and i am from ${city}`
// // }

// // console.log(Hello(user))


// // // var age = 89

// // // // if(age<=18){
// // // //   console.log("Enfant")
// // // // }else if(age<=60){
// // // //   console.log("Adulte")
// // // // }else{
// // // //   console.log("Vieux")
// // // // }

// // // age<=18 ? console.log("Enfant") : age<=60 ? console.log("Adulte") : console.log("Vieux")

// // // const num = 5
// // // const odd = a => a% 2 == 0 ? "Pair" : "Impair"
// // // console.log(odd(num))

// // // function Even(a){
// // //   if(a%2 == 0){
// // //     return "Pair"
// // //   }else{
// // //     return 'Impair'
// // //   }
// // // }

// // // console.log(Even(num))

// var user ={name :"Mohamed",age : 16, address : {city : "Tastour",zip : 9060}}

// // const Hello =(p)=> `Hello my name is ${p.name}, my age is ${p.age} and i am from ${p.address.city}`

// // console.log(Hello(user))

// const Hello=(p)=>{
//   const {name,address} = p
//   const {city} = address
//   return `Hello my name is ${name} and i am from ${city}`
// }

// console.log(Hello(user))



var t = [1,3,6,7]
var v = [5,0,8]
var result = []
var j = 0
for(let i = 0; i<t.length;i++){
  result[j] = t[i]
  j++
}

for (let i = 0; i < v.length; i++) {
  result[j] = v[i]
  j++
}

console.log(result)

// var t = [1,3,6,7]
// var v = [5,0,8]

// console.log(t+v)

// console.log([...v,...t])


var user = { name: "Mohamed", age: 16, address: { city: "Tastour", zip: 9060 } }

// user.name = "Mahmoud"

// console.log(user)

// user.gomycode = 'ffff'

// console.log(user)

console.log({...user,Gomycode :"DDD",name:"Aziz"})
console.log(user)



var t = [1, 3, 6, 7]
var sum = t.reduce((brahim, aziz) => brahim + aziz)
console.log(sum)var b = [1, 3, 6, 7]
// var d = b.map((el, i, t) => el + 1)
// // console.log(d)
// // console.log(b)
// b.forEach((el, i, t) => t[i] = el+1)
// console.log(b)

console.log(b.map((brahim, i, t) => brahim + (i+1)))
console.log(b)


var b = [1, 3, 6, 7]

console.log(b.filter((el,i,t)=> el%2 !== 0))
console.log(b)

var b = [1, 3, 6, 7]

console.log(b.find((el,i,t)=>el==7 ))

var b = [1, 3, 6, 7]

console.log(b.findIndex((el,i,t)=>el==99 ))


var b = [6, 7, 1, 3]

console.log(b.sort((a,b)=> a-b))

var b = [6, 7, 1, 3]

console.log(b.splice(0,3))


var b = [6, 7, 1, 3]
// var name = "Mohamed ya bhi"

// console.log(name.split('e'))

console.log(b.join(' '))
