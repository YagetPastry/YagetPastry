function USERACCOUNTPAGE() {
    const USERACCOUNTPAGE=document.querySelector('.useraccount');
    const PROFILEWRAPPER=document.querySelector('.profile-wrapper');
    const PROFILEPAGEDIV=document.querySelector('.useraccountdropdown-data');

    USERACCOUNTPAGE.style.width='80%';

    fetch('/PAGES/Homepage/Useraccount/useraccount.json')
    .then(res=>res.json())
    .then(data=>{
        
        data.forEach(element => {
            console.log(element)

            //div to hold profile pic
            const USERPROFILEPICDIV=document.createElement('div')
            USERPROFILEPICDIV.classList.add('profilepicdiv')
            PROFILEWRAPPER.innerHTML='';
            PROFILEWRAPPER.append(USERPROFILEPICDIV)

            const PROFILEPIC=document.createElement('img')
            PROFILEPIC.classList.add('profilepic')
            PROFILEPIC.src=element.profilepic
            USERPROFILEPICDIV.append(PROFILEPIC)

            const USERNAME=document.createElement('h3')
            USERNAME.classList.add('username')
            USERNAME.innerHTML=element.username
            PROFILEWRAPPER.append(USERNAME)

            const EDITPROFILEBTN=document.createElement('button')
            EDITPROFILEBTN.classList.add('edit-profile')
            EDITPROFILEBTN.innerHTML="Edit Profile"
            PROFILEWRAPPER.append(EDITPROFILEBTN)

            EDITPROFILEBTN.addEventListener('click',()=>{
                PROFILEPAGEDIV.style.display='block';
                PROFILEPAGEDIV.style.top='0';
                PROFILEPAGE()
            })

            const PREMIUMSTATUS=document.createElement('p')
            PREMIUMSTATUS.classList.add('premium-status')
            PREMIUMSTATUS.innerHTML="Basic User"
            PROFILEWRAPPER.append(PREMIUMSTATUS)
        });
    })
    .catch(error=>console.log(error))
}