import Vue from "vue";
import Vuetify from "vuetify";
import * as variables from "@/assets/styles/_variables.scss";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = new Vuetify({
  iconfont: "md",
  theme: {
    themes: {
      light: {
        primary: variables.primary,
        secondary: variables.secondary,
        accent: variables.accent,
        error: variables.error,
        warning: variables.warning,
        info: variables.info,
        success: variables.success,
        blue1: variables.blue1,
        blue2: variables.blue2,
        blue3: variables.blue3,
        blue4: variables.blue4,
        darkblue: variables.darkblue,
        greyblue: variables.greyblue,
        gradblue: variables.gradblue,
        grey1: variables.grey1,
        grey2: variables.grey2
      },
      dark: {
        primary: variables.primary,
        secondary: variables.secondary,
        accent: variables.accent,
        error: variables.error,
        warning: variables.warning,
        info: variables.info,
        success: variables.success,
        blue1: variables.blue1,
        blue2: variables.blue2,
        blue3: variables.blue3,
        darkblue: variables.darkblue,
        greyblue: variables.greyblue,
        gradblue: variables.gradblue,
        grey1: variables.grey1,
        grey2: variables.grey2
      }
    }
  }
});

Vue.use(Vuetify);

export default vuetify;
