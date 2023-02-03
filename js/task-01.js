const categoryListEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryListEl.length}`);

categoryListEl.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
})


