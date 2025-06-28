let colours = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange"];
console.log("Available colours:", colours);
console.log("Number of colours:", colours.length);
console.log("First colour:", colours[0]);

let users = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 25, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "Chicago" },
    { name: "David", age: 40, city: "Houston" },
    { name: "Eve", age: 22, city: "Seattle" },
    { name: "Frank", age: 29, city: "Miami" }
];

console.log("Users: ", users);

// Modification Methods

users.push({ name: "Diana", age: 28, city: "Miami" });
console.log("Updated users list:", users);

users.pop();
console.log("After removing last user:", users);

users.shift();
console.log("After removing first user:", users);

users.unshift({ name: "Eve", age: 22, city: "Seattle" });
console.log("After adding a new first user:", users);

users.splice(2, 1);
console.log("After removing user at index 1:", users);


// Searching & Filtering Methods

let senior = users.find(user => user.age > 30);
console.log("First user older than 30:", senior);

let under30 = users.filter(user => user.age <= 30);
console.log("Users under 30:", under30);

let hasCity = users.some(user => user.city === "Miami");
console.log("Is there a user from Miami?", hasCity);

let allOver20 = users.every(user => user.age > 20);
console.log("Are all users over 20?", allOver20);


// Transformation Methods
let names = users.map(user => user.name);
console.log("User names:", names);

let totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("Total age of all users:", totalAge);


// Utility Methods
let firstTwo = users.slice(0, 2);
console.log("First two users:", firstTwo);

let sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log("Users sorted by age:", sortedByAge);


// Testimonials Array
let testimonials = [
    {text: "Amazing landscapes!", author: "Lola M.", date: "2024-01-15"},
    {text: "Breathtaking views!", author: "John D.", date: "2024-02-20"},
    {text: "A photographer's dream!", author: "Sarah K.", date: "2024-03-05"},
    {text: "Simply stunning!", author: "Mike T.", date: "2024-04-10"},
    {text: "Nature at its best!", author: "Emma R.", date: "2024-05-25"}
];

// starting point for the current testimonial index
let currenIndex = 0;

// Function to display the current testimonial
function displayTestimonial(index) {
    document.getElementById("testimonial-text").textContent = testimonials[index].text;
    document.getElementById("testimonial-author").textContent = testimonials[index].author;
    document.getElementById("testimonial-date").textContent = testimonials[index].date;
}

// Initial display of the first testimonial
displayTestimonial(currenIndex);

function showNext() {
    currenIndex = (currenIndex + 1) % testimonials.length;
    displayTestimonial(currenIndex);
}

function showPrevious() {
    currenIndex = (currenIndex - 1 + testimonials.length) % testimonials.length;
    displayTestimonial(currenIndex);
}