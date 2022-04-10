import { Comments } from "./Comment.mjs";

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram,
        facebook,
        learningPaths,
        approvedCourses = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
    addCourseApproved(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent){
        const comentario = new Comments({
            comment: commentContent,
            name: this.name,
        });

        comentario.publicar();
    }
}

class FreeStudent extends Student {
    constructor(props){
        // Llamando al constructor madre
        super(props);
    }
    addCourseApproved(newCourse){
        console.log(newCourse.name)
        console.log(newCourse.isFree)
        if(newCourse.isFree==true){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos " + this.name + ", solo puedes tomar cusros abiertos!")
        }
    }
}

class BasicStudent extends Student {
    constructor(props){
        super(props);
    }
    addCourseApproved(newCourse){
        if(newCourse.lang!=="EN"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos " + this.name + ", solo puedes tomar cusros en ES!")
        }
    }
    
}

class ExpertStudent extends Student {
    constructor(props){
        super(props);
    }
    addCourseApproved(newCourse){
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }
    publicarComentario(commentContent){
        const comentario = new Comments({
            comment: commentContent,
            name: this.name,
            StudentRole: "profesor"
        });

        comentario.publicar();
    }
}

export { Student, FreeStudent, BasicStudent, ExpertStudent , TeacherStudent};