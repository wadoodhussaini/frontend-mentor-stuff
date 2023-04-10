const featuredProductImage = document.getElementById("featured-product");
const productImgThumbnails = document.querySelector(".product-thumbnails-wrap");

productImgThumbnails.addEventListener("click", (e) => {
  // if click is not on image, return
  if (!e.target.classList.contains("product-thumbnail")) return;

  // update featured image
  const imgId = e.target.dataset.id;
  featuredProductImage.src = `./images/image-product-${imgId}.jpg`;

  // add active class to clicked thumbnail
  e.target.parentElement.querySelectorAll("img").forEach((img) => {
    img.classList.toggle("active", img.dataset.id === imgId);
  });
});
