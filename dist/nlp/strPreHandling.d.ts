declare const handler: {
    delKeyword: (target: string, rules: string | RegExp) => string;
    numberTranslator: (target: string) => string;
    DBC2CDB: (target: string) => string;
};
export default handler;
