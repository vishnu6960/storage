var a = new Date()
switch(a.getDay()){
    case 0 :
        console.log("sunday")
        break;
    case 4 :
        console.log("friday")
        break;
    case 5 :
        console.log("saturday")
        break;
    default:
        console.log("not a day")
}