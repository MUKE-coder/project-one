// import { getDataFromDB, getProducts } from "./functions.js";
// PROMISES
/*
two Outcomes
=>Successful
=>Fail

3 Stages
=>Pending
=>Successfull => Resolved
=> Fails => rejected


//Data
- Locally
-> Remote => Database

How do we get that data
=> APP (Restaurant)     API(Waiter)     DB(Kitchen)


API = Application Programming Interface
*/
// Synchrnous Behaviour (Single Threaded)
// console.log("Bring Tea =>5");
// console.log("Bring me Matokee and Fish =>20");
// console.log("Bring an egg =>5");

import getDataFromDB, { getProducts } from "./functions.js";

// Promises
// 1s  = 1000ms
setTimeout(() => {
  console.log("Bring Tea =>2s");
}, 2000);
setTimeout(() => {
  console.log("Bring me Matokee and Fish =>5s");
}, 5000);
setTimeout(() => {
  console.log("Bring an egg =>2s");
}, 2000);

// FETCHING DATA => TAkes Time => Fetch Data from an API using Promises

// API => Exposes various endpoints (links pointing resources) that u can use to access diff data point

// Endpoint
//Understand the response (Structure of the Data) from the Api endpoint
// The Steps the data go through
// Request: fetch(endpoint)
//Response :.then((res)=>console.log(res))
//Processing the response

const endpoint = "https://api.escuelajs.co/api/v1/products";

// getProducts(endpoint);

// Synchronous => it does one task at a time
// asynchronous =>
// ASYNC / AWAIT

getDataFromDB(endpoint);

// Modules (Export and Import)

// NPM => Node package Manager

// Package => registry => devs have access
