/**
 * Implement a method to perform basic string compression using the counts of repeated characters.
 * For example, the string aabcccccaaa would become a2blc5a3.
 * If the "compressed" string would not become smaller than the original string,
 * your method should return the original string.
 * You can assume the string has only uppercase and lowercase letters (a - z).
 */
export const stringCompression = (str: string) => {
    const originalLength = str.length;
    let newStr = '';
    const map = {};
    const arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]] += 1;
        }
    }
    // eslint-disable-next-line guard-for-in
    for (const key in map) {
        newStr += key;
        newStr += map[key];
    }
    if (newStr.length > originalLength) {
        return str;
    } else {
        return newStr;
    }
};
