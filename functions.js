import axios from "axios";
// export default async function getDataFromDB(endpoint) {
//   try {
//     const response = await fetch(endpoint);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
export default async function getDataFromDB() {
  try {
    const response = await axios.get(endpoint);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export function getProducts(endpoint) {
  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

// export default
