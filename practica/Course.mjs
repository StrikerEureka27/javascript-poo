class Course {
    constructor({
        name,
        lang = "ES",
        isFree,
        classes = [],
    }) {
        this._name = name, // Convencion para decir que no se altere este atributo
        this._lang = lang, 
        this._isFree = isFree,
        this.classes = classes
    }
    // Crear el get
    get name() {
        return this._name;
    }
    // Creacion de set
    set name(newName) {
        this._name = newName
    }

    get isFree(){
        return this._isFree;
    }

    set isFree(isFree){
        this._isFree = isFree; 
    }
}

export { Course };