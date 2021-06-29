import moment from "moment";

export class DataConversion {
    static parseDate(date: any): string {

        if (date == undefined || date.length != 10) {
            return "";
        }

        if (!date || moment(date, 'YYYY-MM-DD', true).isValid()) {
            return "";
        }

        const [day, month, year] = date.toString().split("/");

        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }

    static formatDate(date: any) {
        if (!moment(date).isValid()) {
            return "";
        }
        return moment(date).format("DD/MM/YYYY");
    }

    static formatDateTime(date: any) {
        if (!moment(date).isValid()) {
            return "";
        }
        return moment(date).format("DD/MM/YYYY HH:mm");
    }

    static addHourAndMinute(date: string, time: any) {
        if (time && time != "") {
            const timeSplided = time.split(":");
            const dateConvert = moment(date).toDate();
            dateConvert.setHours(timeSplided[0]);
            dateConvert.setMinutes(timeSplided[1]);
            return moment(dateConvert)
                .utc(true)
                .format();
        }
        return new Date();
    }
}