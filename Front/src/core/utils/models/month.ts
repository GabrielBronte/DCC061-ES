import { KeyValue } from './KeyValue';
export class Month{
    public list:KeyValue[] = []

    constructor(year?: any){
        this.list = [        
            new KeyValue(1,`Janeiro`),
            new KeyValue(2,`Fevereiro`),
            new KeyValue(3,`Março`),
            new KeyValue(4,`Abril`),
            new KeyValue(5,`Maio`),
            new KeyValue(6,`Junho`),
            new KeyValue(7,`Julho`),
            new KeyValue(8,`Agosto`),
            new KeyValue(9,`Setembro`),
            new KeyValue(10,`Outubro`),
            new KeyValue(11,`Novembro`),
            new KeyValue(12,`Dezembro`)
        ]
    }
}