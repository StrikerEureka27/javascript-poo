import { Student, FreeStudent, BasicStudent, ExpertStudent, TeacherStudent} from "./Student.mjs";
import { LearningPath } from "./LearningPath.mjs";
import { Course } from "./Course.mjs";
import { Lesson } from "./Lesson.mjs";
// import { Comment } from "./Comment.js";

// Generacion de clases o lecciones

const conceptosBasicos = new Lesson({
    name: "Conceptos basicos de programacion",
    description: "En esta clase aprenderas los conceptos basicos de programacion",
    resources: ["https://pagina/recurso", "https://pagina/recurso2"]
});

const variables = new Lesson({
    name: "Conceptos basicos de variables",
    description: "En esta clase aprenderas los conceptos basicos de variable",
    resources: ["https://pagina/recurso5", "https://pagina/recurso4"]
});


// Generacion de cursos

const CursoIntroduccionJavaScript = new Course({
    name: "Curso de introduccion a JavaScript",
    isFree: false, 
    lang: "ES",
    classes: [conceptosBasicos, variables]
});

const CursoProgramacionBasica = new Course({
    name: "Curso de programacion basica",
    isFree: true, 
    lang: "ES",
    classes: [conceptosBasicos, variables]
});


const escuelaDesarrolloWeb = new LearningPath({
    name: "Escuela de desarrollo Web",
    courses: [CursoProgramacionBasica, CursoIntroduccionJavaScript]
});

const escuelaDataScience = new LearningPath({
    name: "Escuela de Data Science",
    courses: [CursoProgramacionBasica]
});

const escuelaDesarrolloVideoJuegos = new LearningPath({
    name: "Escuela de desarrollo de Video Juegos",
    courses: [CursoProgramacionBasica]
});

// Generacion de estuduante

const pablo = new Student({
    name: "Pablo Daniel",
    email: "pablocaceros@gmail.com",
    username: "StrikerEureka27",
    socialMedia: {
        twitter: "@Increiblemente",
        instagram: "@pablocaceros",
        facebook: "Pablo Caceros",
    },
    learningPaths: [escuelaDesarrolloWeb, escuelaDesarrolloVideoJuegos, escuelaDataScience]
});

const daniel = new FreeStudent({
    name: "Daniel",
    email: "dani@gmail.com",
    username: "StrikerEureka",
    socialMedia: {
        twitter: "@Increiblemente",
        instagram: "@dani",
        facebook: "Daniel Pineda",
    },
    learningPaths: [escuelaDesarrolloWeb]
});


const freddy = new TeacherStudent({
    name: "Freddy Vega",
    email: "freddy@gmail.com",
    username: "fredo",
    socialMedia: {
        twitter: "@freddy",
        instagram: "@paltzi",
        facebook: "",
    },
    learningPaths: []
});

const clas1 = new Lesson({
    name: "Conceptos basicos de programacion",
    description: "En esta clase aprenderas los conceptos basicos de programacion",
    resources: ["https://pagina/recurso", "https://pagina/recurso2"], 
    videoID: 54666
});

clas1.reproducir();
clas1.pausar();

daniel.addCourseApproved(CursoProgramacionBasica);
daniel.publicarComentario("Hola soy goku");

freddy.publicarComentario("Hola comunidad soy admin >:D");

console.log(freddy);
console.log(pablo);
console.log(daniel);











