import { makeAutoObservable } from "mobx"

class UserDataStore {

    name:string

    constructor(){
        this.name = 'Nicolas'

        makeAutoObservable(this)
    }
}

export const userDataSession = new UserDataStore()

export default UserDataStore