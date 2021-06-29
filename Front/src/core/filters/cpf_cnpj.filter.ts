import Vue from "vue";

const CpfCnpjFilter = {
    install(Vue: any, options: any) {
      Vue.filter('CpfCnpj', (valor: any) => {
        if (valor) {
          valor = typeof valor != 'string' ? valor.toString() : valor;
          
          if (valor.length == 14) {
            valor = valor.padStart(14, '0');
            valor = valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
          } else if (valor.length == 11) {
            valor = valor.padStart(11, '0');
            valor = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
          } else {
              throw new TypeError("Informe um CPF/CNPJ válido.")
          }
        }
        return valor;
      });
    },
  };
  Vue.use(CpfCnpjFilter);