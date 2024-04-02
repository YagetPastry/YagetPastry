function DIDYOUKNOW() {
    const DIDYOUKNOWDIV=document.querySelector('.did-you-know')

    fetch('/PAGES/Homepage/Didyouknow/didyouknow.json')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {

            //creating div to hold did you know tips
            const DIDYOUKNOWHOLDER=document.createElement('div')
            DIDYOUKNOWHOLDER.classList.add('didyouknowcontainer')
            DIDYOUKNOWDIV.append(DIDYOUKNOWHOLDER)

            //adding img to div
            const DIDYOUKNOWIMG=document.createElement('img')
            DIDYOUKNOWIMG.classList.add('didyouknowimg')
            DIDYOUKNOWIMG.src=element.didyouknowimg
            DIDYOUKNOWHOLDER.append(DIDYOUKNOWIMG)

        });
    })

    .catch(error=>console.log(error))
}