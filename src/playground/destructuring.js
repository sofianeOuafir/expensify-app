// console.log('destructuring');

// const person = {
//   name: 'Andrew',
//   age: 24,
//   location: {
//     city: 'Cannes',
//     temp: 88
//   }
// };


// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;

// if(city && temperature){
//   console.log(`It's ${temperature} in ${city}`);
// }

const book = {
  title: 'Ego is the Enemy',
  author: 'Rya Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self - Published' } = book.publisher;

console.log(publisherName);

