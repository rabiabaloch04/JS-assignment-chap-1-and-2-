console.log("Rabia Baloch");
// Define a variable for miles
const miles = 130;

// Convert miles to kilometers
const kilometers = miles * 1.60934;

// Log the result in the specified format
console.log(`The distance of ${kilometers.toFixed(4)} kms is equal to ${miles} miles.`);


// Set values for height in inches and weight in pounds
const heightInInches = 70; // for example, 70 inches
const weightInPounds = 150; // for example, 150 pounds

// Convert height from inches to centimeters (1 inch = 2.54 cm)
const heightInCentimeters = heightInInches * 2.54;

// Convert weight from pounds to kilograms (1 pound = 0.453592 kilograms)
const weightInKilos = weightInPounds * 0.453592;

// Calculate BMI (weight in kilos divided by squared height in meters)
const heightInMeters = heightInCentimeters / 100; // converting cm to meters
const bmi = weightInKilos / (heightInMeters ** 2);

// Output the results to the console
console.log(`Height: ${heightInCentimeters} cm`);
console.log(`Weight: ${weightInKilos} kg`);
console.log(`BMI: ${bmi.toFixed(2)}`);
