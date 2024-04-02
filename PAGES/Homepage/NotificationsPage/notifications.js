function NOTIFICATIONSPAGE() {
    const NOTIFICATIONSDIV=document.querySelector('.dataholderdiv');
    const USERACCOUNTPAGE=document.querySelector('.useraccount');

    NOTIFICATIONSDIV.style.display='block';
    USERACCOUNTPAGE.style.width='0%';
    NOTIFICATIONSDIV.style.top='0';
    NOTIFICATIONSDIV.innerHTML=`
        <header class="category-themes-wrapper">
            <img class="icons" id="back-icon"  src="/icons/arrow-left.png" onclick='HOMEPAGE()' />
            <h3 id="themes">Notifications</h3>
        </header>

        <div class="allnotifications-holder"></div>
    `;

    const ALLNOTIFICATIONSHOLDER=document.querySelector('.allnotifications-holder');
    fetch('https://yagetpastry.github.io/YagetPastry/PAGES/Homepage/NotificationsPage/notifications.json')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {
            console.log(element)
            
            //div to hold individual notifications
            const INDIVIDUALNOTIFICATIONDIV=document.createElement('div')
            INDIVIDUALNOTIFICATIONDIV.classList.add('individual-notifications-div')
            ALLNOTIFICATIONSHOLDER.append(INDIVIDUALNOTIFICATIONDIV)

            //div to hold notify icon
            const NOTIFYICONDIV=document.createElement('div')
            NOTIFYICONDIV.classList.add('notify-icon-div')
            INDIVIDUALNOTIFICATIONDIV.append(NOTIFYICONDIV)

            //adding notify icon to notify div
            const NOTIFYICON=document.createElement('img')
            NOTIFYICON.classList.add('notify-icon')
            NOTIFYICON.src=element.notificationIcon
            NOTIFYICONDIV.append(NOTIFYICON)

            //adding div to hold notifications data
            const NOTIFICATIONDATAHOLDER=document.createElement('div')
            NOTIFICATIONDATAHOLDER.classList.add('notification-data-holder')
            INDIVIDUALNOTIFICATIONDIV.append(NOTIFICATIONDATAHOLDER)

            //adding notification title
            const NOTIFYTITLE=document.createElement('h3')
            NOTIFYTITLE.classList.add('notify-title')
            NOTIFYTITLE.innerHTML=element.notificationTitle
            NOTIFICATIONDATAHOLDER.append(NOTIFYTITLE)

            //adding notification details
            const NOTIFYDETAILS=document.createElement('p')
            NOTIFYDETAILS.classList.add('notification-details')
            NOTIFYDETAILS.innerHTML=element.notificationDetails
            NOTIFICATIONDATAHOLDER.append(NOTIFYDETAILS)

            //adding notification time
            const NOTIFICATIONTIME=document.createElement('p')
            NOTIFICATIONTIME.classList.add('notification-time')
            NOTIFICATIONTIME.innerHTML=element.notificationTime
            INDIVIDUALNOTIFICATIONDIV.append(NOTIFICATIONTIME)

            //adding separation div
            const SEPARATIONDIV=document.createElement('div')
            SEPARATIONDIV.classList.add('separation-div')
            INDIVIDUALNOTIFICATIONDIV.append(SEPARATIONDIV)


        });
    })
    .catch(error=>console.log(error))
}