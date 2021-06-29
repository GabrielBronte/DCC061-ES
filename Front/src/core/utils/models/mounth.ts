import { KeyValue } from './KeyValue';
export class MounthYear{
    private year?: string;

    public list:KeyValue[] = []

    constructor(year?: any){
        this.year = year;
        this.list = [        
        new KeyValue(1,`Janeiro/${this.year}`),
        new KeyValue(2,`Fevereiro/${this.year}`),
        new KeyValue(3,`Março/${this.year}`),
        new KeyValue(4,`Abril/${this.year}`),
        new KeyValue(5,`Maio/${this.year}`),
        new KeyValue(6,`Junho/${this.year}`),
        new KeyValue(7,`Julho/${this.year}`),
        new KeyValue(8,`Agosto/${this.year}`),
        new KeyValue(9,`Setembro/${this.year}`),
        new KeyValue(10,`Outubro/${this.year}`),
        new KeyValue(11,`Novembro/${this.year}`),
        new KeyValue(12,`Dezembro/${this.year}`)
        ]
    }

}