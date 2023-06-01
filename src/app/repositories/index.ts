/* This section controls the database methods */
/* This section get in touch in the database */

export class SomethingRep{
    database: any
    constructor(database:any){
        this.database = database
    }
    async createRep(some:object){
        return this.database.create(some)
    }
    async findAllRep(){
        return this.database.find()
    }
    async findOneRep(id:string){
        return this.database.findById(id)
    }
    async updateOneRep(id:string, update:object){
        return this.database.findByIdAndUpdate(id, update, { new: true})
    }
    async deleteOneRep(id:string){
        return this.database.findByIdAndDelete(id)
    }
}

/* Example update => { data: "update_here" } */

/* 
.create({ name: 'IPhone XR' price: 8000 })
.find()
.findById("6473ad9991e2b3bc84cdec48")
.findByIdAndUpdate("6473ad9991e2b3bc84cdec48", { price: 7000 })
.findByIdAndDelete("6473ad9991e2b3bc84cdec48")
*/