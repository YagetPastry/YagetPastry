function HOMEPAGE() {
    DIV.innerHTML=`
        <header>${homeheaderData}</header>
        <div class="major">${homepageData}</div>
        
        <div class="dataholderdiv"></div>

        <div class="useraccount">${profilepageData}</div>

        <div class="premiumdiv"></div>

        <div class="useraccountdropdown-data"></div>
    `;

    QUOTES()
    ADS()
    CATEGORYPAGE()
    DIDYOUKNOW()
    GOODHEALTH()
}