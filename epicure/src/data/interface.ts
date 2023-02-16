
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
        openingHour: number;
        closingHour: number;
        address: string;
        rating: number;
        chefID: number;
        viewCount: number;
        chefName: string;
        signatureDishID:number;
        isNew: boolean;
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
    export interface chefsState {
        value: Chef[]
    }
    export interface restaurantState {
        value: Restaurant[]
        changedValue: Restaurant[]
      }
    export interface dishesState {
        value: Dish[]
    }
    export interface RootObject {
        chefs: chefsState;
        restaurants: restaurantState;
        dishes: dishesState;
    }
