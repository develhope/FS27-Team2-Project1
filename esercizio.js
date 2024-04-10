const teamMemberOne = [
  {
    name: "Kenula",
    surname: "Silva",
    age: 21,
    city: "Roma",
    hobby: "Video Giochi",
    favoriteFood: "Pasta",
    favoriteVideoGame: "Tom Raider",
    favoriteFilm: "Imaginary",
    favoriteBook: "",
    petName: "Thor",
  },
  {
    name: "Eros",
    surname: "Greco",
    age: 20,
    city: "Verona",
    hobby: "Botanica",
    favoriteFood: "Patate a fette",
    favoriteVideoGame: "Kindom Hearts",
    favoriteFilm: "Godzilla King of the Moster",
    favoriteBook: "Solo Leveling",
    petName: "Pongo",
  },
  {
    name: "Antonio",
    surname: "Valletta",
    age: 30,
    city: "Irsina",
    hobby: "Calcio",
    favoriteFood: "sushi",
    favoriteVideoGame: "God of War",
    favoriteFilm: "shutter island",
    favoriteBook: "",
    petName: "",
  },
  {
    name: "Silas",
    surname: "Bonsu",
    age: 25,
    city: 'Correggio',
    hobby: 'Atletica',
    favoriteFood: 'pizza',
    favoriteVideoGame: 'Horizon zero down',
    favoriteFilm: 'Star wars',
    favoriteBook: 'Il signore degli anelli',
    petName: 'Bethoven',
  },
];

function media(teamMemberOne) {
  let somma = 0;
  for (let i = 0; i < teamMemberOne.length; i++) {
    somma += teamMemberOne[i].age;
  }
  const mediaAge = somma / teamMemberOne.length;
  return mediaAge;
}
const printMedia = media(teamMemberOne);
console.log("Media dell'età dei membri del team:", printMedia);

const NoLOL = teamMemberOne.filter(member => member.favoriteVideoGame !== "LOL");
if (NoLOL.length === 0) {
  console.log("Nessun membro del team gioca a LOL.");
} else {
  console.log("Membri del team che non giocano a LOL:", NoLOL);
}

const NoName = teamMemberOne.filter(member => member.name === "Eros");
console.log("Membro del team con il nome Eros:", NoName);

function puppy(array) {
  const membersWithPets = array.filter(member => member.petName !== '');
  console.log("Membri del team con un animale domestico:", membersWithPets.map(member => member.name));
}
puppy(teamMemberOne);

teamMemberOne.sort((a, b) => {
  const fullNameA = `${a.surname} ${a.name}`;
  const fullNameB = `${b.surname} ${b.name}`;
  return fullNameA.localeCompare(fullNameB);
});
console.log("Team in ordine alfabetico:");
teamMemberOne.forEach(member => {
  console.log(`${member.surname} ${member.name}`);
});

const teamOrderByAge = teamMemberOne.sort((a, b) => a.age - b.age);
console.log("Team ordinato per età:");
teamOrderByAge.forEach(member => {
  console.log(`${member.name} ${member.age}`);
});
