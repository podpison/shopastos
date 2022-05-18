export const wordToPathHelper = (name: string | undefined) => {
    if (name === undefined) return '';
    return name.split(' ').map((i, index) => index === 0 ? i.toLowerCase() : i[0].toUpperCase() + i.slice(1)).join('');
};