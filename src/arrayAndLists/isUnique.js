/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

/**
 * Example with using additional data structure.
 * ASSUMPTION: ASCII code
*/
const ifUnique = (str: string) => {
    if (str.length > 128) {
        return false;
    }
    const ascii = new Array(128);
    for (let i = 0; i < str.length; i++) {
        const ch = str.charAt(i);
        if (ascii[ch] > 0) {
            return false;
        } else {
            ascii[ch] = 1;
        }
    }
    return true;
};

/**
 * Using no additional structure
 */

const ifUnique2 = (str: string) => {
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            console.log(str.charAt(i), str.charAt(j));
            if (str.charAt(i) === str.charAt(j)) {
                console.log(str.charAt(i));
                return false;
            }
        }
    }
    return true;
};

export { ifUnique, ifUnique2 };
