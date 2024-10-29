import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert } from "@/components/ui/alert";

function FaqPage() {
  const [pathUrl, setPathUrl] = useState(window.location.pathname);

  let qaList = [
    {
      question: 'Getting error "Invalid phone number" when sending OTP?',
      answer:
        "Please check the phone number entered. If it`s a valid phone number, check if it belongs to countries which are not in allowed by default pricing list. In that case please reach out to us at support@loginviaotp.com to quickly enable these countries for your store.",
    },
    {
      question: "I don`t see login form on Login page? ",
      answer:
        "This can be an issue if you have installed/tested other Login apps before installing this app. The other apps will sometimes disable Login form altogether\
    To enable the login form, please go to your theme, select customize and on login page enable the Login form. Please reach out to us if you still face issues.",
    },
    {
      question:
        "Can we modify it such that even first time users using the app do not have to sign up via email?",
      answer:
        "Shopify requires customers to have email id information to allow login. What we can do is set a default email id for your new users.\
    Something like phone_number@store_domain.com\
    This will mean that a first time user will be able to register+login using just their Phone number and OTP. They will not need to enter email id manually.\
    Though one point to note is customers will be able to see this email on the checkout page, however they will not be able to modify it.",
    },
    {
      question:
        "I can`t use your app as I see https://shopify.com/my-store-id/auth/lookup URL on clicking on login page.",
      answer: 'You have "New customer accounts" experience enabled in your store. You need to switch to the default "Classic customer accounts" experience first.\
    For this -\
    Please goto <a target="_blank" id="customer-account-page-url" href=""></a>\
    Click on "edit" on Accounts in online store and checkout panel \
    Then chose "Classic customer accounts" and click save \
    ',
    },
    {
      question: "Can we modify checkout page?",
      answer: 'Shopify doesn`t allow customising the checkout page until you are on Shopify plus plan.\
    Details - <a target="_blank" href="https://shopify.dev/docs/themes/architecture/layouts/checkout-liquid">https://shopify.dev/docs/themes/architecture/layouts/checkout-liquid</a>',
    },

    {
      question:
        "Will it work with existing users created before app installation?",
      answer:
        "Yes, both existing and new users can use the app seamlessly. There is no migration of data or anyother manual steps required.",
    },
  ];

  return (
    <>
      <h4 className="text-xl text-muted-foreground">FAQs</h4>
      <br />
      <br />
      {/* <Alert> */}
      <Accordion
        type="single"
        collapsible
        className="sm:[100%] w-full p-5 rounded-md bg-mauve6 shadow-[0_2px_10px] shadow-black/5"
      >
        {qaList.map((item, index) => (
          <AccordionItem value={index.toString()}>
            <div key={index}>
              <AccordionTrigger>
                   {item.question}
              </AccordionTrigger>
              <AccordionContent>
                  {item.answer}
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>

      {/* </Alert> */}
    </>
  );
}

export default FaqPage;
