import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MessageSquareMore, PartyPopper, Terminal, UserRoundPlus } from "lucide-react";

function HomePage() {
  const [pathUrl, setPathUrl] = useState(window.location.pathname);

  return (
    <>
      {/* <h4 className="text-xl text-muted-foreground">Home</h4> */}
      <br />
      <br />
      <Alert>
        <PartyPopper className="h-4 w-4"></PartyPopper>
        <AlertTitle>Congratulations!</AlertTitle>
        <AlertDescription>
          You have successfully installed the{" "}
          <a
            target="_blank"
            href="https://apps.shopify.com/login-using-otp"
            className="font-medium text-primary underline underline-offset-4"
          >
            Simplify my login
          </a>{" "}
          app.
        </AlertDescription>
      </Alert>
      <br />
      <br />
      <div id="one-time-setup">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Steps for one time setup:
        </h2>
        <div className="my-5">
          {/* step 0 */}
          <div>
            <b>
            {/* <UserRoundPlus className="h-4 w-4 inline-block"></UserRoundPlus>   */}
            Step 0 You have "New customer accounts" experience enabled in your
              store. You need to switch to the default "Classic customer
              accounts" experience first.
            </b>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                {" "}
                Please goto{" "}
                <a
                  target="_blank"
                  id="customer-account-page-url-on-home-tab"
                  className="font-medium text-primary underline underline-offset-4"
                  href=""
                ></a>
              </li>
              <li>
                {" "}
                Click on "edit" on "Accounts in online store and checkout" panel{" "}
              </li>
              <li>
                {" "}
                Then chose "Classic customer accounts" and click Save on
                top-right of that page
              </li>
            </ul>

            <br />
          </div>

          {/* step 1 */}
          <div>
            <b>
            {/* <MessageSquareMore className="h-4 w-4 inline-block mr-2"></MessageSquareMore> */}
              Step 1 {"  "}(To enable easy login using SMS OTP, Facebook and Google
              Login):
            </b>
            <br />
            <ul>
              <div id="app-enable-link-pending">
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>
                    Click{" "}
                    <a
                      id="app-enable-link"
                      target="_blank"
                      className="font-medium text-primary underline underline-offset-4"
                    >
                      Enable app extension on Login page
                    </a>{" "}
                    and then click on <b>Save</b> on top right of that page.
                  </li>

                  <li>
                    This step is successfully completed. You can visit the{" "}
                    <a
                      id="login-page"
                      target="_blank"
                      className="font-medium text-primary underline underline-offset-4"
                    >
                      Login page
                    </a>{" "}
                    to use this functionality
                  </li>
                </ul>
              </div>
            </ul>
          </div>

          {/* step 2 */}
          <div>
            <b>
              Step 2 (To enable easy login using Device Fingerint/Touch Id/Face
              Id/Pin):{" "}
            </b>
            <br />

            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {/* <div id="app-enable-link-for-account-page-pending"> */}
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
              {/* </div> */}
              {/* <div id="app-enable-link-for-account-page-completed"> */}
              <li>This step is successfully completed</li>
              {/* </div> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
