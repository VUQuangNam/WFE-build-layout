
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyConfig {
    constructor() { }

    pipe = (price) => {
        const formater = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        });
        return formater.format(price);
    }


    transform = (number) => {
        const price = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        return price === 'NaN' ? 0 : price;
    }
}
