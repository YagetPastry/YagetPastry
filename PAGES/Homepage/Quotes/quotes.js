function QUOTES() {
    const QOUTESDIV=document.querySelector('.quotes-div');

    fetch('https://yagetpastry.github.io/YagetPastry/PAGES/Homepage/Quotes/quotes.json')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {

            //creating divs to hold quotes
           const QUOTESHOLDER=document.createElement('div')
           QUOTESHOLDER.classList.add('quotes')
           QOUTESDIV.append(QUOTESHOLDER)

           //adding image to the div
           const QUOTEIMAGE=document.createElement('img')
           QUOTEIMAGE.classList.add('quote-image')
           QUOTESHOLDER.append(QUOTEIMAGE)
           QUOTEIMAGE.src=element.Quoteimage

           //adding date to the div
            const QUOTEDATE=document.createElement('p')
            QUOTEDATE.classList.add('todays-date')
            QUOTESHOLDER.append(QUOTEDATE)
            QUOTEDATE.innerHTML=element.Date
        });
    })
    
    .catch(error=>console.log(error))
}