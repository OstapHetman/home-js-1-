// Lottery

// let minNumber = 70,
//     maxNumber = 100,
//     lottery = function() { return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber; }
// console.log(lottery());

let cars = {
    data: [{
            firmName: "Toyota",
            modelName: "Camry",
            engine: 1.2,
            age: 2012
        },
        {
            firmName: "Mercedes",
            modelName: "GLE",
            engine: 2.0,
            age: 2017
        },
        {
            firmName: "Nissan",
            modelName: "Quashqai",
            engine: 1.6,
            age: 2016
        },
        {
            firmName: "ZAZ",
            modelName: "Forza",
            engine: 1.1,
            age: 2008
        },
        {
            firmName: "Opel",
            modelName: "Astra",
            engine: 1.6,
            age: 2011
        },
        {
            firmName: "Astro Martin",
            modelName: "DB7",
            engine: 3.0,
            age: 2011
        },
    ],
    checkDate: function checkAge() {
        let reg = Date.parse(/\d{2}[\/|\.|\-]\d{2}\d{4}/);
        return arguments[3].match(reg);
    },
    addNewCar: function(firmName, modelName, engine) {
        this.data.push({
            firmName: firmName,
            modelName: modelName,
            engine: engine,
            age: arguments[3]
        });
    }
};
cars.addNewCar("Peugeot", "308", 2.0, 10 / 03 / 2017);
console.log(cars);