/*
create an object called library.
properties: name, location, founded_year
head_librarian:<object> full_name, years_experience
building:object<> architect, floors, material
<number as property<key>>: total_books borrowed that year (e.g. 2023, 2024)
announce:function that when called prints information of the library as an alert
*/

const library ={
    name: "Get your books",
    location :"Kisimayu",
    founded_year: '1895',
    head_librarian:{
        full_name: "Munchkin Xoxo",
        years_experience: 10
    },
    building:{
        architect: "John Doe",
        floors: 3,
        material: "Concrete"
    },
    [2023]: 15000, // total_books borrowed in 2023
    [2024]: 20000, // total_books borrowed in 2024
    announce: function(){
        alert(
            `Library Info:
Name: ${this.name}
Location: ${this.location}
Founded Year: ${this.founded_year}

Head Librarian:
  Full Name: ${this.head_librarian.full_name}
  Years of Experience: ${this.head_librarian.years_experience}

Building:
  Architect: ${this.building.architect}
  Floors: ${this.building.floors}
  Material: ${this.building.material}

Total Books Borrowed:
  2023: ${this[2023]}
  2024: ${this[2024]}`
        );
    }

}