export const fetchTable = async () => {
    const url = 'https://api-football-v1.p.rapidapi.com/leagueTable/524';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f448caff94msh6a79ca03c354e0ep13ee0bjsna68cc3b025a8',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}