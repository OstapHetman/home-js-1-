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
    ],

    addNewCar: function(firmName, modelName, engine, age) {
        this.data.push({
            firmName: firmName,
            modelName: modelName,
            engine: engine,
            age: age
        });
    }
};
cars.addNewCar("Peugeot", "308", 2.0, 2013);
console.log(cars);