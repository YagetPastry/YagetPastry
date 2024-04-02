function PROFILEPAGE() {
    const PROFILEPAGEDIV=document.querySelector('.useraccountdropdown-data');

    PROFILEPAGEDIV.innerHTML=`
        <div class="profile">

        </div>

        <div class="userprofile-details">

        </div>
    `;

    const PROFILE=document.querySelector('.profile');

    fetch('/PAGES/Homepage/Useraccount/Profilepage/profilepage.json')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {

            const BACKBTNDIV=document.createElement('div')
            BACKBTNDIV.classList.add('close-editprofile-div')
            PROFILE.append(BACKBTNDIV)

            const BACKBTNEDITPROFILE=document.createElement('img')
            BACKBTNEDITPROFILE.classList.add('close-edit-profilebtn')
            BACKBTNEDITPROFILE.src='/icons/arrow-left.png'
            BACKBTNDIV.append(BACKBTNEDITPROFILE)

            BACKBTNDIV.addEventListener('click',()=>{
                PROFILEPAGEDIV.style.display='none'
            })

            const PROFILETHEME=document.createElement('h3')
            PROFILETHEME.classList.add('theme-profile')
            PROFILETHEME.innerHTML='Profile'
            PROFILE.append(PROFILETHEME)

            const PROFILEIMAGEDIV=document.createElement('div')
            PROFILEIMAGEDIV.classList.add('profileimagediv')
            PROFILE.append(PROFILEIMAGEDIV)

            const PROFILEIMAGE=document.createElement('img')
            PROFILEIMAGE.classList.add('profile-image')
            PROFILEIMAGE.src=element.profileimage
            PROFILEIMAGEDIV.append(PROFILEIMAGE)

            const EDITPROFILEIMAGE=document.createElement('button')
            EDITPROFILEIMAGE.classList.add('edit-profile-image-btn')
            EDITPROFILEIMAGE.innerHTML=`
                <img class="icons" id="editprofileimage-icon" src="/icons/pencil_purple.png"/>
                <p id="editprofile-pic-text">Edit Profile Picture</p>
            `;
            PROFILE.append(EDITPROFILEIMAGE)

        });
    })
    .catch(error=>console.log(error))



    const USERPROFILEDETAILS=document.querySelector('.userprofile-details');

    fetch('/PAGES/Homepage/Useraccount/Profilepage/profiledetails.json')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {
            console.log(element)
            
            const USERNAMETHEMETITLE=document.createElement('h4')
            USERNAMETHEMETITLE.classList.add('username-themetitle')
            USERNAMETHEMETITLE.innerHTML="Username";
            USERPROFILEDETAILS.append(USERNAMETHEMETITLE)

            const PERSONALUSERNAMEHOLDER=document.createElement('input')
            PERSONALUSERNAMEHOLDER.classList.add('personalusername-holder')
            PERSONALUSERNAMEHOLDER.value=element.PERSONALUSERNAME
            USERPROFILEDETAILS.append(PERSONALUSERNAMEHOLDER)

            /*-------------------------------------------------------------*/

            const EMAILTHEMETITLE=document.createElement('h4')
            EMAILTHEMETITLE.classList.add('username-themetitle')
            EMAILTHEMETITLE.innerHTML="Email";
            USERPROFILEDETAILS.append(EMAILTHEMETITLE)

            const EMAILHOLDER=document.createElement('input')
            EMAILHOLDER.classList.add('personalusername-holder')
            EMAILHOLDER.value=element.USEREMAIL
            USERPROFILEDETAILS.append(EMAILHOLDER)

            /*-------------------------------------------------------------*/

            const USERTELEPHONETTITLE=document.createElement('h4')
            USERTELEPHONETTITLE.classList.add('username-themetitle')
            USERTELEPHONETTITLE.innerHTML="Telephone";
            USERPROFILEDETAILS.append(USERTELEPHONETTITLE)

            const TELEPHONEHOLDER=document.createElement('input')
            TELEPHONEHOLDER.classList.add('personalusername-holder')
            TELEPHONEHOLDER.value=element.USERTELEPHONE
            USERPROFILEDETAILS.append(TELEPHONEHOLDER)

            /*-------------------------------------------------------------*/

            const USERGENDERTITLE=document.createElement('h4')
            USERGENDERTITLE.classList.add('username-themetitle')
            USERGENDERTITLE.innerHTML="Gender";
            USERPROFILEDETAILS.append(USERGENDERTITLE)

            const USERGENDERHOLDER=document.createElement('input')
            USERGENDERHOLDER.classList.add('personalusername-holder')
            USERGENDERHOLDER.value=element.GENDER
            USERPROFILEDETAILS.append(USERGENDERHOLDER)

            /*-------------------------------------------------------------*/

            const USERDATEOFBIRTH=document.createElement('h4')
            USERDATEOFBIRTH.classList.add('username-themetitle')
            USERDATEOFBIRTH.innerHTML="Date of Birth";
            USERPROFILEDETAILS.append(USERDATEOFBIRTH)

            const USERDATEOFBIRTHHOLDER=document.createElement('input')
            USERDATEOFBIRTHHOLDER.classList.add('personalusername-holder')
            USERDATEOFBIRTHHOLDER.value=element.DOB
            USERPROFILEDETAILS.append(USERDATEOFBIRTHHOLDER)

            /*-------------------------------------------------------------*/

            const SAVECHANGES=document.createElement('button')
            SAVECHANGES.classList.add('save-changes')
            SAVECHANGES.innerHTML=`
                <h3 id="save-changes-text">Save Changes</h3>
            `
            USERPROFILEDETAILS.append(SAVECHANGES)

            const CHANGEPASSWORDDIV=document.createElement('button')
            CHANGEPASSWORDDIV.classList.add('changepassword-div')
            CHANGEPASSWORDDIV.innerHTML=`
                <img class="icons" id="key-password-icon" src="/icons/key.png" />
                <p id="title-changepassword">Change Password</p>
                <img class="icons" id="open-passwordpage-icon" src="/icons/arrow-left.png" />
            `
            USERPROFILEDETAILS.append(CHANGEPASSWORDDIV)

            const DELETACCOUNTDIV=document.createElement('button')
            DELETACCOUNTDIV.classList.add('changepassword-div')
            DELETACCOUNTDIV.innerHTML=`
                <img class="icons" id="delete-account-icon" src="/icons/trash.png" />
                <p id="title-changepassword">Delete Account</p>
            `
            USERPROFILEDETAILS.append(DELETACCOUNTDIV)
        });
    })
    .catch(error=>console.log(error))
}