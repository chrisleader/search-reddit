const formatNum = (num) => {
    if (num < 1000) {
        return num.toString();
    } else if (num >= 1000 && num < 1000000) {
        return Math.round(num/1000).toString() + 'k';
    } else if (num > 1000000) {
        return Math.round(num/1000000).toString() + 'm';
    }
}

export default formatNum;