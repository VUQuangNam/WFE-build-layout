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

    /**
     * Load material append to model.
     */
    loadMaterialTypes = () => {
        return [
            {
                id: 'fabric',
                name: 'Vải'
            },
            {
                id: 'button',
                name: 'Khuy áo'
            }
        ];
    }

    /** Load item Material */
    loadMaterialItem = () => {
        return [
            {
                id: 'bộ',
                name: 'Bộ'
            },
            {
                id: 'cái',
                name: 'Cái'
            },
            {
                id: 'chiếc',
                name: 'Chiếc'
            },
            {
                id: 'đôi',
                name: 'Đôi'
            }
        ];
    }

    loadProductType = () => {
        return [
            {
                id: 'tailor',
                name: 'Sản phẩm may đo'
            },
            {
                id: 'available',
                name: 'Sản phẩm bán sẵn'
            },
            {
                id: 'warranty',
                name: 'Sản phẩm bảo hành'
            },
            {
                id: 'repair',
                name: 'Sản phẩm sửa chữa'
            }
        ];
    }

    loadBrand = () => {
        return [
            {
                id: 'sss',
                name: 'sss'
            },
            {
                id: 'duynguyen',
                name: 'Duy Nguyễn'
            }
        ];
    }
}
