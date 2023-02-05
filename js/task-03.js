const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');
console.log(galleryList);

// const makeImageList = ({ url, alt }) => {
//   const imageList = document.createElement('li');
//   imageList.classList.add('gallery__list');
//   const galleryImage = document.createElement('img');
//   galleryImage.alt = alt;
//   galleryImage.src = url;
//   galleryImage.classList.add('gallery__image');
//   imageList.append(galleryImage);

//   return imageList;
// }

// const gallery = images.map(makeImageList);

// galleryList.append(...gallery);

const makeImageListMarkin = ({ url, alt }) => { 
 return `<li class = "gallery__list"> <img src="${url}" alt="${alt}" class= "gallery__image"></img></li>`;
}

const makeImageList = images.map(makeImageListMarkin).join('');
galleryList.insertAdjacentHTML('afterbegin', makeImageList);