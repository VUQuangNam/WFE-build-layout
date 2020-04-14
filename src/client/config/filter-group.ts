import { Injectable, } from '@angular/core';
import { VariableConfig } from '.';

@Injectable()
export class FilterGroup {
    constructor(
        private variableConfig: VariableConfig,
    ) { }

    /**
     * Load filters for customer page
     */
    loadCustomerFilters() {
        return [
            {
                type: 'text',
                title: 'Tìm kiếm',
                group: 'keyword',
                local: true,
                values: [
                    {
                        text: 'Từ khóa...',
                        name: 'keyword',
                        value: null,
                        checked: null
                    }
                ]
            },
            {
                type: 'radio',
                title: 'Loại ngày',
                group: 'by_date',
                local: true,
                values: [
                    {
                        text: 'Ngày tạo',
                        name: 'by_date',
                        value: 'create',
                        checked: false
                    },
                    {
                        text: 'Sinh nhật',
                        name: 'by_date',
                        value: 'birthday',
                        checked: false
                    }
                ]
            },
            {
                type: 'checkbox',
                title: 'Giới tính',
                group: 'genders',
                local: true,
                values: [
                    {
                        text: 'Nam',
                        name: 'genders',
                        value: 'male',
                        checked: false
                    },
                    {
                        text: 'Nữ',
                        name: 'genders',
                        value: 'female',
                        checked: false
                    },
                    {
                        text: 'Khác',
                        name: 'genders',
                        value: 'unknown',
                        checked: false
                    }
                ]
            },
            {
                type: 'checkbox',
                title: 'Mối quan hệ',
                group: 'relations',
                local: true,
                values: [
                    {
                        text: 'Mục tiêu',
                        name: 'relations',
                        value: 'Mục Tiêu',
                        checked: false
                    },
                    {
                        text: 'Tiềm năng',
                        name: 'relations',
                        value: 'Tiềm Năng',
                        checked: false
                    },
                    {
                        text: 'Đối tác',
                        name: 'relations',
                        value: 'Đối Tác',
                        checked: false
                    },
                    {
                        text: 'Biết vqn',
                        name: 'relations',
                        value: 'Biết vqn',
                        checked: false
                    },
                    {
                        text: 'Thích vqn',
                        name: 'relations',
                        value: 'Thích vqn',
                        checked: false
                    },
                    {
                        text: 'Chất lượng',
                        name: 'relations',
                        value: 'Chất Lượng',
                        checked: false
                    },
                    {
                        text: 'Nhu cầu',
                        name: 'relations',
                        value: 'Nhu Cầu',
                        checked: false
                    },
                    {
                        text: 'Chốt cao',
                        name: 'relations',
                        value: 'Chốt Cao',
                        checked: false
                    },
                    {
                        text: 'Mất chốt',
                        name: 'relations',
                        value: 'Mất Chốt',
                        checked: false
                    },
                    {
                        text: 'Thân thiết',
                        name: 'relations',
                        value: 'Thân Thiết',
                        checked: false
                    },
                    {
                        text: 'Trung thành',
                        name: 'relations',
                        value: 'Trung Thành',
                        checked: false
                    },
                    {
                        text: 'Chia sẻ',
                        name: 'relations',
                        value: 'Chia Sẻ',
                        checked: false
                    }
                ]
            },
            {
                type: 'checkbox',
                title: 'Nguồn khách hàng',
                group: 'sources',
                local: true,
                values: [
                    {
                        text: 'Facebook',
                        name: 'sources',
                        value: 'Facebook',
                        checked: false
                    },
                    {
                        text: 'Website',
                        name: 'sources',
                        value: 'Website',
                        checked: false
                    },
                    {
                        text: 'Bạn giới thiệu',
                        name: 'sources',
                        value: 'Bạn Giới Thiệu',
                        checked: false
                    },
                    {
                        text: 'Gần cửa hàng',
                        name: 'sources',
                        value: 'Gần Cửa Hàng',
                        checked: false
                    },
                    {
                        text: 'Khách cũ',
                        name: 'sources',
                        value: 'Khách Cũ',
                        checked: false
                    },
                    {
                        text: 'Quà tặng',
                        name: 'sources',
                        value: 'Quà Tặng',
                        checked: false
                    }
                ]
            },
            {
                type: 'checkbox',
                title: 'Chi nhánh đăng ký',
                group: 'stores',
                local: true,
                values: JSON.parse(localStorage.getItem('stores')).map(x => {
                    return {
                        text: x.name,
                        name: 'stores',
                        value: x.id,
                        checked: false
                    };
                })
            },
            {
                type: 'checkbox',
                title: 'Rank khách hàng',
                group: 'ranks',
                local: false,
                service: {
                    uri: '/v1/ranks/',
                    method: 'GET',
                    respone: 'data'
                },
                values: []
            }
        ];
    }

