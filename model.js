class AppData {

    constructor (profile) {
        this.profile = profile
        this.tmstmp = Date.now()
        this.data = []
    }

    addTask(text, done) {
        this.data.push({tarea: text, hecho: done})
        this.tmstmp = Date.now()
        this.sync()
        return this.data.length -1
    }
    
    deleteTask(id) {
        this.data.splice(id, 1)
        this.tmstmp = Date.now()
        this.sync()
    }

    done(id, done) {
        this.data[id].hecho = done
        this.tmstmp = Date.now()
        this.sync()
    }

    isDone(id) {
        return this.data[id].hecho
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
