import { useEffect, useState } from "react";

function HomePage() {
  const [pathUrl, setPathUrl] = useState(window.location.pathname);

  return (
    <>
      Home Page here 
      <br />
      <br />
      Congratulations!!! You have successfully installed the{" "}
      <a target="_blank" href="https://apps.shopify.com/login-using-otp">
        Simplify my login
      </a>{" "}
      app.
      <br />
      <br />
      <div id="one-time-setup">
        <h5>Steps for one time setup:</h5>
        <div>
          <div id="classic-customer-accounts-change" >
            <b>
              Step 0 You have "New customer accounts" experience enabled in your
              store. You need to switch to the default "Classic customer
              accounts" experience first.
            </b>
            <li>
              {" "}
              Please goto{" "}
              <a
                target="_blank"
                id="customer-account-page-url-on-home-tab"
                href=""
              ></a>
            </li>
            <li>
              {" "}
              Click on "edit" on "Accounts in online store and checkout" panel{" "}
            </li>
            <li>
              {" "}
              Then chose "Classic customer accounts" and click Save on top-right
              of that page
            </li>
            <br />
          </div>
          <b>
            Step 1 (To enable easy login using SMS OTP, Facebook and Google
            Login):{" "}
          </b>
          <br />
          <ul>
            <div id="app-enable-link-pending" >
              <li>
                Click{" "}
                <a id="app-enable-link" target="_blank">
                  Enable app extension on Login page
                </a>{" "}
                and then click on <b>Save</b> on top right of that page.
              </li>
            </div>
            <div id="app-enable-link-completed" >
              <li>
                This step is successfully completed. You can visit the{" "}
                <a id="login-page" target="_blank">
                  Login page
                </a>{" "}
                to use this functionality
              </li>
            </div>
          </ul>

          <b>
            Step 2 (To enable easy login using Device Fingerint/Touch Id/Face
            Id/Pin):{" "}
          </b>
          <br />
          <ul>
            <div
              id="app-enable-link-for-account-page-pending"
            >
              <li>
                Login into your store as a customer using the account page
              </li>
              <li>
                Click{" "}
                <a id="app-enable-link-for-account-page" target="_blank">
                  Enable app extension on Account page
                </a>{" "}
                and then click on <b>Save</b> on top right of that page.
              </li>
            </div>
            <div
              id="app-enable-link-for-account-page-completed"

            >
              <li>This step is successfully completed</li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomePage;
