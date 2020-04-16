import { Injectable, } from '@angular/core';
import { VariableConfig } from '.';

@Injectable()
export class FilterGroup {
    constructor(
        private variableConfig: VariableConfig,
    ) { }

    loadFilters() {
        return [
            {
                type: 'text',
                title: 'Tìm kiếm',
                group: 'keyword',
                local: true,
                values: [
                    {
                        text: 'Từ khóa tìm kiếm...',
                        name: 'keyword',
                        value: null,
                        checked: null
                    }
                ]
            },
            {
                type: 'checkbox',
                title: 'Loại nguyên phụ liệu',
                group: 'types',
                local: false,
                service: {
                    uri: '/v1/material-types?limit=50',
                    method: 'GET',
                    respone: 'data'
                },
                values: []
            },
            {
                type: 'checkbox',
                title: 'Kho',
                group: 'stores',
                local: true,
                values: JSON.parse(localStorage.getItem('stores')).map((element, index) => {
                    return {
                        text: element.name,
                        name: 'stores',
                        value: element.id,
                        checked: index === 0 ? true : false
                    };
                })
            },
            {
                type: 'checkbox',
                title: 'Chi nhánh tạo',
                group: 'stores',
                local: true,
                values: this.variableConfig.loadLocalStores().map(x => {
                    return {
                        text: x.name,
                        name: 'stores',
                        value: x.id,
                        checked: false
                    };
                })
            }
        ];
    }

}
