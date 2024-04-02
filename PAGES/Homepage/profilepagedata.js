const profilepageData=`
    <div class="profile-wrapper">
        <button class="edit-profile">Edit Profile</button>
    </div>

    <div class="profile-data">
        <div class="community" onclick='PREMIUM()'>
            <img class="icons" id="useraccount-icons" src="https://yagetpastry.github.io/YagetPastry/icons/diamond.png" />
            <p class="useraccount-more">Premium</p>
        </div>

        <div class="community">
            <img class="icons" id="useraccount-icons" src="https://yagetpastry.github.io/YagetPastry/icons/users-medical.png" />
            <p class="useraccount-more">Community</p>
        </div>

         <div class="community">
            <img class="icons" id="useraccount-icons" src="https://yagetpastry.github.io/YagetPastry/icons/settings.png" />
            <p class="useraccount-more">Settings</p>
        </div>

        <div class="community">
            <img class="icons" id="useraccount-icons" src="https://yagetpastry.github.io/YagetPastry/icons/refer.png" />
            <p class="useraccount-more">Invite Friends</p>
        </div>

        <a href="">
        <div  class="community">
            <img class="icons" id="useraccount-icons" src="https://yagetpastry.github.io/YagetPastry/icons/star.png" />
            <p class="useraccount-more">Rate Us</p>
        </div>
        </a>

        <div class="community" onclick='LOGINPAGE()'>
            <img class="icons" id="useraccount-icons" src="https://yagetpastry.github.io/YagetPastry/icons/power.png" />
            <p class="useraccount-more">Logout</p>
        </div>

        <button id="closeaccountdrawer-btn" onclick='closeuseraccountdrawer()'>
            <img class="icons" id="user-acc-backbtn" src="https://yagetpastry.github.io/YagetPastry/icons/angle-small-left.png" />
            <p id="acc-backbtn-text">Back</p>
        </button>
    </div>

    <div class="contact-us-wrapper">
        <h4 id="inner-app-name">Yaget Pastry 1.0</h4>

        <div class="social-media">
            <img class="icons" id="social-icons" src="https://yagetpastry.github.io/YagetPastry/icons/facebook.png" />
            <img class="icons" id="social-icons" src="https://yagetpastry.github.io/YagetPastry/icons/instagram.png" />
            <img class="icons" id="social-icons" src="https://yagetpastry.github.io/YagetPastry/icons/globe.png" />
            <img class="icons" id="social-icons" src="https://yagetpastry.github.io/YagetPastry/icons/whatsapp.png" />
        </div>
    </div>
`;

function closeuseraccountdrawer() {
    const USERACCOUNTPAGE=document.querySelector('.useraccount');
    USERACCOUNTPAGE.style.width='0%';
}