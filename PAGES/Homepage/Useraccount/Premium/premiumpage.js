function PREMIUM() {
    const PREMIUMDIV=document.querySelector('.premiumdiv');
    
    PREMIUMDIV.style.display='block'
    PREMIUMDIV.style.height='100%'
    PREMIUMDIV.innerHTML=`

        <div class="closebtn-div" onclick="closepremiumdiv()">
            <img id="closebtn" src="/icons/close_purple.png" />
        </div>

        <div class="premium-wrapper">
            <div class="logo-container">
                <img id="applogo-premium" src="/logo/yagetpastrywithname.png" />
                <h1 id="premium-text">Premium</h1>
            </div>

            <div class="premium-messege">
                <h3 id="premium-messege-theme">Unlock your favourite Recipes</h3><br>
                <p id="premium-messege-text">No ad interruptions, Unlimited recipes, and more. <br> Get 2 months free when you subscribe for 1 year.</p>
            </div>

            <div class="subscription-plan-wrapper">
                <div class="subscription-plan" id="daily-subscription" onclick="dailyamount()">
                    <div class="subscription-duration">
                        <h4 id="duration">1 Day</h4>
                    </div>
                    <div class="subscription-amount">
                        <h4 id="bills">$1 / Day</h4>
                    </div>
                </div>

                <div class="subscription-plan" id="weekly-subscription" onclick="weeklyamount()">
                    <div class="subscription-duration">
                        <h4 id="duration">1 Week</h4>
                    </div>
                    <div class="subscription-amount">
                        <h4 id="bills">$6 / Week</h4>
                    </div>
                </div>

                <div class="subscription-plan" id="monthly-subscription" onclick="monthlyamount()">
                    <div class="subscription-duration">
                        <h4 id="duration">1 Month</h4>
                    </div>
                    <div class="subscription-amount">
                        <h4 id="bills">$20.39 / month</h4>
                    </div>
                </div>

                <div class="subscription-plan" id="yearly-subscription" onclick="yearlyamount()">
                    <div class="subscription-duration">
                        <h4 id="duration">1 Year</h4>
                    </div>
                    <div class="subscription-amount">
                        <h4 id="bills">$180 / Year</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="subscribe-now">

        </div>
    `;
   
}

function closepremiumdiv() {
    const PREMIUMDIV=document.querySelector('.premiumdiv');
    PREMIUMDIV.style.height='0%';

    const CANCEL=document.querySelector('.subscribe-now')
    CANCEL.style.height='0px';
}

/*------------------------------------------------------------------------*/

function dailyamount() {
    const daily=document.querySelector('#daily-subscription');
    daily.style.border='4px solid #576490';
    daily.style.width='95%';
    daily.style.left="1%";
    daily.style.backgroundColor="#576490";

    const SUBSCRIBENOW=document.querySelector('.subscribe-now');
    SUBSCRIBENOW.style.height='150px';
    SUBSCRIBENOW.innerHTML=`
        <h3 id="duration-theme">Daily</h3>
        <p id="access-details">Access to all Pastry, Health Tips and Community</p>
        <div class="subscription-btns-wrapper">
            <button class="subscription-btns" id="cancel" onclick='cancelpayment()'>Cancel</button>
            <button class="subscription-btns" id="subscribe">Subscribe</button>
        </div>
    `;
    const CANCELBTN=document.querySelector('#cancel').addEventListener('click',cancelpayment)
    function cancelpayment() {
        const CANCELPAYMENT=document.querySelector('.subscribe-now')
        CANCELPAYMENT.style.height='0px';

        daily.style.border='2px solid #576490';
        daily.style.width='90%';
        daily.style.left="5%";
        daily.style.backgroundColor="transparent";
    }

    const weekly=document.querySelector('#weekly-subscription');
    weekly.style.border='2px solid #576490';
    weekly.style.width='90%';
    weekly.style.left="5%";
    weekly.style.backgroundColor="transparent";

    const monthly=document.querySelector('#monthly-subscription');
    monthly.style.border='2px solid #576490';
    monthly.style.width='90%';
    monthly.style.left="5%";
    monthly.style.backgroundColor="transparent";

    const yearly=document.querySelector('#yearly-subscription');
    yearly.style.border='2px solid #576490';
    yearly.style.width='90%';
    yearly.style.left="5%";
    yearly.style.backgroundColor="transparent";
}

