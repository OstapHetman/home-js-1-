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

    addNewCars: function() {
        this.data.push({
            firmName: "Peugeot",
            modelName: "308",
            engine: 2.0,
            age: 2013
        });
    }
};
cars.addNewCars();
console.log(cars);