function LOGINPAGE() {
    DIV.innerHTML=`
        <div class="loginpage">

        <h1 id="app-name">Yaget Pastry Login</h1>

            <form>
                <input type="email" placeholder="Enter Your Email">
                <input type="password" placeholder="Enter Your Password">
            <br><br>
                <button class="app-entrance" onclick="HOMEPAGE()">Login</button>
            </form>

            <div class="inquiry-wrapper">
                <p class="inquiry">Forgot Password?</p><br>
                <p class="inquiry" onclick='CREATEACCOUNT()'>I don't Have an Account, <b>Create Account?</b></p>
            </div>

        </div>
    `;
}