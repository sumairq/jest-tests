
const calculator = {
    add(x,y){
        if( 1 > x || 1 > y){
            throw new Error('you cannot sum values that are less than 1');
        }

        if(!x || !y){
            throw new Error('you need to write two values');
        }
        return x + y
    },

    subtract(x,y){
        if(typeof(x) !== 'number' || typeof(y) !== 'number'){
            throw new Error('only numbers accepteds')
        }

        if(x < y){
            throw new Error('first number should be bigger')
        }
        return x - y;
    },

    divide(x,y){
       return x / y
    }
}


module.exports = calculator
