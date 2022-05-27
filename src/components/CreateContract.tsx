export default async function CreateContract() {
  // POST to create contract record (and account record if new customer)

  interface PromiseRes {
    id: string;
    success: boolean;
    errors: string;
  }

  let _data = {
    title: "test passing data",
    body: "bar",
  };

  let url = "http://localhost:3001/createContract";
  let options = {
    method: "POST",
    headers: {
      // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_data),
  };

  // function status(response: PromiseRes) {
  //   // Check status and return resolve or reject
  //   if (response.success) {
  //     return Promise.resolve(response);
  //   } else {
  //     return Promise.reject(new Error(response.errors));
  //   }
  // }
  // function jsonn(response: any) {
  //   return response.json();
  // }

  let fetchPromise;
  //Handle promise
  try {
    fetchPromise = await fetch(url, options);
    return fetchPromise.json();
  } catch (error) {
    console.log("Request failed", error);
  }

  // await fetch(url, options)
  //   .then(status)
  //   .then(jsonn)
  //   .catch((error: any) => {
  //     console.log("Request failed", error);
  //   });
}
