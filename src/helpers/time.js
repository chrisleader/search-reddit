const secondsSinceEpoch = Math.round(Date.now() / 1000);

const daysAgo = (created_utc) => {
    return Math.floor((secondsSinceEpoch - created_utc)/86400);
}

export default daysAgo;