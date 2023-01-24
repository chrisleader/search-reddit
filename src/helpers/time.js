const secondsSinceEpoch = Math.round(Date.now() / 1000);

const time = (created_utc) => {
    let calculatedTime = Math.floor((secondsSinceEpoch - created_utc));
    const hour = 3600;
    const day = 86400;

    if (calculatedTime/hour <= 1) {
        return '1 hour';
    } else if (calculatedTime/day < 1) {
        return Math.round((calculatedTime/hour).toString()) + ' hours';
    } else if (calculatedTime/day === 1) {
        return '1 day';
    } else if (calculatedTime/day >= 1) {
        return Math.round((calculatedTime/day).toString()) + ' days';
    }
}

export default time;