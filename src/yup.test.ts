import { yupHey } from "./yup";

describe("yup.ts", () => {
  it("Should return a funny phrase", () => {
    const testingFunction = yupHey();
    const result = "yupHey function done.";
    expect(testingFunction).toHaveReturnedWith(result);
  });
});

/* Run in the root folde the command "jest" and all the tests will be runned*/


/* Another Jest Example */

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