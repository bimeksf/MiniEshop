

export async function  fetchAllProducts() {

  const url = "https://fakestoreapi.com/products";

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }


  return await response.json();

}


export async function fetchOneProduct(id) {
    const url = `https://fakestoreapi.com/products/${id}`
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Product with id ${id} not found`);
      }
      return await response.json();
}