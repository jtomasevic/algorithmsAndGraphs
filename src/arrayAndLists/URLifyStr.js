// eslint-disable-next-line arrow-body-style
export const URLifyStr = (str: string) => {
    str = str.trim();
    let str2 = '';
    const arrayCh: [] = str.split('');
    for (let i = 0; i < arrayCh.length; i++) {
        if (str.charAt(i) === ' ') {
            str2 += '%20';
        } else {
            str2 += str.charAt(i);
        }
    }
    return str2;
};
