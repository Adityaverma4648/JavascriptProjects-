const Api = () =>{
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4fbcfea748msh22a8e752a443b6dp15a8afjsn3b3623db9eae',
          'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
      };
      
      fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))

return (

      <div id="music">
      </div>
    
)

}
export default Api;    