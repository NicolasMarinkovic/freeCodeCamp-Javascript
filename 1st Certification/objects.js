/*                                                            OBJECTS                                                              */
//Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};


const myObjects = {                                              
    prop1: "val1",                                             
    prop2: "val2"                                             
};                                                               

const prop1val = myObjects.prop1; // se puede cambiar el valor asi myObj.prop1 = "value";
const prop2val = myObjects.prop2; 
                                                                 
                                                                
// Accesing objects with bracket notations

const myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};

myObj["Space Name"]; // se puede cambiar el valor asi myObj["Space Name"] = "Juan";
myObj['More Space']; // se pueden agregar objectos de la misma forma myObj["Nombre de Pila"] = "Juan";
delete myObj["NoSpace"]; // Delete propertie NoSpace

// Accesing objects with variables

const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

const someObj = {
    propName: "John"
};

function propPrefix(str) {
    const s = "prop";
    someObj["propName"] = "Marcos";
    someObj["propAge"] = 21;
    delete someObj["propAge"];
    return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);

//.hasOwnProperty() checks if the property of a given object exists or not.

const myObject = {
    top: "hat",
    bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

// Here's an example of a complex data structure:

const ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};

ourStorage.cabinet["top drawer"].folder2; //asi se accede a los objetos dentro de objetos
ourStorage.desk.drawer;

// nested objectos in array
const ourPets = [{
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];

ourPets[0].names[1]; //asi se accede al array dentro del objeto dentro del array.
ourPets[1].names[0];

//Exercise
// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    } else if (prop === 'tracks' && records[id].hasOwnProperty(prop) === false) {
        records[id][prop] = [value]; //porque se envia un string
    } else if (prop === 'tracks' && value !== "") {
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop];
    }

    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
