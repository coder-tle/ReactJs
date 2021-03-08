// array destructuring
const intro = ['Hello', 'I', 'am', 'Sarfaraz'];
const [greeting, pronoun] = intro;

console.log(greeting);
console.log(pronoun);

const [greeting2, , , name2] = intro;
console.log(greeting2);
console.log(name2);


// object destructuring
const friend = {name : 'Sarfaraz', age : 23};

const descriptFriend = (friend)=>  `My friend ${friend.name} is ${friend.age} years old`;

console.log(descriptFriend(friend));


const descriptFriend2 = ({name, age})=>`My friend ${name} is ${age} years old`;

console.log(descriptFriend2(friend));


