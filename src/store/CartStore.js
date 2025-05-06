import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      listOfCafes: [
        {
          vanillaLatte: {
            name: "Vanilla Latte",
            photo: "/vanilla-latte.png",
            priceBRL: 15.00,
            priceUSD: 2.65,
            priceEUR: 2.44,
            amount: 0,
            totalValueCoffee: 0,
          },
        },
        {
          espresso: {
            name: "Espresso",
            photo: "/espresso.png",
            priceBRL: 12.00,
            priceUSD: 2.12,
            priceEUR: 1.95,
            amount: 0,
            totalValueCoffee: 0,
          },
        },
        {
          hazelnutLatte: {
            name: "Hazelnut Latte",
            photo: "/hazelnut-latte.png",
            priceBRL: 18.00,
            priceUSD: 3.18,
            priceEUR: 2.92,
            amount: 0,
            totalValueCoffee: 0,
          },
        },
        {
          cappucino: {
            name: "Cappucino",
            photo: "/cappucino.png",
            priceBRL: 12.00,
            priceUSD: 2.12,
            priceEUR: 1.95,
            amount: 0,
            totalValueCoffee: 0,
          },
        },
        {
          coffeIceCream: {
            name: "Coffe Ice Cream",
            photo: "/coffe-ice-cream.png",
            priceBRL: 15.00,
            priceUSD: 2.65,
            priceEUR: 2.44,
            amount: 0,
            totalValueCoffee: 0,
          },
        },
        {
          nutellaHot: {
            name: "Nutella Hot",
            photo: "/nutella-hot.png",
            priceBRL: 18.00,
            priceUSD: 3.18,
            priceEUR: 2.92,
            amount: 0,
            totalValueCoffee: 0,
          },
        },
        {
          macchiato: {
            name: "Macchiato",
            photo: "/macchiato.png",
            priceBRL: 10.00,
            priceUSD: 1.77,
            priceEUR: 1.62,
            amount: 0,
            totalValueCoffee: 0,
          },
        },
        {
          mocaccino: {
            name: "Mocaccino",
            photo: "/mocaccino.png",
            priceBRL: 12.00,
            priceUSD: 2.12,
            priceEUR: 1.95,
            amount: 0,
            totalValueCoffee: 0,
          },
        },
        {
          chaiLatte: {
            name: "Chai Latte",
            photo: "/chai-latte.png",
            priceBRL: 14.00,
            priceUSD: 2.48,
            priceEUR: 2.27,
            amount: 0,
            totalValueCoffee: 0,
          },
        },
      ],

      cafesAdded: [],

      itemInCart: false,

      modalWarning: false,

      hideLangSwitcher: false,

      totalAmount: 0,

      mainLanguage: 'pt_BR',
    };
  },

  actions: {

    addCoffee(coffee) {

      this.listOfCafes.forEach((cafes) => {

        if (Object.keys(cafes) == coffee && cafes[coffee].amount == 0) {

          this.cafesAdded.push(cafes[coffee]);

          switch (this.mainLanguage) {
            
            case 'pt_BR':
              this.increment(cafes[coffee]);
              break;
            
            case 'en':
              this.increment(cafes[coffee]);
              break;
              
            case 'eu':
              this.increment(cafes[coffee]);
              break;
            
            case 'es':
              this.increment(cafes[coffee]);
              break;

          }
        }
      });

      this.isEmpty()
      this.total()
    },

    total () {

      if (this.cafesAdded.length == 0) {
        this.totalAmount = 0;
      }

      switch (this.mainLanguage) {

        case 'pt_BR':
          this.cafesAdded.reduce((tot, qtd) => {
            return this.totalAmount = tot + qtd.priceBRL * qtd.amount;
          }, 0);
          break;

        case 'en':
          this.cafesAdded.reduce((tot, qtd) => {
            return this.totalAmount = tot + qtd.priceUSD * qtd.amount;
          }, 0);
          break;

        case 'eu':
          this.cafesAdded.reduce((tot, qtd) => {
            return this.totalAmount = tot + qtd.priceEUR * qtd.amount;
          }, 0);
          break;

        case 'es':
          this.cafesAdded.reduce((tot, qtd) => {
            return this.totalAmount = tot + qtd.priceEUR * qtd.amount;
          }, 0);
          break;

      }

    },

    removeCoffee(coffee, index) {

      coffee.amount = 0;

      coffee.totalValueCoffee = 0;

      this.cafesAdded.splice(index, 1);

      this.isEmpty();

      this.total()

    },

    isEmpty () {

      this.cafesAdded.length > 0 ? this.itemInCart = true : this.itemInCart = false;

    },

    increment (coffee) {

      coffee.amount++

      switch (this.mainLanguage) {

        case 'pt_BR':
          coffee.totalValueCoffee = coffee.priceBRL * coffee.amount;
          this.total();
          break;

        case 'en':
          coffee.totalValueCoffee = coffee.priceUSD * coffee.amount;
          this.total();
          break;

        case 'eu':
          coffee.totalValueCoffee = coffee.priceEUR * coffee.amount;
          this.total();
          break;

        case 'es':
          coffee.totalValueCoffee = coffee.priceEUR * coffee.amount;
          this.total();
          break;

      }
    },

    decrement (coffee, index) {
      
      if (coffee.amount <= 1) {

        this.removeCoffee(coffee, index);

      } else {

        coffee.amount--;
        
      }

      switch (this.mainLanguage) {

        case 'pt_BR':
          coffee.totalValueCoffee = coffee.totalValueCoffee - coffee.priceBRL;
          this.total();
          break;

        case 'en':
          coffee.totalValueCoffee = coffee.totalValueCoffee - coffee.priceUSD;
          this.total();
          break;

        case 'eu':
          coffee.totalValueCoffee = coffee.totalValueCoffee - coffee.priceEUR;
          this.total();
          break;

        case 'es':
          coffee.totalValueCoffee = coffee.totalValueCoffee - coffee.priceEUR;
          this.total();
          break;

      }

    },

  },

  getters: {

    localCurrency: (state) => {

      if (state.mainLanguage != 'en') {

        return state.totalAmount.toFixed(2).replace('.', ',');

      } else {

        return state.totalAmount.toFixed(2);

      }

    },

    formatCoffeeAmount: (state) => {

      if (state.mainLanguage != 'en') {

        return (valueCoffee) => valueCoffee.toFixed(2).replace('.', ',');

      } else {

        return (valueCoffee) => valueCoffee.toFixed(2);

      }

    },

    finalPrice: (state) => {

      if (state.totalAmount != 0) {

        switch (state.mainLanguage) {

          case 'pt_BR':
            return (state.totalAmount + 10).toFixed(2).replace('.', ',');
  
          case 'en':
            return (state.totalAmount + 1.77).toFixed(2);
  
          case 'eu':
            return (state.totalAmount + 1.62).toFixed(2).replace('.', ',');
  
          case 'es':
            return (state.totalAmount + 1.62).toFixed(2).replace('.', ',');
        }

      }

    },

  },
});
