// Code your solution in this file!










const distanceFromHqInBlocks = (blocks) => {
    if (blocks >= 42) {
        return blocks - 42;
    } else if (blocks < 42) {
        return 42 - blocks;
    };
};

//call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
//passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
//the return value of distanceFromHqInBlocks can then be used to calculate feet
const distanceFromHqInFeet = (feet) => {
    let distance = distanceFromHqInBlocks(feet);
    return (distance * 264);
};

// Calculates the number of feet a passenger travels given a starting block and an ending block 
// it only calculates distance North and South (uptown/downtown). 
// It uses the knowledge that a block is 264 feet long.
const distanceTravelledInFeet = (start, end) => {
   //const blocks = Math.abs(start, end);
   //return (blocks * 264);
   const blocks = Math.abs(start - end);
   return (blocks * 264);
 } ;

// Given the same starting and ending block as the previous test (hint hint), 
// first 400 feet are free
// distances 400 to 2000 feet are 2 cents per foot not including 400
// flat fare for over 2000 and under 2500
// if ride is over 2500 returns "cannot travel that far"
 const calculatesFarePrice = (start, destination) => {
    let ride = distanceTravelledInFeet(start, destination);
    if (ride <= 400) {
        return 0;
    } else if (ride <= 2000) {
        return (ride - 400) * 0.02;
    } else if (ride >= 2000 && ride <= 2500) {
        //console.log("did i hit third if");
        return 25;
    } else if (ride > 2500) {
        return "cannot travel that far";
    }
 };
//console.log(calculatesFarePrice(34,32));
