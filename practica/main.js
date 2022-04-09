console.log("Hola mundo");

// Objeto literal

const natalia = {
    name: "Natalia",
    age: 25,
    cursosAprobados: [
        "Curso definitivo de HTML",
        "Curso de practico de HTML y CSS"
    ],
    // Creacion de metodos
    aprobarCurso(nuevoCurso) {
        // This hace referencia al objeto donde estamos
        this.cursosAprobados.push(nuevoCurso);
    }
};

// Prototipo Student

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
    "Juana",
    26,
    [
        "Curso de java SE",
        "Curso de HTML avanzado"
    ]
);

// Prototipos con clases

class Student2 {
    // Se ejecuta al instancia el objeto
    constructor({
        name,
        age,
        facebook,
        twitter,
        email,
        cursosAprobados = [], // Podemos asignar valors default
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.facebook = facebook;
        this.twitter = twitter;
        this.cursosAprobados = cursosAprobados;
    }
    // Creacion de metodo
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguel = new Student2({
    name: "Miguel",
    age: 26,
    cursosAprobados: ["Html basico"],
    email: "miguel@mail.com"
});


const juan = {
    name: "JuanDC",
    username: "juandc",
    points: 1500,
    socialMedia: {
        facebook: null,
        twitter: "fjuandc",
        instagram: "juandc"
    },
    approvedCourses: [
        "Curso de html",
        "Curso de CSS"
    ],
    learningPaths: [
        {
            name: "Escuala de desarrollo web",
            courses: [
                "Curso de html",
                "Curso de CSS"
            ]
        },
        {
            name: "Escuela de Video Juegos",
            courses: [
                "Curso de modelado 3D",
                "Programacion en Unity"
            ]
        }
    ]
}


const miguel2 = {
    name: "Miguel",
    username: "miguelmarvel",
    points: 2500,
    socialMedia: {
        facebook: null,
        twitter: "mmarvel",
        instagram: "mmarvel"
    },
    approvedCourses: [
        "Curso de webpack",
        "Curso de Asyncronismo"
    ],
    learningPaths: [
        {
            name: "Escuela de javascript",
            courses: [
                "Curso de webpack",
                "Curso de Asyncronismo"
            ]
        },
        {
            name: "Escuela de data science",
            courses: [
                "Curso de estadistica",
                "Cureso de analisis de datos"
            ]
        }
    ]
}


class Student3 {
    constructor({
        name, 
        email, 
        username, 
        twitter =  undefined, 
        instagram, 
        facebook,
        cursosAprobados = [], 
        learningPaths,
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter, 
            instagram, 
            facebook
        };
        this.cursosAprobados = cursosAprobados;
        this.learningPaths = learningPaths;
    }
}

const Juan2 = new Student3({
    name: "Juan",
    username: "JuanDC",
    email: "juan@mai.com", 
    username: "xxJuanxx", 
    cursosAprobados: ["Curso de html"]
});
