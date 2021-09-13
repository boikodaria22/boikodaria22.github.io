var position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const wrapper = document.querySelector('.slider-wrapper ');
const items = document.querySelector('.slider-items');
//const item = document.querySelector('.slider-item');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const itemsList = document.querySelectorAll('.slider-item');
const itemsCount = itemsList.length;
const itemWidth = wrapper.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

itemsList.forEach((item)=>{
  item.style.minWidth = `${itemWidth}px`;
});


btnNext.addEventListener('click',() => {
  const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click',() => {
  const itemLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});
 
const setPosition = () => {
  items.style.transform = `translateX(${position}px)`
   };

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow)* itemWidth};
checkBtns();