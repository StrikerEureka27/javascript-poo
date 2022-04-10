## JavaScript POO

### Javascript orientado a objetos. 

Javascript es un lenguaje orientado a objetos pero basado en prototipos. 

### ¿Que es la programación orientada a objetos? 

### Paradigmas

- Estructurado
- Orientado objetos 
- Funcional

> Debemos implementar el paradigma que mas se ajuste a nuestra necesidad de negocio. 

### Ventajas

- Orden 

- Modularidad

- Mantenimiento

- Reutilizar código

  

### ¿Que es un objeto en javascript?

En javascript debemos de tomar en cuenta que todo esta basado en prototipos por lo tanto un objeto literal es un instancia de un prototipo llamado *Object* , cuando nosotros creamos nuestro propio prototipo como Students, de igual forma este es parte del in prototipo *Object*.  

## Creando objetos literales y prototipos

### Objeto literal

```js
const natalia = {
    name: "Natalia", 
    age: 25, 
    cursosAprobados: [
        "Curso definitivo de HTML",
        "Curso de practico de HTML y CSS" 
    ], 
    // Creacion de metodos
    aprobarCurso(nuevoCurso){
        // This hace referencia al objeto donde estamos
        this.cursosAprobados.push(nuevoCurso);
    }
};
```

### Prototipo

```js
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // Para creacion de metodos
    this.aprobarCurso = function(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }

}
```

o podemos crear el método por fuera del prototipo...

```
Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}
```

Creando la instancia para el prototipo

```js
const juanita = new Student(
    "Juana",
    26,
    [
        "Curso de java SE", 
        "Curso de HTML avanzado"
    ]
    );
```

## Sintaxis de clases

Las clases son una sintaxis mas elegante para trabajar con el mismo concepto de los protiotipos. 

```js
class Student2 {
    // Se ejecuta al instancia el objeto
    constructor (name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    // Creacion de metodo
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}
```

Instanciamos el objeto

```JS
const miguel = new Student2(
    "Miguel", 
    34, 
    [
        "Java orientada a objetos", 
        "Analisis de negocios para ciencia de datos"
    ]
);
```

Podemos pasar atributos como objetos para mayor facilidad al momento de instanciar

```js
class Student2 {
    // Se ejecuta al instancia el objeto
    constructor ({
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
        this.facebook =  facebook;
        this.twitter = twitter;
        this.cursosAprobados = cursosAprobados;
    }
    // Creacion de metodo
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}
```

Al momento de instanciar

```js
const miguel = new Student2({
    name: "Miguel", 
    age: 26, 
    cursosAprobados: ["Html basico"], 
    email: "miguel@mail.com"
});
```

### Anidando el uso de prototipos

```js
class learningPaths {
    constructor({
        name, 
        courses = [],
    }){
        this.name = name,
        this.courses = courses
    }
}
```

Lo instanciamos de la siguiente manera

```js
const escuelaWeb = new learningPaths({
    name: "Escuela de desarrollo web",
    courses: [
        "Introduccion a javascript",
        "Curso practico de javascript"
    ]
});
```

Luego en nuestro prototipo de estudiantes 

```js
class Student3 {
    constructor({
        name, 
        email, 
        username, 
        twitter =  undefined, 
        instagram, 
        facebook,
        approvedCourses = [], 
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
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    addCourseApproved(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}
```

Al instanciar el objeto...

```js
const Juan2 = new Student3({
    name: "Juan",
    username: "JuanDC",
    email: "juan@mai.com", 
    username: "xxJuanxx", 
    cursosAprobados: ["Curso de html"], 
    learningPaths: escuelaWeb
});
```



## ¿Que es la abstracción?

Es la forma de abstraer los datos esenciales de un objeto, para (con el fin de) crear su molde, su Prototipo

## ¿Que es el encapsulamiento?

Es guardar, proteger, guardar o limitar el acceso de cierto atributos y/o propiedades en nuestros prototipos y objetos.

## Getters y setters en JavaScript

```js
class Courses {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name, // Convencion para decir que no se altere este atributo
        this.classes = classes
    }
    // Crear el get
    get name(){
        return this._name;
    }
    // Creacion de set
    set name(newName){
        this._name = newName
    }
}
```

Al momento de llamarlo...

```js
// get
CursoProgramacionBasica.name
// set
CursoProgramacionBasica.name = "Nuevo nombre"
```



## Módulos de ECMAScript

Los módulos nos permiten modularizar nuestro código de javascript. 

Para esto se re ordeno el proyecto de la siguiente manera. 

- Student.mjs
- Lesson.mjs
- Course.mjs
- LearningPath.mjs
- Comment.mjs

Todos estos módulos llamados desde un archivo principal...

- *miniPlatzi.js*

Ejemplo del uso de *export* e *import*

```js
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
}

export { Student }; // Exportamos la clase 
```

Luego en el archivo main...

```js
import { Student } from "./Student.mjs";
```

En el archivo de html lo llamamos así..

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Practica POO</title>
</head>
<body>
    <script src="./miniPlatzi.js" type="module" ></script>
</body>
</html>
```

Podemos esconder funciones de la siguiente manera...

```js
class Lesson {
    constructor({
        name,
        videoID,
        description,
        resources,
        comments = []
    }) {
        this._name = name,
        this._videoID = videoID;
        this._description = description,
        this._resources = resources,
        this._comments = comments
    }

    reproducir(){
        videoPlay(this._videoID);
    }
    pausar(){
        videoPause(this._videoID);
    }
}


function videoPlay(id){
    const secretUrl = "https://platzi.com/" + id;
    console.log("Se esta reproduciendo: " + secretUrl);
}
function videoPause(id){
    const secretUrl = "https://platzi.com/" + id;
    console.log("El vide esta pausado: " + secretUrl);
}


export { Lesson };
```

## ¿Que es la herencia?

Nos permite crear una clase a nivel mas general del cual podemos generar n cantidad de clases. 

```js
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
}

class FreeStudent extends Student {
    constructor(props){
        // Llamando al constructor madre
        super(props);
    }
}

class BasicStudent extends Student {
    constructor(props){
        super(props);
    }
    
}

class ExpertStudent extends Student {
    constructor(props){
        super(props);
    }
}
```



## ¿Que es el polimorfismo?

 Es la práctica de diseñar objetos para compartir comportamientos y poder anular los comportamientos compartidos con otros específicos. El polimorfismo se aprovecha de la herencia para que esto suceda.





