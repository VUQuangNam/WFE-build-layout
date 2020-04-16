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
