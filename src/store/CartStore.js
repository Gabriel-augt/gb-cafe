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
          },
        },
        {
          espresso: {
            name: "Espresso",
            photo: "/espresso.png",
            priceBRL: "12,00",
            priceUSD: "2,12",
            priceEUR: "1,95",
          },
        },
        {
          hazelnutLatte: {
            name: "Hazelnut Latte",
            photo: "/hazelnut-latte.png",
            priceBRL: "18,00",
            priceUSD: "3,18",
            priceEUR: "2,92",
          },
        },
        {
          cappucino: {
            name: "Cappucino",
            photo: "/cappucino.png",
            priceBRL: "12,00",
            priceUSD: "2,12",
            priceEUR: "1,95",
          },
        },
        {
          coffeIceCream: {
            name: "Coffe Ice Cream",
            photo: "/coffe-ice-cream.png",
            priceBRL: "15,00",
            priceUSD: "2,65",
            priceEUR: "2,44",
          },
        },
        {
          nutellaHot: {
            name: "Nutella Hot",
            photo: "/nutella-hot.png",
            priceBRL: "18,00",
            priceUSD: "3,18",
            priceEUR: "2,92",
          },
        },
        {
          macchiato: {
            name: "Macchiato",
            photo: "/macchiato.png",
            priceBRL: "10,00",
            priceUSD: "1,77",
            priceEUR: "1,62",
          },
        },
        {
          mocaccino: {
            name: "Mocaccino",
            photo: "/mocaccino.png",
            priceBRL: "12,00",
            priceUSD: "2,12",
            priceEUR: "1,95",
          },
        },
        {
          chaiLatte: {
            name: "Chai Latte",
            photo: "/chai-latte.png",
            priceBRL: "14,00",
            priceUSD: "2,48",
            priceEUR: "2,27",
          },
        },
      ],

      cafesAdded: [],
    };
  },

  actions: {

    addCoffee(coffee) {

      this.listOfCafes.forEach((cafes) => {

        if (Object.keys(cafes) == coffee) {

          this.cafesAdded.push(cafes[coffee]);

        }

      });

    },

    removeCoffee(index) {

      this.cafesAdded.splice(index, 1);

    },

  },

  getters: {},
});
