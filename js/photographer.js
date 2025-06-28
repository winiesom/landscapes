
// ✅ Data source (could also come from an API)
const photographerData = [
  { name: "Kemi Yusuf", experience: 5, specialty: "Deserts", image: "images/photographer3.png" },
  { name: "Emeka Opara", experience: 10, specialty: "Nature", image: "images/photographer1.png" },
  { name: "Jane Smith", experience: 8, specialty: "Mountains", image: "images/photographer2.png" },
];

// ✅ ES6 Class to model a Photographer
class Photographer {
  constructor(name, experience, specialty, image) {
    this.name = name;
    this.experience = experience;
    this.specialty = specialty;
    this.image = image;
  }

  describe = () => `${this.name} has ${this.experience} years of experience in ${this.specialty} photography.`;
}

// ✅ Convert JSON into class instances
let photographers = photographerData.map(p => new Photographer(p.name, p.experience, p.specialty, p.image));

// ✅ Render function
const renderPhotographers = (arr) => {
  const container = document.querySelector(".photographer-list");
  container.innerHTML = "";

  arr.forEach(p => {
    const article = document.createElement("article");
    article.className = "photographer";

    article.innerHTML = `
   
      <img src="${p.image}" alt="${p.name}" width="200px" height="250px" />
      <h2>${p.name}</h2>
      <p><strong>Experience:</strong> ${p.experience} years</p>
      <p><strong>Specialty:</strong> ${p.specialty}</p>
      <p>${p.describe()}</p>
   
    `;

    container.appendChild(article);
  });
};

// ✅ Initial load
renderPhotographers(photographers);

// ✅ Add search feature
const searchByName = (name) => {
  const filtered = photographers.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  renderPhotographers(filtered);
};

// ✅ Add sort by experience
const sortByExperience = () => {
  photographers.sort((a, b) => b.experience - a.experience);
  renderPhotographers(photographers);
};

// ✅ Add a new photographer (prompt version)
const addPhotographer = () => {
  const name = prompt("Photographer name:");
  const experience = parseInt(prompt("Years of experience:"));
  const specialty = prompt("Specialty:");
  const image = prompt("Image path:");

  if (!name || isNaN(experience) || !specialty || !image) return alert("Invalid input");

  const newPhotographer = new Photographer(name, experience, specialty, image);
  photographers.push(newPhotographer);
  renderPhotographers(photographers);
};
