class AppData {

    constructor (profile) {
        this.profile = profile
        this.tmstmp = Date.now()
        this.data = []
    }

    addTask(text, done) {
        let idx = Date.now()
        this.data.push({id: idx, tarea: text, hecho: done})
        this.tmstmp = Date.now()
        this.sync()
        return idx
    }
    
    deleteAll() {
        this.data = []
        this.tmstmp = Date.now()
        this.sync()
    }

    deleteTask(id) {
        let idx = this.data.findIndex(tarea => tarea.id == id)
        this.data.splice(idx, 1)
        this.tmstmp = Date.now()
        this.sync()
    }

    done(id, done) {
        let idx = this.data.findIndex(tarea => tarea.id == id)
        this.data[idx].hecho = done
        this.tmstmp = Date.now()
        this.sync()
    }

    isDone(id) {
        let idx = this.data.findIndex(tarea => tarea.id == id)
        return this.data[idx].hecho
    }

    sync() {
        let saved = retrieve(this.profile) 
        if (saved.tmstmp > this.tmstmp) 
            this.data = saved.data
        else save(this)
    }

}

function retrieve(profile) {
    var data = new AppData(profile)
    var obj = JSON.parse(localStorage.getItem(profile))
    
    if (obj!=null) {
        data.tmstmp = obj.tmstmp
        data.data = obj.data
    }

    return data
}

function save(apd) {
    localStorage.setItem(apd.profile, JSON.stringify(apd))
}

export var appData = retrieve('my-todo-app');
