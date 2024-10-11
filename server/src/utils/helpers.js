const liItem = document.querySelectorAll('.product-single__photo')
// Kiểm tra só phần tử li 
const liItemQuantity = liItem.length
console.log(liItemQuantity);
// Chèn text
for (let i = 0; i < liItemQuantity; i++) {
    liItem[i].textContent = "Nguyen Duc Long"
}