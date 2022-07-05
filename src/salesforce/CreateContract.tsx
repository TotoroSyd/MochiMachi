import { IDeliveryContact } from "../contexts/DeliveryContext";
import { IOrder } from "../contexts/OrderContext";

export default async function CreateContract(
  data: Array<IDeliveryContact[] | number | IOrder[]>
) {
  // POST to create contract record (and account record if new customer)
  interface PromiseRes {
    id: string;
    success: boolean;
    errors: string;
  }
  console.log("data passed into CreateContract: ", data);
  let url = "http://localhost:3001/contract/create";
  let options = {
    method: "POST",
    headers: {
      // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  //Handle response
  try {
    let response = await fetch(url, options);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log("Request failed", error);
    return new Error();
  }
}
