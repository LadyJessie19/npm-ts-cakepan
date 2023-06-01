import { SomethingSer } from ".."
import { Model } from "../../../entities/Model"
import { SomethingCon } from "../../controllers"
import { SomethingRep } from "../../repositories"


class Something {
    something
    constructor(something:any){
        this.something = something
    }
}

export function facSomething(something:any){
    return new Something(something)
}

export function facSomethingRoute(){
    const repository = new SomethingRep(Model)
    const service = new SomethingSer(repository)
    const controller = new SomethingCon(service)
    return controller
}