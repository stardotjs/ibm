let user = "Vijay";
//--------------------
let hero = {
    title : "Ironman",
    firstname : "Tony",
    lastname : "Stark",
    city : "New York"
};
//--------------------
function adder(num1, num2){
    return num1 + num2;
};

// commonjs 
/* 
module.exports.user = user;
module.exports.hero = hero;
module.exports.adder = adder; 
*/

/* 
module.exports = {
    user : user, 
    hero : hero, 
    adder : adder
};     
*/

module.exports = { user, hero, adder }; 