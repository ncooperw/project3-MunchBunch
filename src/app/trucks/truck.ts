export class Truck {
    _id?: string;
    name: string;
    imgLink: string;
    cuisine: string;
    description: string;
    menuLink: string;
    price: string;
    location: {
        latitude: number;
        longitude: number
    }
};