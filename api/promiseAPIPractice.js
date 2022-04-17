// var p = new Promise(function(resolve, reject) {

//     if (/* good condition */) {
//         resolve('Success!');
//     } else {
//         reject('Failure!');
//     }
// });

// p.then(function(result) {
//     /* do something with the result */
// }).catch(function() {
//     /* error */
// }).finally(function() {
//     /* executes regardless of success or failure */
// })

//example of converting XMLHttpRequest to a promise-based task

function get(url) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = function () {
      //This is called even on 404 etc
      //so check the status
      if (req.status == 200) {
        //resolve the promise with the response text
        resolve(req.response);
      } else {
        //otherwise reject with the status text
        //which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };
    //handle network errors
    req.onerror = function () {
      reject(Error("Network Error"));
    };

    req.send();
  });
}

get("story.json").then(
  function (response) {
    console.log("Success!", response);
  },
  function (error) {
    console.error("Failed", error);
  }
);
