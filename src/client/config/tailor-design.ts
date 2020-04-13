import { Injectable, } from '@angular/core';

@Injectable()
export class TailorDesignConfig {
    constructor() { }

    /**
     * Body note for tailor design
     */
    bodyNotes = () => {
        return [
            {
                key: 'height',
                name: 'Chiều cao (cm)',
                values: []
            },
            {
                key: 'weight',
                name: 'Cân nặng (kg)',
                values: []
            },
            {
                key: 'vai',
                categories: [
                    'V', 'S', 'D', 'G', 'M'
                ],
                name: 'Vai',
                values: [
                    {
                        id: 'binh_thuong',
                        name: 'Bình thường',
                        checked: false
                    },
                    {
                        id: 'xuoi_nhieu',
                        name: 'Xuôi nhiều',
                        checked: false
                    },
                    {
                        id: 'ngang_thang',
                        name: 'Ngang thẳng',
                        checked: false
                    }
                ]
            },
            {
                key: 'co',
                categories: [
                    'V', 'S', 'D', 'G', 'M'
                ],
                name: 'Cổ',
                values: [
                    {
                        id: 'binh_thuong',
                        name: 'Bình thường',
                        checked: false
                    },
                    {
                        id: 'u_map',
                        name: 'U mập',
                        checked: false
                    },
                    {
                        id: 'cao_gay',
                        name: 'Cao gày',
                        checked: false
                    }
                ]
            },
            {
                key: 'lung',
                categories: [
                    'V', 'S', 'D', 'G', 'M'
                ],
                name: 'Lưng',
                values: [
                    {
                        id: 'binh_thuong',
                        name: 'Bình thường',
                        checked: false
                    },
                    {
                        id: 'cong_vong',
                        name: 'Cong võng',
                        checked: false
                    },
                    {
                        id: 'thang',
                        name: 'Thẳng',
                        checked: false
                    }
                ]
            },
            {
                key: 'nguc',
                categories: [
                    'V', 'S', 'D', 'G', 'M'
                ],
                name: 'Ngực',
                values: [
                    {
                        id: 'binh_thuong',
                        name: 'Bình thường',
                        checked: false
                    },
                    {
                        id: 'san_chac',
                        name: 'Săn chắc',
                        checked: false
                    },
                    {
                        id: 'map_map',
                        name: 'Mập mạp',
                        checked: false
                    }
                ]
            },
            {
                key: 'bap_tay',
                categories: [
                    'V', 'S', 'D', 'G', 'M'
                ],
                name: 'Bắp tay',
                values: [
                    {
                        id: 'binh_thuong',
                        name: 'Bình thường',
                        checked: false
                    },
                    {
                        id: 'to_chac',
                        name: 'To chắc',
                        checked: false
                    },
                    {
                        id: 'map_map',
                        name: 'Mập mạp',
                        checked: false
                    }
                ]
            },
            {
                key: 'bung',
                categories: [
                    'V', 'S', 'D', 'G', 'M', 'Z', 'Q', 'ZV'
                ],
                name: 'Eo & Bụng',
                values: [
                    {
                        id: 'binh_thuong',
                        name: 'Bình thường',
                        checked: false
                    },
                    {
                        id: 'san_chac',
                        name: 'Săn chắc',
                        checked: false
                    },
                    {
                        id: 'map_map',
                        name: 'Mập mạp',
                        checked: false
                    }
                ]
            },
            {
                key: 'cap_quan',
                categories: [
                    'Z', 'Q', 'ZV'
                ],
                name: 'Cạp quần',
                values: [
                    {
                        id: 'binh_thuong',
                        name: 'Bình thường',
                        checked: false
                    },
                    {
                        id: 'ngang_cao',
                        name: 'Ngang cao',
                        checked: false
                    },
                    {
                        id: 'tre_nhieu',
                        name: 'Trễ nhiều',
                        checked: false
                    }
                ]
            },
            {
                key: 'eo_mong',
                categories: [
                    'V', 'S', 'D', 'G', 'M', 'Z', 'Q', 'ZV'
                ],
                name: 'Mông',
                values: [
                    {
                        id: 'binh_thuong',
                        name: 'Bình thường',
                        checked: false
                    },
                    {
                        id: 'cong_chac',
                        name: 'Cong chắc',
                        checked: false
                    },
                    {
                        id: 'map_map',
                        name: 'Mập mạp',
                        checked: false
                    }
                ]
            },
            {
                key: 'mong_dui',
                categories: [
                    'Z', 'Q', 'ZV'
                ],
                name: 'Đùi',
                values: [
                    {
                        id: 'binh_thuong',
                        name: 'Bình thường',
                        checked: false
                    },
                    {
                        id: 'san_chac',
                        name: 'Săn chắc',
                        checked: false
                    },
                    {
                        id: 'map_map',
                        name: 'Mập mạp',
                        checked: false
                    }
                ]
            },
            {
                key: 'chan',
                categories: [
                    'Z', 'Q', 'ZV'
                ],
                name: 'Bắp chân',
                values: [
                    {
                        id: 'binh_thuong',
                        name: 'Bình thường',
                        checked: false
                    },
                    {
                        id: 'to_chac',
                        name: 'To chắc',
                        checked: false
                    },
                    {
                        id: 'map_map',
                        name: 'Mập mạp',
                        checked: false
                    }
                ]
            },
            {
                key: 'do_tuoi',
                categories: [
                    'V', 'S', 'D', 'G', 'M', 'Z', 'Q', 'ZV'
                ],
                name: 'Độ tuổi',
                values: [
                    {
                        id: 'duoi_30',
                        name: 'Dưới 30',
                        checked: false
                    },
                    {
                        id: '30_den_45',
                        name: '30 đến 45',
                        checked: false
                    },
                    {
                        id: 'tren_45',
                        name: 'Trên 45',
                        checked: false
                    }
                ]
            },
            {
                key: 'phong_cach',
                categories: [
                    'V', 'S', 'D', 'G', 'M', 'Z', 'Q', 'ZV'
                ],
                name: 'Phong cách',
                values: [
                    {
                        id: 'chau_a',
                        name: 'Châu Á',
                        checked: false
                    },
                    {
                        id: 'y',
                        name: 'Ý',
                        checked: false
                    },
                    {
                        id: 'anh',
                        name: 'Anh',
                        checked: false
                    }
                ]
            }
        ];
    }

