const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized URL
console.log(myURL.href);
console.log(myURL.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (doesn't get port, host does)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append("abc", "123");

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value})`));
