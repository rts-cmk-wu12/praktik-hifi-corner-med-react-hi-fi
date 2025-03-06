function getData(fileUrl) {

    const options = {
        headers : {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    }

    fetch(fileUrl, options)
    .then(function(response) {
        //console.log(response);
        return response.json();
    })
    .then(function(data) {
        //console.log(data);
        return data;
    });
}

const getAllProducts = () => getData('data.json');
const getCategories = () => getData('./categories.json');
const getAmplifers = () => getData('amplifiers.json')
const getCdPlayers = () => getData('./cd_players.json')

export { getAllProducts, getCategories, getAmplifers, getCdPlayers, getData };