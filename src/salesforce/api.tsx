export {};

const express = require("express");
const jsforce = require("jsforce");
// Get environement variables from .env file using dotenv
require("dotenv").config();
const { SF_USERNAME, SF_PASSWORD, SF_TOKEN, SF_LOGIN_URL } = process.env;
//verify if there are environment variables. If not return error message to console
if (!(SF_USERNAME && SF_PASSWORD && SF_TOKEN && SF_LOGIN_URL)) {
  console.error(
    "Cannot start app: missing mandatory configuration. Check your .env file."
  );
  process.exit(-1);
}
// Start connecting to Salesforce org
const conn = new jsforce.Connection({
  loginUrl: SF_LOGIN_URL,
});
conn.login(SF_USERNAME, SF_PASSWORD + SF_TOKEN, (err: any) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
});
const app = express();
const port = 3000;
// Basic set up Express
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.get("/api/sessions", (req: any, res: any) => {
  const soql = `SELECT Id, Name, CreatedById, OwnerId FROM Account WHERE CreatedById='0055g00000ArZNIAA3' LIMIT 100`;
  /* Salesforce connection */
  //   Using the jsforce query method we use the SOQL statement to run that query using the authenticated connection
  conn.query(soql, (err: any, result: any) => {
    if (err) {
      res.sendStatus(500);
    } else if (result.records.length === 0) {
      res.status(404).send("Session not found.");
    } else {
      /* Work with result data */
      const formattedData = result.records.map((sessionRecord: any) => {
        let accounts = [];
        if (sessionRecord.Account) {
          accounts = sessionRecord.Account.records.map((record: any) => {
            return {
              id: record.Account.Id,
              name: record.Account.Name,
            };
          });
        }
        return {
          id: sessionRecord.Id,
          name: sessionRecord.Name,
        };
      });
      res.send({ data: formattedData });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
