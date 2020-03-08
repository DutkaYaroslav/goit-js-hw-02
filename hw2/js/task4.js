const formatString = function (string) {
    const maxSize = 40;

    if (string.length > maxSize) {
        let changed = string.slice(0, 40) + '...';
        return changed;
    } else {
        return string
    }
}






console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));