    /**
     * Load filters for customer page
     */
    loadCustomerGroupFilters() {
        return [
            {
                type: 'text',
                title: 'Từ khóa',
                group: 'keyword',
                local: true,
                values: [
                    {
                        text: 'Từ khóa...',
                        name: 'keyword',
                        value: null,
                        checked: null
                    }
                ]
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

    /**
     * Load filters for order page
     */
    loadOrderFilters() {
        return [
            {
                type: 'text',
                title: 'Từ Khóa',
                group: 'keyword',
                local: true,
                values: [
                    {
                        text: 'từ khóa...',
                        name: 'keyword',
                        value: null,
                        checked: null
                    },
                    {
                        text: 'khách hàng...',
                        name: 'customer',
                        value: null,
                        checked: null
                    },
                    {
                        text: 'sản phẩm...',
                        name: 'item',
                        value: null,
                        checked: null
                    }
                ]
            },
            {
                type: 'radio',
                title: 'Loại Ngày',
                group: 'by_date',
                local: true,
                values: [
                    {
                        text: 'Thử 1',
                        name: 'by_date',
                        value: 'try_one',
                        checked: false
                    },
                    {
                        text: 'Thử  2',
                        name: 'by_date',
                        value: 'try_two',
                        checked: false
                    },
                    {
                        text: 'Ngày Lấy',
                        name: 'by_date',
                        value: 'deadline',
                        checked: false
                    },
                    {
                        text: 'Ngày tạo',
                        name: 'by_date',
                        value: 'create',
                        checked: false
                    }
                ]
            },
            {
                type: 'checkbox',
                title: 'Chi Nhánh',
                group: 'stores',
                local: true,
                values: this.variableConfig.loadLocalStores().map(x => {
                    return {
                        text: x.name,
                        name: 'stores',
                        value: x.id,
                        checked: true
                    };
                })
            },
        ];
    }

    /**
     * Load filters for export page
     */
    loadExportFilters() {
        return [
            {
                type: 'text',
                title: 'Từ Khóa',
                group: 'keyword',
                local: true,
                values: [
                    {
                        text: 'Từ khóa...',
                        name: 'keyword',
                        value: null,
                        checked: null
                    }
                ]
            },
            {
                type: 'checkbox',
                title: 'Thời gian',
                group: 'type',
                local: true,
                values: [
                    {
                        text: 'Ngày chuyển',
                        name: 'type',
                        value: 'sender',
                        checked: true
                    },
                    {
                        text: 'Ngày nhận',
                        name: 'type',
                        value: 'receiver',
                        checked: false
                    }
                ]
            },
            {
                type: 'checkbox',
                title: 'Loại phiếu',
                group: 'type',
                local: true,
                values: [
                    {
                        text: 'Chuyển đi',
                        name: 'type',
                        value: 'sender',
                        checked: true
                    },
                    {
                        text: 'Nhập về',
                        name: 'type',
                        value: 'receiver',
                        checked: false
                    }
                ]
            },
            {
                type: 'radio',
                title: 'Kho hàng',
                group: 'stores',
                local: true,
                values: this.variableConfig.loadLocalStores()
                    .map((element, ix) => {
                        return {
                            text: element.name,
                            name: 'stores',
                            value: element.id,
                            checked: ix === 0 ? true : false
                        };
                    })
            },
            {
                type: 'checkbox',
                title: 'Trạng thái',
                group: 'statuses',
                local: true,
                values: [
                    {
                        name: 'statuses',
                        text: 'Đang chuyển',
                        value: 'delivery',
                        checked: false
                    },
                    {
                        name: 'statuses',
                        text: 'Đang trả hàng',
                        value: 'returning',
                        checked: false
                    },
                    {
                        name: 'statuses',
                        text: 'Đã trả hàng',
                        value: 'returned',
                        checked: false
                    },
                    {
                        name: 'statuses',
                        text: 'Hoàn thành',
                        value: 'confirmed',
                        checked: false
                    },
                    {
                        name: 'statuses',
                        text: 'Đã hủy',
                        value: 'cancelled',
                        checked: false
                    }
                ]
            }
        ];
    }

    /**
     * Load filters for inventory available page
     */
    loadInventoryAvailableFilters() {
        return [
            {
                type: 'text',
                title: 'Tìm kiếm',
                group: 'keyword',
                local: true,
                values: [
                    {
                        text: 'Từ khóa...',
                        name: 'keyword',
                        value: null,
                        checked: null
                    }
                ]
            },
            {
                type: 'checkbox',
                title: 'Loại sản phẩm',
                group: 'types',
                local: true,
                values: this.variableConfig.loadProductType().map(x => {
                    return {
                        text: x.name,
                        name: 'types',
                        value: x.id,
                        checked: null
                    };
                })
            },
            {
                type: 'checkbox',
                title: 'Danh mục sản phẩm',
                group: 'categories',
                local: true,
                values: this.variableConfig.loadCategories().map(x => {
                    return {
                        text: x.name,
                        name: 'categories',
                        value: x.id,
                        checked: null
                    };
                })
            },
            {
                type: 'checkbox',
                title: 'Kho',
                group: 'stores',
                local: true,
                values: this.variableConfig.loadLocalStores()
                    .map((x, i) => {
                        return {
                            text: x.name,
                            name: 'stores',
                            value: x.id,
                            checked: i === 0 ? true : false
                        };
                    })
            },
        ];
    }

    /**
     * Load filters for inventory material page
     */
    loadInventoryMaterialFilters() {
        return [
            {
                type: 'text',
                title: 'Tìm kiếm',
                group: 'keyword',
                local: true,
                values: [
                    {
                        text: 'Từ khóa...',
                        name: 'keyword',
                        value: null,
                        checked: null
                    }
                ]
            },
            {
                type: 'checkbox',
                title: 'Trạng thái',
                group: 'statuses',
                local: true,
                values: [
                    {
                        text: 'Hết',
                        name: 'statuses',
                        value: 'Hết',
                        checked: false
                    },
                    {
                        text: 'Sắp hết',
                        name: 'statuses',
                        value: 'Sắp hết',
                        checked: false
                    },
                    {
                        text: 'Khả dụng',
                        name: 'statuses',
                        value: 'Khả dụng',
                        checked: false
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
                values: this.variableConfig.loadLocalStores().map((x, i) => {
                    return {
                        text: x.name,
                        name: 'stores',
                        value: x.id,
                        checked: i === 0 ? true : false
                    };
                })
            },
        ];
    }

    /**
     * Load filters for material page in setting
     */
    loadMaterialFilters() {
        return [
            {
                type: 'text',
                title: 'Tìm kiếm',
                group: 'keyword',
                local: true,
                values: [
                    {
                        text: 'Từ khóa...',
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
            }
        ];
    }

    /**
     * Load filters for inventory material page
     */
    loadInventoryTailorFilters() {
        return [
            {
                type: 'text',
                title: 'Tìm kiếm',
                group: 'keyword',
                local: true,
                values: [
                    {
                        text: 'từ khóa...',
                        name: 'keyword',
                        value: null,
                        checked: null
                    }
                ]
            },
            {
                type: 'checkbox',
                title: 'Danh mục sản phẩm',
                group: 'item_categories',
                local: true,
                values: this.variableConfig.loadCategories().map(x => {
                    return {
                        text: x.name,
                        name: 'item_categories',
                        value: x.id,
                        checked: null
                    };
                })
            },
        ];
    }

    /**
     * Load filters for stock take page
     */
    loadStockTakeFilters() {
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
                title: 'Trạng thái',
                group: 'statuses',
                local: true,
                values: [
                    {
                        text: 'Đang kiểm hàng',
                        name: 'statuses',
                        value: 'checking',
                        checked: true
                    },
                    {
                        text: 'Đã kiểm hàng',
                        name: 'statuses',
                        value: 'confirmed',
                        checked: true
                    },
                    {
                        text: 'Đã hủy',
                        name: 'statuses',
                        value: 'cancelled',
                        checked: true
                    }
                ]
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
            }
        ];
    }

    /** load filters for import page */
    loadImportFilters() {
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
                title: 'Trạng thái',
                group: 'statuses',
                local: true,
                values: [
                    {
                        text: 'Đã hoàn thành',
                        name: 'statuses',
                        value: 'confirmed',
                        checked: false
                    },
                    {
                        text: 'Đang giao dịch',
                        name: 'statuses',
                        value: 'checking',
                        checked: false
                    },
                    {
                        text: 'Đã hủy',
                        name: 'statuses',
                        value: 'cancelled',
                        checked: false
                    },
                ]
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
            }
        ];
    }

    loadAttributesFilters() {
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
            }
        ];
    }

    loadTypeFilters() {
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
            }
        ];
    }

    loadLocalStoresFilters() {
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
            }
        ];
    }

    loadUserFilters() {
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
                title: 'Chọn chi nhánh',
                group: 'stores',
                local: true,
                values: JSON.parse(localStorage.getItem('stores')).map((element, index) => {
                    return {
                        text: element.name,
                        name: 'stores',
                        value: element.id,
                        checked: false
                    };
                })
            }
        ];
    }

    loadPermissionFilters() {
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
            }
        ];
    }

    loadRankFilters() {
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
                type: 'number',
                title: 'Quyền lợi nhóm',
                group: 'discount',
                local: true,
                values: [
                    {
                        text: '',
                        name: 'discount',
                        value: null,
                        checked: null
                    }
                ]
            }
        ];
    }

}
