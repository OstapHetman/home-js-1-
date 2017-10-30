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
    sortCars: this.data.sort(function(a, b) {
        let brandA = a.firmName.toUpperCase();
        let brandB = b.firmName.toUpperCase();
        let comparison = 0;

        if (brandA > brandB) {
            comparison = 1;
        } else if (brandA < brandB) {
            comparison = -1;
        }
        return comparison;
    })
};

console.log(cars);