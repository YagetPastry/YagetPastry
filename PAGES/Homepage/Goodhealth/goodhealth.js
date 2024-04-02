function GOODHEALTH() {
    const GOODHEALTHDIV=document.querySelector('.good-health')
    const GOODHEALTHDATA=document.querySelector('.dataholderdiv')

    fetch('https://yagetpastry.github.io/YagetPastry/PAGES/Homepage/Goodhealth/goodhealth.json')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {

            //div to hold good health data
            const GOODHEALTHWRAPPER=document.createElement('div')
            GOODHEALTHWRAPPER.classList.add('goodhealthwrapper')
            GOODHEALTHDIV.append(GOODHEALTHWRAPPER)

            //div to hold image
            const GOODHEALTHIMGHOLDER=document.createElement('div')
            GOODHEALTHIMGHOLDER.classList.add('goodhealthimg-holder')
            GOODHEALTHWRAPPER.append(GOODHEALTHIMGHOLDER)

            //image to enter div
            const GOODHEALTHIMG=document.createElement('img')
            GOODHEALTHIMG.classList.add('goodhealthimg')
            GOODHEALTHIMG.src=element.goodhealthimg
            GOODHEALTHIMGHOLDER.append(GOODHEALTHIMG)

            //adding theme to good welcoming data
            const GOODHEALTHTHEME=document.createElement('h3')
            GOODHEALTHTHEME.classList.add('goodhealth-theme')
            GOODHEALTHTHEME.innerHTML=element.goodheaththeme
            GOODHEALTHWRAPPER.append(GOODHEALTHTHEME)

            //adding theme note to goodhealth data
            const GOODHEALTHTHEMENOTE=document.createElement('p')
            GOODHEALTHTHEMENOTE.classList.add('goodhealth-themenote')
            GOODHEALTHTHEMENOTE.innerHTML=element.goodhealththemenote
            GOODHEALTHWRAPPER.append(GOODHEALTHTHEMENOTE)

            //fuction to open respective goodhealth main info
            GOODHEALTHWRAPPER.addEventListener("click",()=>{
                GOODHEALTHDATA.style.display='block'
                GOODHEALTHDATA.style.top='0'
                GOODHEALTHDATA.innerHTML=`

                    <div class="goodhealth-detailedinfo"></div>

                `

                const GOODHEALTHDETAILEDINFO=document.querySelector('.goodhealth-detailedinfo')
                //fetching goodhealth detailed info
                fetch('https://yagetpastry.github.io/YagetPastry/PAGES/Homepage/Goodhealth/goodhealthdata.json')
                .then(res=>res.json())
                .then(data=>{
                    data.forEach(element => {

                        //div to hold good health deatiled info image
                        const GOODHEALTHDETAILEDINFOIMGHOLDER=document.createElement('div')
                        GOODHEALTHDETAILEDINFOIMGHOLDER.classList.add('goodhealth-detailedinfo-imgholder')
                        GOODHEALTHDETAILEDINFO.append(GOODHEALTHDETAILEDINFOIMGHOLDER)

                        //adding image to div
                        const GOODHEALTHDETAILEDINFOIMG=document.createElement('img')
                        GOODHEALTHDETAILEDINFOIMG.classList.add('goodhealth-detailedinfo-img')
                        GOODHEALTHDETAILEDINFOIMG.src=element.goodheaththemeimg
                        GOODHEALTHDETAILEDINFOIMGHOLDER.append(GOODHEALTHDETAILEDINFOIMG)

                        //adding a div for backtn
                        const GOODHEALTHBACKBTNHOLDER=document.createElement('div')
                        GOODHEALTHBACKBTNHOLDER.classList.add('goodhealth-backbtnholder')
                        GOODHEALTHDETAILEDINFO.append(GOODHEALTHBACKBTNHOLDER)

                        //adding back arrow
                        const GOODHEALTHBACKBTN=document.createElement('img')
                        GOODHEALTHBACKBTN.classList.add('goodhealth-backbtn')
                        GOODHEALTHBACKBTN.src='/icons/arrow-left.png'
                        GOODHEALTHBACKBTNHOLDER.append(GOODHEALTHBACKBTN)

                        //function to close goodhealth main info
                        GOODHEALTHBACKBTNHOLDER.addEventListener('click',()=>{
                            GOODHEALTHDATA.style.display='none'
                            GOODHEALTHDATA.style.botton='0'
                        })

                        //adding goodhealth detailed info data div
                        const GOODHEALTHDETAILEDDATAHOLDER=document.createElement('div')
                        GOODHEALTHDETAILEDDATAHOLDER.classList.add('goodhealthdetailed-dataholder')
                        GOODHEALTHDETAILEDINFO.append(GOODHEALTHDETAILEDDATAHOLDER)

                        //adding innertheme to div
                        const GOODHEALTHDETAILEDTHEME=document.createElement('h2')
                        GOODHEALTHDETAILEDTHEME.classList.add('goodhealth-detailedtheme')
                        GOODHEALTHDETAILEDTHEME.innerHTML=element.goodheathinnertheme
                        GOODHEALTHDETAILEDDATAHOLDER.append(GOODHEALTHDETAILEDTHEME)

                        //adding goodhealth detailed info
                        const GOODHEALTHDETAILEDINFODATA=document.createElement('p')
                        GOODHEALTHDETAILEDINFODATA.classList.add('goodhealth-detailedinfodata')
                        GOODHEALTHDETAILEDINFODATA.innerHTML=element.goodhealthinnerinfo
                        GOODHEALTHDETAILEDDATAHOLDER.append(GOODHEALTHDETAILEDINFODATA)

                    });
                })
                
            })


        });
    })

    .catch(error=>console.log(error))
}