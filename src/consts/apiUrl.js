
export function getApiUrl() {
    return process.env.NODE_ENV === 'production' ?
        "https://app.eurofurence.org:40000/api/v2/" :
        "http://localhost:30001/api/v2/";
}