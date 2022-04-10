class Comments {
    constructor({
        name,
        comment,
        StudentRole = "estudiante"
    }) {
        this.name = name,
        this.comment = comment, 
        this.StudentRole = StudentRole
        this.likes = 0;
    }

    publicar(){
        console.log(this.name + ": (" + this.StudentRole +  ") ");
        console.log("Likes: " + this.likes)
        console.log("Comentario: " + this.comment)
    }


}

export { Comments };