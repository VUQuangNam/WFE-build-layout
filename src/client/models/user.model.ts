export interface User {
    /** user attributes */
    id: string;
    name: string;
    username: string;
    phone: string;
    email: string;
    password: string;
    avatar: string;
    cover: string;
    birthday: Date;
    gender: string;
    address: string;
    start_date: Date;
    salary: number;

    /** user access */
    roles: [
        {
            id: string;
            name: string;
        }
    ];
    permissions: [
        {
            id: string;
            name: string;
            group: string;
        }
    ];
    stores: [
        {
            id: string;
            name: string;
            phone: string;
            address: string;
        }
    ];

    /** user config */
    setting: {
        language: string
    };
    devices: [];
    status: string;

    /** collection extra */
    created_by: {
        id: string;
        name: string
    };
    created_at: Date;
    updated_at: Date;
}
