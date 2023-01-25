const secondsSinceEpoch = Math.round(Date.now() / 1000);

const formatTime = (created_utc) => {
    let calculatedTime = Math.floor((secondsSinceEpoch - created_utc));
    const hour = 3600;
    const day = 86400;
    const month = day * 28;
    const year = 31556926;

    if (calculatedTime/hour <= 1) {
        return '1 hour';
    } else if (calculatedTime/day < 1) {
        return Math.round((calculatedTime/hour).toString()) + ' hours';
    } else if (calculatedTime/day === 1) {
        return '1 day';
    } else if (calculatedTime/day >= 1 && calculatedTime/day < 29) {
        return Math.round((calculatedTime/day).toString()) + ' days';
    } else if (calculatedTime/day >= 28 && calculatedTime/day < 56) {
        return '1 month';
    } else if (calculatedTime/day >= 56 && calculatedTime/day < 365) {
        return Math.round((calculatedTime/month).toString()) + ' months';
    } else if (calculatedTime/day >= 365 && calculatedTime/day < 730) {
        return '1 year';
    } else if (calculatedTime/day >= 730) {
        return Math.round((calculatedTime/year).toString()) + ' years';
    }
}

export default formatTime;