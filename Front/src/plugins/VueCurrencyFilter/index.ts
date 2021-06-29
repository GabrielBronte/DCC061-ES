import Vue from "vue";
import VueCurrencyFilter from "vue-currency-filter";

Vue.use(VueCurrencyFilter, [
  {
    name: "currency_without_decimal",
    symbol: "",
    thousandsSeparator: ".",
    symbolPosition: "front",
    symbolSpacing: false
  },
  {
    // default name 'currency_2'
    name: "currency",
    symbol: "R$",
    thousandsSeparator: ".",
    fractionCount: 2,
    fractionSeparator: ",",
    symbolPosition: "front",
    symbolSpacing: false
  }
]);
