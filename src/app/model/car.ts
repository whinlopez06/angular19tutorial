export class Car {
    carId: number;
    brand: string;
    model: string;
    year: number;
    color: string;
    dailyRate?: number; // question mark if optional
    carImage: string;
    regNo: string;
    // normally use class to declare variable and if you will bind it to the form
    constructor() {
        this.carId = 0;
        this.brand = "";
        this.model = "";
        this.year = 0;
        this.color = "";
        //this.dailyRate = 0;   // if optional then no need to initialize
        this.carImage = "";
        this.regNo = "";
    }
}

// storing data not using data in template data use interface. Interface no need to initialize the properties
export interface IcarList {
    carId: number,
    brand: string,
    model: string,
    year: number,
    color: string,
    dailyRate: number,
    carImage: string,
    regNo: string
}
