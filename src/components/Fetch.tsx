export default function Fetch() {
  // POST to create contract record (and account record if new customer)
  interface fetchOp {
    method: string;
    headers: { [key: string]: string };
    body: string;
  }

  function fetchCreateContract() {
    let url = "";
    let options: fetchOp = {
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: "foo=bar&lorem=ipsum",
    };

    let createdContract = fetch(url, options);
    return createdContract;
  }
}
