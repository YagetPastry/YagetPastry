function CREATEACCOUNT() {
    DIV.innerHTML=`
        <div class="create-account-page">

        <h1 id="app-name">Yaget Pastry Create Account</h1>

            <form>
                <input type="text" placeholder="Enter Your Username">
                <input type="email" placeholder="Enter Your Email">
                <input type="password" placeholder="Enter Your Password">
                <input type="tel" placeholder="Enter Your Telephone Number">
            <br><br>
                <button class="app-entrance">Create Account</button>
            </form>

            <div class="inquiry-wrapper">
                <p class="inquiry" onclick="LOGINPAGE()">I Have an Account, <b>Login?</b></p>
            </div>

        </div>
    `;
}