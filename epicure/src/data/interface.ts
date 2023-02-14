declare module namespace {

    export interface Chef {
        firstName: string;
        lastName: string;
        portrait: string;
        isChefOfTheWeek: boolean;
        isNew: boolean;
        viewCount: number;
        resturants: number[];
        id: number;
        chefDescription: string
    }

    export interface Restaurant {
        id: number;
        name: string;
        img: string;
        hours: string;
        address: string;
        rating: number;
        chefID: number;
        viewCount: number;
        chefName: string;
        signatureDishID:number;
    }

    export interface Dish {
        resturantID: number;
        name: string;
        ingredients: string;
        price: any;
        image: string;
        isSpicy: boolean;
        isVegan: boolean;
        isVegitarian: boolean;
        id: number;
    }

    export interface RootObject {
        chefs: Chef[];
        restaurants: Restaurant[];
        dishes: Dish[];
    }

}
export default namespace