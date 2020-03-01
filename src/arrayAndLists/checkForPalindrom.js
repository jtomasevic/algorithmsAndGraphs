export const checkForPalindrom = (str: string) => {
    str = str.replace(/ /g, '');
    // str = str.replace(/\s/g, '');
    const arr = str.split('');
    for (let i = 0; i < arr.length / 2; i++) {
        console.log(arr[i], arr[arr.length - i - 1]);
        if (arr[i] !== arr[arr.length - i - 1]) {
            console.log(arr[i], arr[arr.length - i - 1]);
            return false;
        }
    }
    return true;
};
