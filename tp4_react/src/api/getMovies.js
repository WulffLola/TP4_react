const getMovie= async (name) => {
    if(name){
        let url = "https://www.omdbapi.com/?apikey=26182505&t="+name;
        const response = await fetch(url);
        const jsonData = await response.json();
        return jsonData;
    }
}
export default getMovie;