import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      listOfCafes: [
        {
          vanillaLatte: {
            name: "Vanilla Latte",
            photo: "/vanilla-latte.png",
            priceBRL: "15,00",
            priceUSD: "2,65",
            priceEUR: "2,44",
            amount: 1,
          },
        },
        {
          espresso: {
            name: "Espresso",
            photo: "/espresso.png",
            priceBRL: "12,00",
            priceUSD: "2,12",
            priceEUR: "1,95",
            amount: 1,
          },
        },
        {
          hazelnutLatte: {
            name: "Hazelnut Latte",
            photo: "/hazelnut-latte.png",
            priceBRL: "18,00",
            priceUSD: "3,18",
            priceEUR: "2,92",
            amount: 1,
          },
        },
        {
          cappucino: {
            name: "Cappucino",
            photo: "/cappucino.png",
            priceBRL: "12,00",
            priceUSD: "2,12",
            priceEUR: "1,95",
            amount: 1,
          },
        },
        {
          coffeIceCream: {
            name: "Coffe Ice Cream",
            photo: "/coffe-ice-cream.png",
            priceBRL: "15,00",
            priceUSD: "2,65",
            priceEUR: "2,44",
            amount: 1,
          },
        },
        {
          nutellaHot: {
            name: "Nutella Hot",
            photo: "/nutella-hot.png",
            priceBRL: "18,00",
            priceUSD: "3,18",
            priceEUR: "2,92",
            amount: 1,
          },
        },
        {
          macchiato: {
            name: "Macchiato",
            photo: "/macchiato.png",
            priceBRL: "10,00",
            priceUSD: "1,77",
            priceEUR: "1,62",
            amount: 1,
          },
        },
        {
          mocaccino: {
            name: "Mocaccino",
            photo: "/mocaccino.png",
            priceBRL: "12,00",
            priceUSD: "2,12",
            priceEUR: "1,95",
            amount: 1,
          },
        },
        {
          chaiLatte: {
            name: "Chai Latte",
            photo: "/chai-latte.png",
            priceBRL: "14,00",
            priceUSD: "2,48",
            priceEUR: "2,27",
            amount: 1,
          },
        },
      ],

      cafesAdded: [],

      itemInCart: false,

      hideLangSwitcher: false,

      totalValueCoffee: 0,
    };
  },

  actions: {

    addCoffee(coffee) {

      this.listOfCafes.forEach((cafes) => {

        if (Object.keys(cafes) == coffee) {

          this.cafesAdded.push(cafes[coffee]);
          //console.log(cafes[coffee].priceBRL)
        }

      });

      this.isEmpty()

    },

    removeCoffee(index) {

      this.cafesAdded.splice(index, 1);

      this.isEmpty();

    },

    isEmpty () {

      this.cafesAdded.length > 0 ? this.itemInCart = true : this.itemInCart = false;

    },

    increment (coffee) {

      coffee.amount++

    },

    decrement (coffee, index) {
      
      if (coffee.amount <= 1) {

        this.removeCoffee(index);

      } else {

        coffee.amount--;

      }

    },

  },

  getters: {},
});
