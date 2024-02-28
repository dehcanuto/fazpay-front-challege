export const moneyFormatter = ( value: number | string ) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return formatter.format(Number(value));
};

export const formatUserName = (name?: string): string => {
    if (!name) return ''
    const arrayName = name.split(' ')
    return  arrayName.length === 1 ? 
        arrayName[0][0].toLocaleUpperCase() : 
        arrayName[0][0].toLocaleUpperCase() + arrayName[1][0].toLocaleUpperCase()
}