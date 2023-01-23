class Vishnu{
    constructor(name){
        this.name = name
    }
    show(){
        return `I have a ${this.name}`
    }
}
class Demo extends Vishnu{
    constructor(name,mod){
        super(name)
        this.model = mod
    }
    display(){
        return `${this.show()}, it is a ${this.model}`
    }
}
let x = new Demo("Duke","250cc")
console.log(x.name)
console.log(x.display())