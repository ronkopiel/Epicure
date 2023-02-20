
    export interface IChef {
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

    export interface IRestaurant {
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

    export interface IDish {
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
    export interface IChefsState {
        value: IChef[]
    }
    export interface IRestaurantState {
        value: IRestaurant[]
        changedValue: IRestaurant[]
      }
    export interface IDishesState {
        value: IDish[]
    }
    export interface IRootObject {
        chefs: IChefsState;
        restaurants: IRestaurantState;
        dishes: IDishesState;
    }
