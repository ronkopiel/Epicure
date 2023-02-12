declare module namespace {

    export interface Chef {
        name: string;
        portrait: string;
        isChefOfTheWeek: boolean;
        isNew: boolean;
        viewCount: string;
        resturants: number[];
        id: number;
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
    }

    export interface Dish {
        resturantID: number;
        name: string;
        ingredients: string;
        price: any;
        image: string;
        isSignatueDish: boolean;
        isSpicy: boolean;
        isVegan: any;
        isVegitarian: any;
    }

    export interface RootObject {
        chefs: Chef[];
        restaurants: Restaurant[];
        dishes: Dish[];
    }

}
export default namespace