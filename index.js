// import http from "node:http";
// import data from "./data.js";

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "application/json",
//   });
//   res.end(
//     JSON.stringify({
//       data: data,
//     })
//   );
// });

// server.listen(5000, () => {
//   console.log("first");
// });

// import express, { urlencoded } from "express";
// import data from "./data.js";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";

// const app = express();

// app.use(express.json(urlencoded, { limit: "30mb" }));
// // app.use(bodyParser({ urlencoded: true }));

// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   })
// );

// app.use(cookieParser());
// app.get(
//   "/",
//   (req, res) => {
//     res.send().json({
//       hotls: "data",
//     });
//   },
//   () => {}
// );
// app.post("/register", (req, res) => {
//   const { fname, lname, email, phone, password } = req.body;
//   res.send({ fname, lname, email, phone, password });
// });

// app.listen(5000, () => {
//   console.log("worked");
// });

import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
import data from "./data.js";

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/phone", (req, res) => {
  res.send({
    message: "data retrieve correctly",
    data: {
      phone: data,
    },
  });
});

app.listen(5000, () => {
  console.log("worked");
});
