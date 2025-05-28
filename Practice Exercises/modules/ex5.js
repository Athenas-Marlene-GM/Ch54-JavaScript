const arraySteps = () =>{

    let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
    console.log(people);
    people.splice(people.indexOf("Dani"),1);
    console.log(people);
    people.splice(people.indexOf("Juan"),1);
    console.log(people);
    people.unshift(people.splice(people.indexOf("Luis"),1)[0]);
    console.log(people);
    people.push("Athenas");
    console.log(people);
    for(const person of people){
        console.log(person);
        if(person === "Maria") break;
    }
    console.log(`El índice de Maria es ${people.indexOf("Maria")}`);
    return people;
}

export{arraySteps};