const TopDeals = () => {

    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4fbcfea748msh22a8e752a443b6dp15a8afjsn3b3623db9eae',
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
	}
};

fetch('https://amazon24.p.rapidapi.com/api/todaydeals', options)
	.then(response => response.json())
	.then(data => {
        data.map((item)=>{
                const title = item.deal_title;
                const image = item.deal_main_image_url;
                const site = item.deal_details_url;
                const startDate = item.deal_start;
                const endDate = item.deal_end;
                const min_price = item.app_sale_range.min;
                const max_price = item.app_sale_range.max;

                 const content = '<div><img src='+ image +' alt=' + title +'> <small><strong>'+ title +'</strong></small> <span></span></div>'
                 
                const dealFetcher = document.querySelector('.dealFetcher');
                dealFetcher.innerHTML += SVGTextContentElement;

    })
    })
	.catch(err => console.error(err));

  return (
    <div className="TopDeals container-fluid bg-danger py-2" style={{height : "30vh"}}>
         <div className="compHead container h5">
             Todays Top Deals
         </div>
         <div className="dealFetcher container bg-warning py-2">
         </div>
    </div>
  )
}


export default TopDeals;