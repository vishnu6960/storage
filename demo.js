

// /("vishnu")
// var arr = ["vishnu","abhi","naveen","sathish","anil"]
// console.log(arr.sort())
// console.log(arr.reverse())
// var num = [23,45,2,6,100,60,999]
// // console.log(num.sort())
// var result = num.sort(function(a,b){
//     return a-b
// })
// console.log(result)
// function maxi(list){
//     return Math.max.apply(null,list)
// }
// console.log(maxi(num))
// function mini(array){
//     return Math.min.apply(null,array)
// }
// console.log(mini(num))
// console.log(Math.min(num))



// var obj = [
//     {
//         name:"vishnu",
//         age:19
//     },
//     {
//         name:"abhi",
//         age:20

//     },
//     {
//         name:"naveen",
//         age:18
//     },
//     {
//         name:"sathish",
//         age:30
//     }
// ]
// var s = obj.sort(function(a,b){
//     return a.age - b.age
// })
// console.log(s)

// var na = obj.sort(function(a,b){
//     var x = a.name.toLowerCase()
//     var y = b.name.toLowerCase()
//     if(x < y){
//         return -1

//     }
//     if(x > y){
//         return 1

//     }
//     return 0
// });
// console.log(na)


// var i = 1
// do{
//     console.log(i)
//     i++
// }while(i<0)

// for(var i = 1;i<=10;i*2){
//     console.log(i)
// }
// var obj =  {
//             name:"vishnu",
//             age:19,
//             marks:89
// }
// for(var i in obj){
//     console.log(obj[i])
// }
// var a = "vishnu"

// console.log(a.join(''))
//  var a = ["a","b","c","d"]
//  var s = "vishnuvardhan"
//  for(var i of s){
//     console.log(i)
//  }
// // 
// function greet(n1,n2){
//     // var name = name ||'vishnu'
//     // console.log(name)
//     var tot = n1+n2;
//     return tot;


// }
// console.log(greet(9,8))

// console.log(display())
// function display(dividend,divisor){
//     var quo = dividend/divisor
//     var arr = [dividend,divisor,quo]
//     return arr
// }
// var dis = display(50,10)
// console.log(dis)
// console.log(dis[2])
// // console.log(vis())
// var vis = function(n1,n2){
//     var tot = n1 + n2
//     return tot
// }
// console.log(vis(7,4))


// x = 5 
// y =5
// console.log(x +" " + y)
// var y 



// var x = "vishnuvardhan"
// function greet(){
//     return x
// }
// console.log(greet())




// function greet(){
//     var x = "vishnuvardhan"
//     return x
// }
// console.log(greet())
//  console.log(x)
// let i =4
// for(let i=10;i<20;i++){
//     console.log(i)
//     var i = 4
// }
// let x =5
// console.log(i)
// y = 5
// console.log(y)
// let y = 5

// const x = 5 
// console.log(x)
// x = 4
// var x = {
//     name:"vishnu",
//     age:59
// }
// console.log(x.age)
// x.age=50
// console.log(x.age)
// var y = ["vishnu","abhi","anil"]
// y[0] = "bharath"
// console.log(y[0])

// var x = ['a','v','d','t','r']
// for(i of x){
//     console.log(i)
// }
// var y = "vishnuvardhan"
// for( e of y){
//     console.log(e)
// }
// var x = `this is a 
//         visual studio code
//         .. iam vishnuvardhan
//         !!`
// console.log(x)
// let a = 6 
// let b = 5
// let c = `the sum of ${a} and ${b} is ${a+b}`
// console.log(c)


// function greet(name="vishnu"){
//     return `hello ${name}`
// }
// console.log(greet())
// var sum = function(a,b){
//     return a+b

// }
// console.log(sum(3,4))
// var add = (a,b)=>a*b
// console.log(add(4,3))
// function demo(name){
//     console.log(`hi ${name}`)
//     this.name= name
//     // console.log(name)
//     var getinfo = function(){
//         return function(){
//             // console.log(this.name)
//         console.log(this.constructor.name)
            
//         }
//     }
// }
// var a = new demo("vishnu")
// var b = a.getinfo()
// b()
// console.log(a)
// demo("vishnu")

// var test = age =>{
//     if(age>18){
//         console.log("eligible")

//     }
//     else{
//         console.log("Not eligible")
//     }
// }
// test(17)
// test(38)
// var divide = (a,b)=>{
//     if(b!=0){
//         console.log(a/b)
//     }

// }
// divide(5,3)
// divide(3,0)
// var hi = ()=>console.log("vishnuvardhan")
// hi()
// function Person(nickname, country) {
//     this.nickname = nickname;
//     this.country = country;
    
//     this.getInfo = function() {
//         // Outer function context (Person object)
//         return function() {
//             // Inner function context (Global object 'Window')
//             console.log(this.constructor.name); // Window
//             console.log("Hi, I'm " + this.nickname + " from " + this.country);
//         };
//     }
// }

// var p = new Person('Rick', 'Argentina');
// var printInfo = p.getInfo();
// printInfo();

// function demo(name,age){
//     this.name = name
//     this.age = age
//     console.log(this.age)

//     this.getInfo = function(){
//         return () => {
//             console.log(this.constructor.name)
//             console.log(`hii ${this.name} and  ${this.age}` )

//         }
//     }

// }
// var x = new demo("vishnu",28)
// var y = x.getInfo()
// y()


