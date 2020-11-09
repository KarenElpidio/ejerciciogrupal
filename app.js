let persona = {
    nombre : "Karen",
    saludar : function(){
        return 'Hola ' + this.nombre //la palabra reservada 'this' reemplaza al nombre del objeto
    }
}
​
console.log( persona.saludar() ) 