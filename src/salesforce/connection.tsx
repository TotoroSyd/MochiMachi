import { connect } from "http2";
import { userInfo } from "os";

export {};
// Adding library
const express = require("express");
const jsforce = require("jsforce");

// Create express app
const app = express();
app.set("port", 3000);

// Connect SF
app.get("/", (req: any, res: any) => {
  const conn = new jsforce.Connection({
    loginUrl: "https://test.salesforce.com",
  });
  const username = "xoalah@curious-moose-tyz4li.com";
  const password = "mochiMachi2022";
  conn.login(username, password, (err: any, userInfo: any) => {
    if (err) {
      return console.log(err);
    }
    // Save access token and instace URL for later use
    console.log(conn);
    console.log(conn.accessToken);
    console.log(conn.instanceUrl);
    // logged in user property
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    // Respond
    res.send("JSForce Connect Successed");
  });
});

// Express server listening
app.listen(app.get("port"), () => {
  console.log(`Server listening at port: ${app.get("port")}`);
});
