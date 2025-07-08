const model = 'iPhone 14';
const search = 'iPH';

const condition = model.toLowerCase().includes(search.toLowerCase());

if (condition) {
  console.log('The model was found!');
}
