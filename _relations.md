# The Relationship Between Entities

## Obsevation points:

For studies purposes, i'm going to use the words "Parent", "Son", "Brother", and etc, just to demostrate the relation between entities.

An short example to entities relation:

![img.png](https://media.discordapp.net/attachments/1080178640756691157/1115291516152315984/210573868-908937bc-e555-46b8-8d9c-8bb481d6fdeb.png?width=454&height=369)


## In relation One to One:

I'm currentlly studying a kanban database, so all the examples that are going to se used are from it.

### Routes - for both entities

* index.ts -> 

````
import { Router } from "express";
import { userRouter } from "./userRoutes";
import { taskRouter } from "./taskRoutes";

const RoutesUserTask = Router()

RoutesUserTask.use("/users", userRouter)
RoutesUserTask.use("/tasks", tasksRouter)

export { RoutesUserTask }
````

* userRoutes ->
```
import { Router } from "express";
import { UserFac } from "../users/UserFac";

const userRouter = Router()
const userFac = UserFac.build().controller

userRouter.post('/', (req, res) => {
    return userFac.createCon(req, res)
})

... other routes here ...

export { userRouter }

```

* taskRoutes -> 

```
import { Router } from "express"
import { TaskFac } from "../tasks/TaskFac"

const taskModule = TaskFac()
export const taskRouter = Router()

taskRouter.get('/', (req, res) => taskModule.getAllCon(req, res))
taskRouter.post('/:user_id', (req, res) => taskModule.createCon(req, res))

```

### Entity Parent - (User)

* Layer "Entity": indicate on the schema type ObjectId and ref from the entity Son (Task). Don't forget to put in "[]" so it will be indicated that is a list of the son entity.

* Layer "Factory": the Module factory must export the controller and the repository;

* Layer "Routes": All the requisitions path from the entity Parent. Don't forget that it's necessary to instance the Parent Factory and them choose the controller.

* Layer "Controller": The "data waitress".

* Layer "Service": The "data cooker";

* Layer "Repository": The "data table";
    - When the getAll function is called, don't forget to use populate function with the Son entity name beign used as a parameter.
    - In this repository must have a associateSon function. This function needs two parameters: the parent id object and the son id object. Using the findByIdAndUpdate method we can add to the son atribute(tasks) the new son id object.

### Entity Son - (Task)

* Layer "Entity": indicate on the schema type ObjectId and ref from the entity Parent (User);

* Layer "Factory": the Module factory must export the controller;
    - The sonFac must import the parentFac repository, because its initialized with the correct parameters (service, model, controller). In this way, we will be able to also manipulate the parent repository when a child of the son will be created.
    - the son factory doesn't needs to return repository with the controller.

* Layer Routes: All the requisitions path from the entity Parent;
    - The only import beyond Router is the TaskFac, that is current returning the controller from the Son Entity.

* Layer Controller: The "data waitress";
    - The createCon function needs the parent id (user_id). It can be found within the params or any other the dev wants.

    - In the createSer we must use the associateSon function, using the parameters parentId and sonId. This function is at parentRep.

* Layer Service: The "data cooker";
    - at the class constructor we pass two proprieties: the repository and de parentRepository, because we need to associate the created son(task) with the current parent(user).

* Layer Repository: The "data table";
    - Nothing irregular in here

* Function Associate Son-Parent: this function is responsable for make a push in the parent repository with the created Son;
    - Is create at the Parent Repository Layer, and it pushes the created son id (task id) in his schema son atribute (tasks). We may also add a config object along with the $push, a { new: true }, for the requisition tool that is being used.
