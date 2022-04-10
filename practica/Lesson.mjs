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