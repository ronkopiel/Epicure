
    export interface IChef {
        firstName: string;
        lastName: string;
        portrait: string;
        isChefOfTheWeek: boolean;
        isNewChef: boolean;
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
        signatureDishID:number;
        isNewRestaurant: boolean;
        dishes:number[];
    }

    export interface IDish {
        resturantID: number;
        name: string;
        ingredients: string;
        price: number;
        image: string;
        isSpicy: boolean;
        isVegan: boolean;
        isVegitarian: boolean;
        id: number;
        service: string;
    }
    export interface IChefsState {
        loading: boolean
        error: boolean
        value: IChef[]
        changedValue: IChef[]
    }
    export interface IRestaurantState {
        value: IRestaurant[]
        changedValue: IRestaurant[]
        chosenRestaurant: IRestaurant
      }
    export interface IDishesState {
        initialDishes: IDish[]
        restaurantDishes: IDish[]
        serviceDishes: IDish[]
        restaurantDishesIDs: number[]
    }
    export interface IRootObject {
        chefs: IChefsState;
        restaurants: IRestaurantState;
        dishes: IDishesState;
    }
