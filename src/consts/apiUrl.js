
export function getApiUrl() {
    return process.env.NODE_ENV === 'production' ?
        "https://app.eurofurence.org/api/v2/" :
        "http://localhost:30001/api/v2/";
}