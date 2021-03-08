
    let area = function(length, breadth){
        let a = (length * breadth);
        console.log(`Area of rectangle : ${a}`);
    }

    let perimeter = function(length , breadth){
        let p = 2 * ( length + breadth);
        console.log(`Perimeter of rectange : ${p}`);
    }

    // below syntax exposes or, make function area / perimeter available
    // to global context, user can access it from anywhere using require() functioin 
    // by providing path of the file which contains it.
    module.exports = {
        area ,
        perimeter
    }
