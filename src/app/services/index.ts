/* This layer takes care from the data logic. All the gathering, formating, turning the data into an object. */

import { SomethingRep } from "../repositories";
import { facSomething } from "./factories";

export class SomethingSer {
  repository: SomethingRep;
  constructor(repository: SomethingRep) {
    this.repository = repository;
  }
  async createSer(body: any) {
    const { something } = body;
    if (!something) {
      return { error: true, message: "Bad Request" };
    }
    const newPost = facSomething(something);
    const repositoryRes = await this.repository.createRep(newPost);
    return repositoryRes;
  }
  async findAllSer() {
    return this.repository.findAllRep();
  }
  async findOneSer(id:string) {
    return this.repository.findOneRep(id);
  }
  async updateOneSer(id:any, body:any) {
    const update = { $set: {...body} }
    return this.repository.updateOneRep(id, update);
  }
  async deleteOneSer(id:string) {
    return this.repository.deleteOneRep(id);
  }
}
