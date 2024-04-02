const homeheaderData=`
    <div class="home-top-nav">
        <img id="profile-icon" class="icons" onclick='USERACCOUNTPAGE()' src="../../icons/profilepurple.png" />
        <h2 id="greeting-text">${localStorage.getItem('Time')}</h2>
        <img id="notification-icon" class="icons" onclick='NOTIFICATIONSPAGE()' src="../../icons/notificationpurple.png" />
    </div>

    <div class="welcoming-text-wrapper">
        <h3 id="welcome-text">Welcome To Your Virtual Kitchen</h3>
    </div>
    
    <div class="home-nav">
        <a href="#home-div" class="nav-icons"><img class="nav-icons" onclick='closeuseraccountdrawer()' src="../../icons/home.png" /></a>
        <a href="#category-div" class="nav-icons"><img class="nav-icons" onclick='closeuseraccountdrawer()' src="../../icons/category.png" /></a>
        <a href="#liked-div" class="nav-icons"><img class="nav-icons" onclick='closeuseraccountdrawer()' src="../../icons/heart.png" /></a>
        <a href="#healthtips-div" class="nav-icons"><img class="nav-icons" onclick='closeuseraccountdrawer()' src="../../icons/stethoscope.png" /></a>
    </div>
`;

function closeuseraccountdrawer() {
    const USERACCOUNTPAGE=document.querySelector('.useraccount');
    USERACCOUNTPAGE.style.width='0%';
}

if (new Date().getHours() < 12) {
    localStorage.setItem('Time', 'Good Morning');
} 

else if (new Date().getHours() < 16) {
    localStorage.setItem('Time', 'Good Afternoon');
}

else {
    localStorage.setItem('Time', 'Good Evening');
}
