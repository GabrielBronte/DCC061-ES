import { KeyValue } from './KeyValue';
export class Year {
    public list: KeyValue[] = []

    constructor(year = 2020, ascending = true) {
        const startYear = year;
        const currentYear = new Date().getFullYear();

        this.list = [];
        for (let index = startYear; index <= currentYear; index++) {
            this.list.push(new KeyValue(index, `${index}`));
        }
        if (!ascending) {
            this.list.reverse();
        }
    }
}