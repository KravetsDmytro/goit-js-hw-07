import { galleryItems } from './gallery-items.js';
// Change code below this line

// const galleryContainer = document.querySelector('.gallery');
// const galleryCardsSet = createGallery(galleryItems);

// function createGallery(galleryItems) {
//   return galleryItems
//     .map(({ original, preview, description }) => {
//       return `<div class="gallery__item" style="border-radius: 4px; background: transparent; box-shadow: none;">
//   <a class="gallery__item" href="${original}" style= "box-shadow: none;" style="border-radius: 4px;">
//   <img class="gallery__image" src="${preview}" alt="${description}" style="border: 1px solid transparent;
//   border-radius: 4px;
//   padding: 5px; background: rgba(255, 255, 255, 0.3); box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 2px 1px -1px rgb(0 0 0 / 12%);"/>
// </a>
// </div>`;
//     })
//     .join('');
// }

// galleryContainer.insertAdjacentHTML('beforeend', galleryCardsSet);

// console.log(galleryItems)

// const galleryCardsSet = createGalleryMarcup( galleryItems) ;

// function createGalleryMarcup( galleryItems) {return 
//   galleryItems.map(({preview, original, description}) => {
//    return `<li class="gallery__item">
// <a class="gallery__link" href="large-image.jpg">
//   <img
//     class="gallery__image"
//   src="${preview}"
//     data-source="${original}"
//     alt="${description}"
//   />
// </a>
// </li>
// `}) .join('');

// }
// galleryUl.insertAdjacentHTML('beforeend', galleryCardsSet);


console.log ( creatGalleryMarcup(galleryItems))

console.log(galleryItems);

// 1. створення змінної з лі(gallery);
// 2. через мап перебираю galeriitems , деструктизація властивостей і вкінці на метод map додаю метод join/.;
// 3. insertAdjacentHTML вставляю створену строку в html. 

const galleryUlContainer =document.querySelector('.gallery');
const galleryMarcup =creatGalleryMarcup (galleryItems);

galleryUlContainer.addEventListener('click', galleryUlContainerClick);


    function creatGalleryMarcup (galleryItems) {
      return galleryItems.map(({preview, original, description}) => {
         return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>    
    `}).join('');}
    
    galleryUlContainer.insertAdjacentHTML('beforeend', galleryMarcup);
// додаємо розмітку в хтмл

// створення фунуції кліку на картинку  
function galleryUlContainerClick (evt){
  evt.preventDefault();

  const datasetSource =evt.target.dataset.source;
  console.log(datasetSource)
// перевірка якщо не картинка то повернення
  if (!datasetSource){
    return;
  }

  modal.element().querySelector('img').src = datasetSource;

  // console.log (datasetSource)
  modal.show();
}

// модальне вікно

const modal = basicLightbox.create(
  `
  <img width="1280" height="auto" src="">`,
  {
      onShow: (modal) => {
          window.addEventListener('keydown', onEscBtnPress);
      },
      onClose: (modal) => {
          window.removeEventListener('keydown', onEscBtnPress);
      },
  }
)

// закриття модального вікна через еск.
function onEscBtnPress(evt) {
  if(evt.code !=='Escape') {
      return;
  }
  modal.close();
}


//   const modalWindow = basicLightbox.create(`
//   <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

// if (evt.target.classList.contains())







// ____________далі 4_______________________

// function handleGalleryContainerClick(evt) {
//   evt.preventDefault();
//   if (!evt.target.classList.contains('gallery__image')) {
//       return;
//   }

//   const originUrl = evt.target.dataset.source;

//   createModalOnGalleryItemClick(originUrl);
// };

// function createModalOnGalleryItemClick(url) {
//   const modal = basicLightbox.create(`
//   <img width="1400" height="900" src="${url}">
// `);

//   modal.show();
//   document.addEventListener('keydown', handleEscKeydown);

//   function handleEscKeydown(evt) {
//       if (evt.code === 'Escape') {
//           modal.close();
//       document.removeEventListener('keydown', handleEscKeydown);
//       }
//   }
// };
