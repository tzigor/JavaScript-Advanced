export function getServerData(url) {
    return fetch(url).then((res) => res.json())
};

export function postServerData(url, method = 'post', body = {}) {
    return fetch(
        url,
        {
            method,
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(body)
        }
    ).then((res) => res.json())
};