    /**
     * Metric for tailor design
     */
    metrics = () => {
        return [
            {
                key: 'rong_vai',
                short_key: 'Rv',
                name: 'Rộng vai',
                total_input: 1,
                categories: ['BV', 'V', 'D', 'S', 'G', 'M'],
                genders: ['male', 'female']
            },
            {
                key: 'xuoi_vai',
                short_key: 'Xv',
                name: 'Xuôi vai',
                total_input: 1,
                categories: ['BV', 'V', 'D', 'S', 'G', 'M'],
                genders: ['male', 'female']
            },
            {
                key: 'dai_ao_sau_somi',
                short_key: 'Dss',
                name: 'Dài áo sau Sơ mi',
                total_input: 1,
                categories: ['S'],
                genders: ['male', 'female']
            },
            {
                key: 'dai_ao_sau_vest',
                short_key: 'Dsv',
                name: 'Dài áo sau Vest',
                total_input: 1,
                categories: ['BV', 'V', 'D'],
                genders: ['male', 'female']
            },
            {
                key: 'ha_eo_sau',
                name: 'Hạ eo sau',
                total_input: 1,
                categories: ['BV', 'V', 'D', 'S', 'M'],
                genders: ['male', 'female'],
                short_key: 'Hes'
            },
            {
                key: 'dai_tay_ao_somi_dai',
                name: 'Dài tay sơ mi dài tay',
                total_input: 1,
                position: 6,
                categories: ['S'],
                genders: ['male', 'female'],
                short_key: 'Dts'
            },
            {
                key: 'cua_tay_ao_somi_dai',
                name: 'Cửa tay sơ mi dài tay',
                total_input: 1,
                position: 7,
                categories: ['S'],
                genders: ['male', 'female'],
                short_key: 'Cts'
            },
            {
                key: 'dai_tay_ao_somi_ngan',
                name: 'Dài tay sơ mi ngắn tay',
                total_input: 1,
                position: 8,
                categories: ['S'],
                genders: ['male', 'female'],
                short_key: 'Dts'
            },
            {
                key: 'cua_tay_ao_somi_ngan',
                name: 'Cửa tay sơ mi ngắn tay',
                total_input: 1,
                position: 9,
                categories: ['S'],
                genders: ['male', 'female'],
                short_key: 'Cts'
            },
            {
                key: 'dai_tay_ao_vest',
                name: 'Dài tay áo Vest',
                total_input: 1,
                position: 10,
                categories: ['BV', 'V', 'D'],
                genders: ['male', 'female'],
                short_key: 'Dtv'
            },
            {
                key: 'cua_tay_ao_vest',
                name: 'Cửa tay áo Vest',
                total_input: 1,
                position: 11,
                categories: ['BV', 'V', 'D'],
                genders: ['male', 'female'],
                short_key: 'Ctv'
            },
            {
                key: 'dai_tay_ao_mangto',
                name: 'Dài tay áo Măng tô',
                total_input: 1,
                position: 12,
                categories: [
                    'M'
                ],
                genders: ['male', 'female'],
                short_key: 'Dtm'
            },
            {
                key: 'cua_tay_ao_mangto',
                name: 'Cửa tay áo Măng tô',
                total_input: 1,
                position: 13,
                categories: [
                    'M'
                ],
                genders: ['male', 'female'],
                short_key: 'Ctm'
            },
            {
                key: 'bap_tay',
                name: 'Bắp tay',
                total_input: 2,
                position: 14,
                categories: ['BV', 'V', 'D', 'S', 'M'],
                genders: ['male', 'female'],
                short_key: 'Bt'
            },
            {
                key: 'khuu_tay',
                name: 'Khửu tay',
                total_input: 2,
                position: 15,
                categories: ['S'],
                genders: ['male', 'female'],
                short_key: 'Kt'
            },
            {
                key: 'vong_nach',
                name: 'Vòng nách',
                total_input: 2,
                position: 16,
                categories: ['BV', 'V', 'D', 'S', 'G', 'M'],
                genders: ['male', 'female'],
                short_key: 'Vnc'
            },
            {
                key: 'dai_ao_truoc_vest',
                name: 'Dài trước áo Vest',
                total_input: 1,
                position: 17,
                categories: ['BV', 'V', 'D'],
                genders: ['male', 'female'],
                short_key: 'Dv'
            },
            {
                key: 'dai_ao_truoc_somi',
                name: 'Dài trước áo Sơ mi',
                total_input: 1,
                position: 18,
                categories: ['S'],
                genders: ['male', 'female'],
                short_key: 'Ds'
            },
            {
                key: 'dai_ao_truoc_ghile',
                name: 'Áo ghile',
                total_input: 1,
                position: 19,
                categories: [
                    'G'
                ],
                genders: ['male', 'female'],
                short_key: 'Dtg'
            },
            {
                key: 'dai_ao_truoc_mang_to',
                name: 'Dài trước áo Măng tô',
                total_input: 1,
                position: 20,
                categories: [
                    'M'
                ],
                genders: ['male', 'female'],
                short_key: 'Dm'
            },
            {
                key: 'ha_cuc',
                name: 'Hạ cúc đầu tiên',
                total_input: 1,
                position: 21,
                categories: ['BV', 'V', 'D', 'S', 'M'],
                genders: ['male', 'female'],
                short_key: 'Hc1'
            },
            {
                key: 'ha_dinh_nguc',
                name: 'Hạ đỉnh ngực',
                total_input: 1,
                position: 22,
                categories: ['BV', 'V', 'D', 'S', 'G', 'M'],
                genders: [
                    'female'
                ],
                short_key: 'Hdn'
            },
            {
                key: 'ha_chan_nguc',
                name: 'Hạ chân ngực',
                total_input: 1,
                position: 23,
                categories: ['BV', 'V', 'D', 'S', 'G', 'M'],
                genders: [
                    'female'
                ],
                short_key: 'Hcn'
            },
            {
                key: 'cach_nguc',
                name: 'Cách ngực',
                total_input: 1,
                position: 24,
                categories: ['BV', 'V', 'D', 'S', 'G', 'M'],
                genders: [
                    'female'
                ],
                short_key: 'Cn'
            },
            {
                key: 'vong_co_ao_somi',
                name: 'Vòng cổ áo sơ mi',
                total_input: 1,
                position: 25,
                categories: ['S'],
                genders: ['male', 'female'],
                short_key: 'Vcs'
            },
            {
                key: 'vong_co_ao_vest',
                name: 'Vòng cổ áo Vest',
                total_input: 1,
                position: 26,
                categories: ['BV', 'V', 'D'],
                genders: ['male', 'female'],
                short_key: 'Vcv'
            },
            {
                key: 'vong_co_ao_ghile',
                name: 'Vòng cổ áo Ghi lê',
                total_input: 1,
                position: 27,
                categories: [
                    'G'
                ],
                genders: ['male', 'female'],
                short_key: 'Vcg'
            },
            {
                key: 'vong_co_ao_mangto',
                name: 'Vòng cổ áo Măng tô',
                total_input: 1,
                position: 28,
                categories: [
                    'M'
                ],
                genders: ['male', 'female'],
                short_key: 'Vcm'
            },
            {
                key: 'vong_nguc',
                name: 'Vòng ngực',
                total_input: 2,
                position: 29,
                categories: ['BV', 'V', 'D', 'S', 'G', 'M'],
                genders: ['male', 'female'],
                short_key: 'N'
            },
            {
                key: 'vong_eo',
                name: 'Vòng eo',
                total_input: 2,
                position: 30,
                categories: ['BV', 'V', 'D', 'S', 'G', 'M'],
                genders: ['male', 'female'],
                short_key: 'E'
            },
            {
                key: 'vong_bung_ao',
                name: 'Vòng bụng áo',
                total_input: 2,
                position: 31,
                categories: ['BV', 'V', 'D', 'S', 'G', 'M'],
                genders: ['male', 'female'],
                short_key: 'Ba'
            },
            {
                key: 'vong_mong_ao',
                name: 'Vòng mông áo',
                total_input: 2,
                position: 32,
                categories: ['BV', 'V', 'D', 'S', 'M'],
                genders: ['male', 'female'],
                short_key: 'Ma'
            },
            {
                key: 'vong_bung_quan',
                name: 'Vòng bụng quần',
                total_input: 1,
                position: 33,
                categories: ['BV', 'Q', 'Z'],
                genders: ['male', 'female'],
                short_key: 'Bq'
            },
            {
                key: 'vong_mong_quan',
                name: 'Vòng mông quần',
                total_input: 2,
                position: 34,
                categories: ['BV', 'Q', 'Z'],
                genders: ['male', 'female'],
                short_key: 'Mq'
            },
            {
                key: 'dai_quan',
                name: 'Dài quần',
                total_input: 1,
                position: 35,
                categories: ['BV', 'Q', 'Z'],
                genders: ['male', 'female'],
                short_key: 'Dq'
            },
            {
                key: 'vong_ong',
                name: 'Vòng ống quần',
                total_input: 1,
                position: 36,
                categories: ['BV', 'Q', 'Z'],
                genders: ['male', 'female'],
                short_key: 'Vo'
            },
            {
                key: 'len_goi',
                name: 'Lên gối',
                total_input: 1,
                position: 37,
                categories: ['BV', 'Q', 'Z'],
                genders: ['male', 'female'],
                short_key: 'Lg'
            },
            {
                key: 'vong_goi',
                name: 'Vòng gối',
                total_input: 2,
                position: 38,
                categories: ['BV', 'Q', 'Z'],
                genders: ['male', 'female'],
                short_key: 'Vg'
            },
            {
                key: 'vong_dui',
                name: 'Vòng đùi',
                total_input: 2,
                position: 39,
                categories: ['BV', 'Q', 'Z'],
                genders: ['male', 'female'],
                short_key: 'Vdu'
            },
            {
                key: 'vong_day',
                name: 'Vòng đáy',
                total_input: 1,
                position: 40,
                categories: ['BV', 'Q', 'Z'],
                genders: ['male', 'female'],
                short_key: 'Vdy'
            }
        ];
    }
}
