import images from '../Images';
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const generateItems = (amount) => {
  const itemArray = [];
  const colorArray = [
    'синий',
    'красный',
    'зелёный',
    'голубой',
    'фиолетовый',
    'жёлтый',
    'чёрный',
    'белый',
    'розовый',
    'серый',
  ];
  const descriptionArray = [
    'удобный',
    'комфортный',
    'классный',
    'чудесный',
    'замечательный',
    'великолепный',
    'тёплый',
    'уютный',
    'классненький',
    'модный',
  ];
  const nameArray = [
    'футболка',
    'майка',
    'фуфайка',
    'шорты',
    'юбка',
    'платье',
    'туфли',
    'шапка',
    'панамка',
    'костюм',
  ];
  for (let i = 0; i < amount; i++) {
    itemArray[i] = {
      id: i,
      name: nameArray[getRandomInt(10)],
      description: descriptionArray[getRandomInt(10)],
      color: colorArray[getRandomInt(10)],
      price: getRandomInt(9990) + 10,
      rating: getRandomInt(100) + 1,
      image: images[getRandomInt(8)],
    };
  }
  return itemArray;
};
export default generateItems;
