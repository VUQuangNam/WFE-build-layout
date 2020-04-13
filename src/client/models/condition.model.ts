export interface Condition {
    title: string;
    group: string;
    type: string;
    local: boolean;
    service: {
        uri: string;
        method: string;
        respone: string;
    };
    values: [
        {
            checked: boolean;
            value: string;
            name: string;
            text: string;
        }
    ];
}
