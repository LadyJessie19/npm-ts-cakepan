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
