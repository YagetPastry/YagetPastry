const profilepageData=`
    <div class="profile-wrapper">
        <button class="edit-profile">Edit Profile</button>
    </div>

    <div class="profile-data">
        <div class="community" onclick='PREMIUM()'>
            <img class="icons" id="useraccount-icons" src="/icons/diamond.png" />
            <p class="useraccount-more">Premium</p>
        </div>

        <div class="community">
            <img class="icons" id="useraccount-icons" src="/icons/users-medical.png" />
            <p class="useraccount-more">Community</p>
        </div>

         <div class="community">
            <img class="icons" id="useraccount-icons" src="/icons/settings.png" />
            <p class="useraccount-more">Settings</p>
        </div>

        <div class="community">
            <img class="icons" id="useraccount-icons" src="/icons/refer.png" />
            <p class="useraccount-more">Invite Friends</p>
        </div>

        <a href="">
        <div  class="community">
            <img class="icons" id="useraccount-icons" src="/icons/star.png" />
            <p class="useraccount-more">Rate Us</p>
        </div>
        </a>

        <div class="community" onclick='LOGINPAGE()'>
            <img class="icons" id="useraccount-icons" src="/icons/power.png" />
            <p class="useraccount-more">Logout</p>
        </div>

        <button id="closeaccountdrawer-btn" onclick='closeuseraccountdrawer()'>
            <img class="icons" id="user-acc-backbtn" src="/icons/angle-small-left.png" />
            <p id="acc-backbtn-text">Back</p>
        </button>
    </div>

    <div class="contact-us-wrapper">
        <h4 id="inner-app-name">Yaget Pastry 1.0</h4>

        <div class="social-media">
            <img class="icons" id="social-icons" src="/icons/facebook.png" />
            <img class="icons" id="social-icons" src="/icons/instagram.png" />
            <img class="icons" id="social-icons" src="/icons/globe.png" />
            <img class="icons" id="social-icons" src="/icons/whatsapp.png" />
        </div>
    </div>
`;

function closeuseraccountdrawer() {
    const USERACCOUNTPAGE=document.querySelector('.useraccount');
    USERACCOUNTPAGE.style.width='0%';
}