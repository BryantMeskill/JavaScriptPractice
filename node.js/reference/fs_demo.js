const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created");
// });

// Create and write to file (will overwrite existing data if file already exists)
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World! \n",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to!");

//     // Appends additional text to a pre-existing file
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "This is additional text, added via the appendFile method of fs",
//       (err) => {
//         if (err) throw err;
//         console.log("File written to!");
//       }
//     );
//   }
// );

// Read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed!");
  }
);
