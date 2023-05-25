class Something {
    parameter
    constructor(parameter:any){
        this.parameter = parameter
    }
}

function factoryFunction(parameter:any){
    return new Something(parameter)
}

export default factoryFunction