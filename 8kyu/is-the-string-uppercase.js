//Is the string Uppercase?
//Create a method to see wether the string is ALL CAPS
String.prototype.isUppercase = function(){
    return this == this.toUpperCase() // this meaning the object(the string)
}