// class Demo{
//     constructor(length,width,height){
//         this.length = length
//         this.width = width
//         this.height = height


//     }
     
//     getArea(){
//         return this.length*this.width

//     }
// }
// class Demo1 extends Demo{
//     constructor(length,width,height){
//         super(length,width,height)
//         // this.length = length
//         // this.width = width
//         // this.height = height

//     }
//     getCube(){
//         return this.length*this.width*this.height
//     }
// }
// let a = new Demo(7,4)
// console.log(a.getArea())

// let b = new Demo1(8,3,1)
// console.log(b.getArea())
// console.log(b.getCube())

// let a = 58
// const b = 20
// function greet(x,y){

//     return x*y
// }
// export{a,b,greet}

// var greet = (a,b,...names)=>{
//     return names.sort()
// }
// console.log(greet("vishnu","abhi","naveen","anil","dhana"))

// function add(a,b,c){
//     return a*b*c
// }
// var num = [4,5,3]
// console.log(add.apply(null,num))
// console.log(add(...num))

// var pet = ["cat","dog","rabbit"]
// var ani = ["pig","buffalo","cow","horse"]
//  var both = ["birds",...pet,"lion","tiger",...ani,"zebra"]
//  console.log(both)

// var fruits = ["orange","apple","banana","grapes"]

//  let [a,...r] = fruits
//  console.log(a)
//  console.log(r)

//  var obj = {name:"vishnu",age:18}
//   let {x,...y} = obj
//   console.log(y)

// var hello = a =>`hello world ${a}`
// console.log(hello(2))
// const a = ["apple","orange","grapes","banana"]
// // // const a= "vishnu"

// // //  const arr = "vishnu"
// // //  const b = a.map((item)=>
// // //  console.log(item))
// const [fruit,veg] = a
// console.log(fruit,veg)
// const calc = (a,b)=>{
//     const add = a+b
//     const sub = a-b
//     const mul = a*b

//     return [add , sub , mul]

// }
// const [add,sub,mul] = calc(8,9)
// console.log(add,sub,mul)

// const vehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red',
//     register:{
//         area:'tadipatri',
//         city:'anantapur'
//     }
// }
// vishnu(vehicle)
// function vishnu({type,model,color,register:{city}}){
//     console.log(`${type} and ${model} and ${color},${city}`)
// }
// const a = [1,3,4,5,6,6,8]
// const b = [9,4,67,8]

// const [one,two,...rest] = a
// console.log(one)


// const a = 90
// var b = "vishnu"
// export {a,b}

// var x = new XMLHttpRequest()
// x.open("GET","https://imdb-api.com/en/API/Top250Movies/k_ce10v5n4")
// x.send()

// x.onload = function(){

//     console.log(x.status)
//     var result = JSON.parse(x.response)
//     var imge = document.getElementById("abhi")
    // imge.src = result.items[0].image
    // // console.log(img.src)
    // imge.appendChild(img)
    // var image = document.createElement("img")
    // document.getElementById("title").innerText = result.items[0].title

    // var link = result.items[0].image
    // imge.src = link
    // document.getElementById("abhi").appendChild(imge)

    // console.log(link)
    
    // document.body.append(result.items[0].image)
    // console.log(result.items)
    // var res = result.data
// }


// fun1(n)

// function Richard(n){
//     // console.log(n)
//     if(n == 1){
//         console.log("Louise")
//     }

//     for(var i = 0;i<arr.length;i++){
//         if(arr[i] == n){
//             n = n/2
//             if(n == 1){
//                 console.log("Richard")
//             }
//             else{
//                 return fun1(n)
//             }
//         }
//         else{
//             if(arr[i] < n && arr[i+1] > n){
//                 n -=arr[i]
//                 if(n == 1){
//                     console.log("Richard")
//                 }
//                 else{
//                     return fun1(n)
//                 }
             
                
//             }
//         }
//     }
    
// }

// function fun1(value){
//     // console.log(value)
//     if(value == 1){
//         console.log("Louise")
//     }
//     for(var i = 0;i<arr.length;i++){
       
//    if(arr[i] == value){
//        value = value/2
//        if(value == 1){
//            console.log("Louise")
//        }
//        else{
//            return Richard(value)
//        }
//    }
//    else{
//        if(arr[i] < value && arr[i+1] > value){
//            value -=arr[i]
//            if(value == 1){
//             console.log("Louise")
//             }
//             else{
//                 return Richard(value)
//             }
           
           
           
//        }
//    }
// }
    
// }

// var n = 1
// var arr =[]
// // if(n == 1){
// //     console.log("Louise")
// // }
 
// for(var i = 1;i<n;i++){
//     arr.push(2**i)
//     if(2**i>n){
//         break;
//     }
// }

// var count = 0
// var i = 0
// while(i < arr.length){
//     // for(var i = 0; i < arr.length;i++){
//         if(arr[i] == n){
//             n = n/2
//             if(n == 1){
//                 count++
//                 i = 0
//             }
//             i++
//         }
//         else{
//             if(arr[i] < n && arr[i+1] > n){
//                 n -= arr[i]
//                 if(n == 1){
//                     count++
//                     i = 0
//                 }
//                 i++
//             }
//         }
//     // }
//     if(n==1){
//         if(count%2 == 0){
//             console.log("Richard")
//         }
//         else{
//             console.log("Louise")
//         }
//     }
// }

// var a = 1
// b = ++a
// console.log(a)




    










































































