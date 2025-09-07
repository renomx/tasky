async function getKids() {
    const url = "https://localhost:5008/api/Kids";
    var response = sendRequest(url);
    return response;
}

async function getTasks() {
    const url = "https://localhost:5008/api/Tasks";   
    var response = sendRequest(url);
    return response;
}


async function sendRequest(url) {
    try {
        const response = await fetch(url,
            {
                method: "GET",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error.message);
    }
}