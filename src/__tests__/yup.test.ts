import { yupHey } from "../yup";

describe("yup.ts", () => {
  it("Should return a funny phrase", () => {
    const testingFunction = yupHey();
    const result = "yupHey function done.";
    expect(testingFunction).toHaveReturnedWith(result);
  });
});

/* Run in the root folder the command: npm run test */


/* Jest Examples bellow */

/* 
import { createBook } from "./books";

describe("Books.ts", () => {
  it("Should create a new book", () => {
    const newBook = createBook({
      author: "Jessica",
      pages: 300,
      title: "Romana",
    });
    const expectedKeys = ["author", "pages", "title", "id", "createdAt"];
    const keys = Object.keys(newBook);
    expect(keys).toEqual(expectedKeys);
  });
});

*/

/* Mock and Stub Example */

/* Mock: Creates a fake item or object that suits the testing process */

/* Stub: Creates a fake function return that is only used in the testing process */

/* 
const { UserService, UserRepository } = require('../src/user')

const repository = new UserRepository()
const service = new UserService(repository)

test("#UserService.create deve ser capaz de criar um usuário", () => {
  const mock = { email: 'foo@bar.com', password: '1234' }
  jest.spyOn(repository, 'findByEmail').mockReturnValue(null)
  jest.spyOn(repository, 'create').mockReturnValue(mock)

  const result = service.create(mock)

  expect(result.email).toBe('foo@bar.com')
  expect(result.password).toBe('1234')
})

*/

/* Spy example */

/* A spy pays attention in a choosen function */

/* 
const logger = require('../src/logger')

describe("Logger", () => {
  it("should be called 2 times", () => {
    const spy = jest.spyOn(logger, 'log')
  
    logger.log("HELLO")
    logger.log("HELLO")
  
    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy).toHaveBeenCalledWith("HELLO")
  })
})

*/