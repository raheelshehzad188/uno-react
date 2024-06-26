import axios from "axios"

export async function fetchData(url) {
    try {
        return await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('UNO_TOKEN')
            },
        });
    } catch (error) {
        console.error('Error', error);
    }
}