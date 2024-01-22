import { makeAutoObservable } from "mobx"

class InventoryDataStore {

    items:string[]

    constructor(){

        this.items = ['Arroz', 'Fideos', 'Salsa']

        makeAutoObservable(this)
    }
}

export const inventoryDataSession = new InventoryDataStore()

export default InventoryDataStore