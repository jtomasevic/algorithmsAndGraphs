/**
 * Check Permutation:
 * Given two strings, write a method to decide if one is a permutation of the other.
 */

const isItPermutation = (str1: string, str2: string) => {
    if (str1.length !== str2.length) {
        return false;
    }
    str1 = str1.split('').sort();
    str2 = str2.split('').sort();
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return false;
        }
    }
    return true;
};

export { isItPermutation };
