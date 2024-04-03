
const teamMemberOne = [
  {
    name: "Kenula",
    surname: "Silva",
    age:  21 ,
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
    favoriteVideoGame:'Horizon zero down',
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
  return mediaAge
}
const printMedia = media(teamMemberOne)
console.log(printMedia)

const NoLOL = teamMemberOne.filter(teamMemberOne => teamMemberOne.favoriteVideoGame === "LOL")
console.log(NoLOL);

const NoName = teamMemberOne.filter(teamMemberOne => teamMemberOne.Name === "Eros")
console.log(NoName)

// funzione per trovare chi  ha un animale domestico//

  function puppy(array) {
   array.filter((array) => {
      if (array.petName !== '') {
         console.log(array.name);
      }

 teamMemberOne.sort((a, b)=>{
 const fullNameA = `${a.surname} ${b.surname}`;
 const fullNameB = `${a.name} ${b.name}`;
 return fullNameA.localeCompare(fullNameB)
})
console.log("Team alfaphetical Order : ")
teamMemberOne.forEach(member => {
  console.log(`${member.surname} ${member.name}`)
})

const teamorderByAge = teamMemberOne.sort((a, b) => a.age - b.age);
  teamMemberOne.forEach(member => {
    console.log(`${member.name} ${member.age}`);
  });
