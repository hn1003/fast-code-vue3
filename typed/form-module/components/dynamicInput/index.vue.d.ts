declare const _default: import("vue").DefineComponent<{
    border: {
        default: boolean;
        type: BooleanConstructor;
    };
    addButtonPositon: {
        default: string;
        type: StringConstructor;
    };
    limit: {
        default: number;
        type: NumberConstructor;
    };
    disable: {
        default: boolean;
        type: BooleanConstructor;
    };
    dynamic: {
        default: boolean;
        type: BooleanConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
    };
    modelValue: {
        default: () => any[];
        type: ArrayConstructor;
    };
}, any, {}, {
    valueCom: {
        get(): any;
        set(value: any): void;
    };
    isLimit: () => boolean;
}, {
    init(): void;
    delItem(index: any): void;
    addItem(index: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    border: {
        default: boolean;
        type: BooleanConstructor;
    };
    addButtonPositon: {
        default: string;
        type: StringConstructor;
    };
    limit: {
        default: number;
        type: NumberConstructor;
    };
    disable: {
        default: boolean;
        type: BooleanConstructor;
    };
    dynamic: {
        default: boolean;
        type: BooleanConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
    };
    modelValue: {
        default: () => any[];
        type: ArrayConstructor;
    };
}>>, {
    border: boolean;
    addButtonPositon: string;
    limit: number;
    disable: boolean;
    dynamic: boolean;
    type: string;
    modelValue: unknown[];
}, {}>;
export default _default;
