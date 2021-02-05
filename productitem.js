const url = "https://kea-alt-del.dk/t7/api/products/1528";

//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));
//populate the page

function showProduct(product) {
  console.log(product);
  document.querySelector(".productname").textContent =
    product.productdisplayname;
  document.querySelector("h1.productname").textContent =
    product.productdisplayname;
  document.querySelector("p.productname").textContent =
    product.productdisplayname;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".brandinfo").textContent = product.brandbio;
  document.querySelector(".year").textContent = product.productionyear;
  document.querySelector(".color").textContent = product.colour1;
  document.querySelector(".inventory").textContent = product.id;
  document.querySelector(".price").textContent = "DKK " + product.price + ",-";
  document.querySelector(".type").textContent = product.articletype;

  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
}
