function SPLASHSCREEN() {
    DIV.innerHTML=`
        <div class="splashscreen">
            <div class="logo-holder">
                <img id="logo" src="https://yagetpastry.github.io/YagetPastry/logo/yagetpastrywithname.png" />
            </div>
        </div>
    `;
    setTimeout(() => {
        LOGINPAGE()
    }, 2000);
}