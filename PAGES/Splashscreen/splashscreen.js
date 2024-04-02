function SPLASHSCREEN() {
    DIV.innerHTML=`
        <div class="splashscreen">
            <div class="logo-holder">
                <img id="logo" src="../../logo/yagetpastrywithname.png" />
            </div>
        </div>
    `;
    setTimeout(() => {
        HOMEPAGE()
    }, 2000);
}