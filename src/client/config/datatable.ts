import { Injectable, } from '@angular/core';

@Injectable()
export class DataTableConfig {
    constructor() { }

    /**
     * Datatale
     *
     * @param {Array} data
     * @param {Array} collums
     * @param {Object} options
     * @public
     */
    datatableOption(collums: any, data: any, options = { height: 0, pagination: false }) {
        const option = (
            {
                data: {
                    source: data,
                    pageSize: 20,
                },
                // layout definition
                layout: {
                    scroll: true,
                    height: options.height || 'auto',
                    footer: false
                },
                sortable: false,
                columns: collums,
                pagination: options.pagination,
            }
        );
        return option;
    }

    /**
     * Reload Datatable
     *
     * @param {Array} data
     * @param {Boolean} destroy
     * @param {Array} collums
     * @param {String} tableId
     * @param {Object} options
     */
    reLoadDatatable(
        destroy: boolean,
        data: any[],
        collums: any,
        tableId: string,
        options = { height: 0, pagination: false }
    ) {
        if (destroy) ($(tableId) as any).KTDatatable().destroy();
        const option = this.datatableOption(collums, data, options);
        return ($(tableId) as any).KTDatatable(option);
    }
}
