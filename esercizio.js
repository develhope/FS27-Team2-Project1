const teamMemberOne = [
  {
    name: "Kenula",
    surname: "Silva",
    age:  "20",
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
    surname:"Valletta", 
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
    name: 'Silas',
    surname: 'Bonsu',
    age: 25,
    city: 'Correggio',
    hobby: 'Atletica',
    favoriteFood: 'pizza',
    favoriteVideoGame:'Horizon zero down',
    favoriteFilm: 'Star wars',
    favoriteBook: 'Il signore degli anelli',
    petName: 'Bethoven',
   },
  ]

teamMemberOne.sort((a, b)=>{
 const fullNameA = `${a.surname} ${b.surname}`;
 const fullNameB = `${a.name} ${b.name}`;
 return fullNameA.localeCompare(fullNameB)
})
console.log("Team alfaphetical Order : ")
teamMemberOne.forEach(member => {
  console.log(`${member.surname} ${member.name}`)
})
 
 