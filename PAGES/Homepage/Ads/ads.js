function ADS() {
    const ADSDIV=document.querySelector('.ads-div');

    fetch('/PAGES/Homepage/Ads/ads.json')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {

            //creating a div to hold ads
            const ADSHOLDER=document.createElement('div')
            ADSHOLDER.classList.add('ads')
            ADSDIV.append(ADSHOLDER)
            
            //adding ad image to div
            const ADIMAGE=document.createElement('img')
            ADIMAGE.classList.add('ad-image')
            ADIMAGE.src=element.adimage
            ADSHOLDER.append(ADIMAGE)

        });
    })

    .catch(error=>console.log(error))
}