/* This layer takes care from the data logic. All the gathering, formating, turning the data into an object. */

import { SomethingRep } from "../repositories";
import { facSomething } from "./factories";

export class SomethingSer {
  repository: SomethingRep;
  constructor(repository: SomethingRep) {
    this.repository = repository;
  }
  async createSer(body: any) {
    const { parameter } = body;
    if (!parameter) {
      return { error: true, message: "Bad Request" };
    }
    const newPost = facSomething(parameter);
    const repositoryRes = await this.repository.createRep(newPost);
    return repositoryRes;
  }
  async findAllSer() {
    return this.repository.findAllRep();
  }
}
