console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) {
        for (let n = -1; n >= count; n--){
            if (n % 2 != 0) {
                console.log(n);
            }
        }
    } else {
        for (let n = 1; n <= count; n++) {
            if (n % 2 != 0) {
                console.log(n);
            }
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age, userName) {
    let aboveSixteen = `Congrats ${userName}, you are old enough to drive!`;
    let belowSixteen = `Sorry ${userName}, you are not old enough yet!`;
    if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}

// Exercise 3 Section
console.log("Exercise 3: \n==========\n");

function whichQuadrant(x, y) {
    if (x > 0 && y > o) {
        console.log("Quadrant 1");
    } else if (x < 0 && y > 0) {
        console.log("Quadrant 2");
    } else if (x < 0 && y < 0) {
        console.log("Quandrant 3");
    } else if (x > 0 && y < 0) {
        console.log("Quadrant 4");
    } else {
        console.log("Not in any Quandrant");
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
 function whichTriangle(side1, side2, side3) {
    let triangleType = "";
    if (side1 == side2 && side1 == side3) {
        triangleType = "equilateral";
    } else if (side1 == side2 || side1 == side3) {
        triangleType = "isosceles";
    } else {
        triangleType = "scalene";
    }
    return console.log(
        `Sides [${side1}, ${side2}, ${side3}] form a Triangle of Type: ${triangleType}`
    );
 }

 // Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAverage = usage / day;
    let projectedAverage = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAverage;
    let statusMessage;

    console.log(`${day} day(s) used, ${periodLength - day} day(s) remaining`);
    console.log(`Average projected use: ${planLimit / periodLength} GB/day`);

    if (currentAverage > projectedAverage) {
        statusMessage = "Exceeding";
    } else if (currentAverage < projectedAverage) {
        statusMessage = "Under";
    } else {
        statusMessage = "At";
    }

    console.log(`You are currently ${statusMessage} your average daily use (${currentAverage} GB/day),
    continuing this usage trend, you will eventually use ${planLimit - projectedUsage}
    GB from your data limit. To ensure that you stay below your limit,
    do not exeed more than ${remainingData / remainingDays} GB/day`);
}