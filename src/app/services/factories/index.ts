import { SomethingSer } from ".."
import { SomethingCon } from "../../controllers"
import { SomethingRep } from "../../repositories"
import database from "../../../database"

class Something {
    parameter
    constructor(parameter:any){
        this.parameter = parameter
    }
}

export function facSomething(parameter:any){
    return new Something(parameter)
}

export function facSomethingRoute(){
    const repository = new SomethingRep(database)
    const service = new SomethingSer(repository)
    const controller = new SomethingCon(service)
    return controller
}