function weeklyamount() {
    const weekly=document.querySelector('#weekly-subscription');
    weekly.style.border='4px solid #576490';
    weekly.style.width='95%';
    weekly.style.left="1%";
    weekly.style.backgroundColor="#576490";

    const SUBSCRIBENOW=document.querySelector('.subscribe-now');
    SUBSCRIBENOW.style.height='150px';
    SUBSCRIBENOW.innerHTML=`
        <h3 id="duration-theme">Weekly</h3>
        <p id="access-details">Access to all Pastry, Health Tips and Community</p>
        <div class="subscription-btns-wrapper">
            <button class="subscription-btns" id="cancel" onclick='cancelpayment()'>Cancel</button>
            <button class="subscription-btns" id="subscribe">Subscribe</button>
        </div>
    `;
    const CANCELBTN=document.querySelector('#cancel').addEventListener('click',cancelpayment)
    function cancelpayment() {
        const CANCELPAYMENT=document.querySelector('.subscribe-now')
        CANCELPAYMENT.style.height='0px';

        weekly.style.border='2px solid #576490';
        weekly.style.width='90%';
        weekly.style.left="5%";
        weekly.style.backgroundColor="transparent";
    }

    const daily=document.querySelector('#daily-subscription');
    daily.style.border='2px solid #576490';
    daily.style.width='90%';
    daily.style.left="5%";
    daily.style.backgroundColor="transparent";

    const monthly=document.querySelector('#monthly-subscription');
    monthly.style.border='2px solid #576490';
    monthly.style.width='90%';
    monthly.style.left="5%";
    monthly.style.backgroundColor="transparent";

    const yearly=document.querySelector('#yearly-subscription');
    yearly.style.border='2px solid #576490';
    yearly.style.width='90%';
    yearly.style.left="5%";
    yearly.style.backgroundColor="transparent";
}

function monthlyamount() {
    const monthly=document.querySelector('#monthly-subscription');
    monthly.style.border='4px solid #576490';
    monthly.style.width='95%';
    monthly.style.left="1%";
    monthly.style.backgroundColor="#576490";

    const SUBSCRIBENOW=document.querySelector('.subscribe-now');
    SUBSCRIBENOW.style.height='150px';
    SUBSCRIBENOW.innerHTML=`
        <h3 id="duration-theme">Monthly</h3>
        <p id="access-details">Access to all Pastry, Health Tips and Community</p>
        <div class="subscription-btns-wrapper">
            <button class="subscription-btns" id="cancel" onclick='cancelpayment()'>Cancel</button>
            <button class="subscription-btns" id="subscribe">Subscribe</button>
        </div>
    `;
    const CANCELBTN=document.querySelector('#cancel').addEventListener('click',cancelpayment)
    function cancelpayment() {
        const CANCELPAYMENT=document.querySelector('.subscribe-now')
        CANCELPAYMENT.style.height='0px';

        monthly.style.border='2px solid #576490';
        monthly.style.width='90%';
        monthly.style.left="5%";
        monthly.style.backgroundColor="transparent";
    }

    const daily=document.querySelector('#daily-subscription');
    daily.style.border='2px solid #576490';
    daily.style.width='90%';
    daily.style.left="5%";
    daily.style.backgroundColor="transparent";

    const weekly=document.querySelector('#weekly-subscription');
    weekly.style.border='2px solid #576490';
    weekly.style.width='90%';
    weekly.style.left="5%";
    weekly.style.backgroundColor="transparent";

    const yearly=document.querySelector('#yearly-subscription');
    yearly.style.border='2px solid #576490';
    yearly.style.width='90%';
    yearly.style.left="5%";
    yearly.style.backgroundColor="transparent";
}

function yearlyamount() {
    const yearly=document.querySelector('#yearly-subscription');
    yearly.style.border='4px solid #576490';
    yearly.style.width='95%';
    yearly.style.left="1%";
    yearly.style.backgroundColor="#576490";

    const SUBSCRIBENOW=document.querySelector('.subscribe-now');
    SUBSCRIBENOW.style.height='150px';
    SUBSCRIBENOW.innerHTML=`
        <h3 id="duration-theme">Yearly</h3>
        <p id="access-details">Access to all Pastry, Health Tips and Community</p>
        <div class="subscription-btns-wrapper">
            <button class="subscription-btns" id="cancel" onclick='cancelpayment()'>Cancel</button>
            <button class="subscription-btns" id="subscribe">Subscribe</button>
        </div>
    `;
    const CANCELBTN=document.querySelector('#cancel').addEventListener('click',cancelpayment)
    function cancelpayment() {
        const CANCELPAYMENT=document.querySelector('.subscribe-now')
        CANCELPAYMENT.style.height='0px';

        yearly.style.border='2px solid #576490';
        yearly.style.width='90%';
        yearly.style.left="5%";
        yearly.style.backgroundColor="transparent";
    }

    const daily=document.querySelector('#daily-subscription');
    daily.style.border='2px solid #576490';
    daily.style.width='90%';
    daily.style.left="5%";
    daily.style.backgroundColor="transparent";

    const monthly=document.querySelector('#monthly-subscription');
    monthly.style.border='2px solid #576490';
    monthly.style.width='90%';
    monthly.style.left="5%";
    monthly.style.backgroundColor="transparent";

    const weekly=document.querySelector('#weekly-subscription');
    weekly.style.border='2px solid #576490';
    weekly.style.width='90%';
    weekly.style.left="5%";
    weekly.style.backgroundColor="transparent";
}