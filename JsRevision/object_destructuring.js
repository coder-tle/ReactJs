const user ={
    id : 42,
    is_verified : true
};

// it helps to create variable which is named equal to the 
// properties of the object.
const{id, is_verified} = user;

console.log(id);

console.log(is_verified);
