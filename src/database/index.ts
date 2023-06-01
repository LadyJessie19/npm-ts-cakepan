import mongoose from "mongoose"

const url = "mongodb+srv://jessie:jessie@first.buahyq8.mongodb.net/routes"
/* Add after "/" any name to create the collection in your mongoDB database */

export async function initializeDatabase() {
  mongoose.connection
    .on("error", (error) => {
      console.log("ERROR: connection to mongo failed: ", error)
    })
    .on("close", () => {
      console.log("Connection to mongo ended")
    })
    .once("open", () => {
      console.log("Connection to mongo")
    })

   await mongoose.connect(url)
}

export function disconnectDatabase() {
  mongoose.disconnect()
}


// eof