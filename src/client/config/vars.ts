import { Injectable, } from '@angular/core';
import { Http } from '@angular/http';
import { HeaderConfig } from './header';
import { environment } from './environment';

@Injectable()
export class VariableConfig {
    constructor(
        private http: Http,
        private headerConfig: HeaderConfig
    ) { }

    /**
     * Load local store append to model.
     */
    loadLocalStores = () => {
        return JSON.parse(
            localStorage.getItem('stores')
        );
    }

    /**
     * Load local store append to model.
     */
    loadAllStores = async () => {
        try {
            const respone = await this.http.get(
                environment.API_URL + '/v1/stores/',
                this.headerConfig.requestOptions()
            ).toPromise().then(result => result.json());
            return respone.code ? [] : respone.data;
        } catch (ex) {
            return [];
        }
    }

    loadCategories = () => {
        return [
            {
                id: 'V',
                name: 'Áo Vest'
            },
            {
                id: 'S',
                name: 'Áo Somi'
            },
            {
                id: 'G',
                name: 'Áo Gile'
            },
            {
                id: 'M',
                name: 'Măng Tô'
            },
            {
                id: 'Q',
                name: 'Quần Âu'
            },
            {
                id: 'Z',
                name: 'Zuýp'
            },
            {
                id: 'ZV',
                name: 'Chân Váy'
            },
            {
                id: 'D',
                name: 'Đầm'
            }
        ];
    }

    /** Load item Material */
    loadMaterialItem = () => {
        return [
            {
                id: 'Bộ',
                name: 'Bộ'
            },
            {
                id: 'Cái',
                name: 'Cái'
            },
            {
                id: 'Chiếc',
                name: 'Chiếc'
            },
            {
                id: 'Đôi',
                name: 'Đôi'
            }
        ];
    }
}
