import { makeAutoObservable } from 'mobx'

class UserStore {

    name:string

    constructor(name:string){
        this.name = name

        makeAutoObservable(this)
    }
}

const userStore = new UserStore('Nicolas')

export { userStore, UserStore }