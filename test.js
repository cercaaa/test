let a = [1,2,3];
Object.keys(data).forEach((i, index) => {
    if (index !== 0) {
        searchStr += '&';
    }
    searchStr += (`${i}=${data[i]}`);
});
Object.keys(data).forEach((i, index) => {
    if (index !== 0) {
        searchStr += '&';
    }
    searchStr += (`${i}=${data[i]}`);
});