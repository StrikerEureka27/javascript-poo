class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name,
            this.courses = courses
    }
}

export { LearningPath };