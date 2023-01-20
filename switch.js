var a = new Date()
switch(a.getDay()){
    case 0 :
        console.log("sunday")
        break;
    case 1 :
        console.log("monday")
        break;
    case 2 :
        console.log("tuesday")
        break;
    case 3 :
        console.log("wednesday")
        break;
    case 4 :
        console.log("thursday")
        break;
    case 5 :
        console.log("friday")
        break;
    case 6 :
        console.log("saturday")
        break;
    default:
        console.log("not a day")
}
var arr = [2,4,5,5,6,7,33,3,4,2,1]
var res = arr.sort((a,b)=>a-b)
console.log(res)
