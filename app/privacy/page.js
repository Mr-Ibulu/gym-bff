"use client";
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-[100lvh] bg-black relative text-white">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={{
          offscreen: { x: -50, opacity: 0 },
          onscreen: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.5 } },
        }}
        className="pt-28 text-center"
      >
        <h1 className="text-4xl lg:text-5xl font-bold">Privacy Policy</h1>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={{
          offscreen: { x: 50, opacity: 0 },
          onscreen: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.5 } },
        }}
        className="py-14 px-10 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto text-lg space-y-6"
        style={{ textWrap: "pretty" }}
      >
        <div className="space-y-4">
          <h3 className="uppercase font-semibold">Introduction</h3>
          <p className="font-light">
            <strong className="font-medium">GYMBFF TECHOLOGIES LIMITED</strong> (“The Company”, “we” “our” “us”) values your privacy and the security
            of the information you share with us. This Privacy Policy explains how we collect, use, disclose and safeguard the information we obtain
            from you in relation to your use of our website, application (“Platform”). This Privacy Policy applies to our website www.gym-bff.com and
            all related sites, mobile application. services, and tools regardless of how you access or use them.
          </p>
          <p className="font-light">
            By using our Platform, you consent to the terms and practices contained in this Privacy Policy and you grant us the right to collect and
            process your data in accordance with the terms of this Policy.
          </p>
          <ul className="list-disc list-outside px-4 sm:px-10 space-y-3">
            <li className="font-light">
              For the purposes of clarity, “User,” “customer,”, or “subscriber,” refers to visitors to our website. “Personal Information,” or
              “Personal Data,” means any information that identifies or can be used to identify a User, directly or indirectly, including, but not
              limited to name, email address, mobile number, photograph, or IP address.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="uppercase font-semibold">THE INFORMATION WE COLLECT</h3>
          <p className="font-light">
            When you use our website or service, we may collect certain types of information about you including the following:
          </p>
          <div className="space-y-3">
            <p className="font-medium">Information you provide to us </p>
            <p className="font-light">
              We collect personal information about prospective clients and their beneficial owners or controllers as part of business development
              initiatives and our business acceptance process. This includes but is not limited to your personal data (such as your full name,
              nationality, phone number(s), email address, date of birth, home or office addresses, and location).
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Information collected automatically </p>
            <p className="font-light">
              This includes but is not limited to your IP address, browser type, mobile device ID, device type, operating system version, connection
              information, mobile network information, location derived from GPS-enabled services, information based on your usage of the service such
              as time, date and duration of your use, referral URLs, search terms and search history, browsing history and advertisement interactions.
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Information we obtain from 3rd Parties </p>
            <p className="font-light">
              We may retrieve additional personal information about you from third parties and other identification/verification services such as your
              financial institution and payment processor. With your consent, we may also collect additional Personal Information in other ways
              including emails, surveys, and other forms of communication. We will not share or disclose your Personal Information with a third party
              without your consent except as may be required for the purpose of providing you with our services or under applicable legislation.
            </p>
            <p>
              In providing you with our services, we may rely on third-party servers located in foreign jurisdictions from time to time, which as a
              result, may require the transfer or maintenance of your personally identifiable information on computers or servers in foreign
              jurisdictions. We will endeavour to ensure that such foreign jurisdictions have data protection legislation that is no less than the
              existing data protection regulations in force in Nigeria and your personally identifiable information is treated in a safe and secure
              manner.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="uppercase font-semibold">WHY WE COLLECT YOUR INFORMATION</h3>
          <p className="font-light">
            We collect your information to ensure your easy and seamless access to our services. We use the information we collect for the following
            purposes:
          </p>
          <ul className="list-decimal list-outside px-4 sm:px-10 space-y-3">
            <li className="font-light">To enable us to provide you with a personalized experience of our product and services.</li>
            <li className="font-light">
              To communicate with you and provide you with information on our programmes and initiatives, such marketing content, newsletters and
              service update. However, we will provide you with an option to unsubscribe if you do not want to hear from us
            </li>
            <li className="font-light">To provide support services to you.</li>
            <li className="font-light">To analyse and understand your use of our products and services.</li>
            <li className="font-light">To protect against illegal, malicious, and fraudulent activity.</li>
            <li className="font-light">To analyse and improve the quality of our services and offerings.</li>
            <li className="font-light">To facilitate your interactions with our social media platforms.</li>
            <li className="font-light">To analyse and learn about our users’ demographics, interests, and behaviour</li>
            <li className="font-light">To identify and repair errors and bugs on our websites and apps.</li>
            <li className="font-light">To facilitate dissemination of information about our services and our partners.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="uppercase font-semibold">SHARING YOUR INFORMATION WITH THIRD PARTIES</h3>
          <p className="font-light">
            We may sometimes share the information we have collected from you with third parties. These third parties include our affiliates,
            subsidiaries, partners, third-party vendors and suppliers who render services for us or on our behalf and our professional advisers (such
            as our auditors, accountants, lawyers, etc.). We may share the information to facilitate the seamless delivery of our services or in
            compliance with applicable legal requirements and assisting law enforcement agencies by responding to requests for the disclosure of
            information in accordance with local laws.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="uppercase font-semibold">COOKIE POLICY</h3>
          <p className="font-light">
            We use cookies to identify you as a User and make your user experience easier, customise our services, content and advertising; help you
            ensure that your account security is not compromised, mitigate risk and prevent fraud; and to promote trust and safety on our website.
            Cookies allow our servers to remember IP addresses, date and time of visits, monitor web traffic and prevent fraudulent activities. Our
            cookies never store personal or sensitive information; they simply hold a unique random reference to you so that once you visit the site
            we can recognize who you are and provide certain content to you. If your browser or browser add-on permits, you have the choice to disable
            cookies on our website, however this may impact your experience using our website.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="uppercase font-semibold">GOVERNING PRINCIPLES OF DATA PROCESSING</h3>
          <p className="font-light">
            We process your information in accordance with the provisions of the Nigeria Data Protection Regulation and these principles:
          </p>
          <ul className="list-decimal list-outside px-4 sm:px-10 space-y-3">
            <li className="font-light">
              Your personal data is collected and processed in accordance with specific, legitimate and lawful purpose consented to by you, provided
              that further processing may be done by archiving the data for public interest, scientific or research purposes, or statistical purposes.
            </li>
            <li className="font-light">The data collected is adequate, accurate and without prejudice to the dignity of the human person.</li>
            <li className="font-light">The data collected is stored only for the period within which it is reasonably needed.</li>
            <li className="font-light">
              The data collected is secured against all foreseeable hazards and breaches such as theft, cyberattack, viral attack, dissemination,
              manipulations of any kind, damage by rain, fire or exposure to other natural elements.
            </li>
            <li className="font-light">We owe a duty of care to you in respect of the data we have obtained from you.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="uppercase font-semibold">DATA SECURITY AND PROTECTION </h3>
          <p className="font-light">
            To prevent unauthorised access and maintain security against foreseeable hazards, we have in place physical, electronic and managerial
            procedures to protect, secure and safeguard our customer’s data and ensure accuracy of our records.
          </p>
          <ul className="list-decimal list-outside px-4 sm:px-10 space-y-3">
            <li className="font-light">
              We use secure socket layer (SSL) protocol technology for the collection and any permitted transfers of your data. However, the Company
              cannot guarantee the security of any personal data disclosed to it or collected by it to the extent that it has no control over the
              public or third-party network through which personal data may be sent to our website.
            </li>
            <li className="font-light">
              We have a management and corporate commitment to information security within the organisation and provide clear direction, guidance and
              responsibilities and procedures in this respect.{" "}
            </li>
          </ul>
          <p className="font-light">
            We have in place a Data Protection Officer who deals with security of information and personal data together with relevant compliance with
            the Regulation and the knowledge and skills of our Data Protection Officer are continuously updated
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="uppercase font-semibold">LINKS TO THIRD PARTY WEBSITES</h3>
          <p className="font-light">
            Our website, products and services may contain links to other websites not subject to this Privacy Policy. When you access those websites,
            they may collect your personal information in accordance with their privacy and data collection policies. We are not responsible for the
            data collected by these third parties and you are advised to study their privacy policies before you make use of their services.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="uppercase font-semibold">YOUR PRIVACY RIGHTS</h3>
          <p className="font-light">
            By providing us with your personal information, you have certain rights in accordance with the provisions of the Nigeria Data Protection
            Regulation which include
          </p>
          <ul className="list-decimal list-outside px-4 sm:px-10 space-y-3">
            <li className="font-light">The right to request for your personal data in our possession.</li>
            <li className="font-light">The right to object to the processing of your personal data.</li>
            <li className="font-light">The right to request rectification and modification of Personal Information which we keep.</li>
            <li className="font-light">
              The right to request for the deletion of your personal data in our possession. To exercise any of the rights listed here, please contact
              us through the details provided below.
            </li>
          </ul>
          <p className="font-light">
            All such requests will be reviewed and considered in accordance with the provisions of the applicable data protection regulations.
          </p>
          <p className="font-light">
            You also have the right to opt-out of receiving the informative materials we send to our users by clicking the “Unsubscribe” button found
            at the bottom of such emails. You also have the right to decline to provide your personal Information when it is requested, however,
            certain services or all the services may be unavailable to you.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="uppercase font-semibold">INTERNATIONAL TRANSFER OF YOUR INFORMATION</h3>
          <p className="font-light">
            We may need to transfer your information in our possession to third parties outside Nigeria. Such transfers will only be done in
            accordance with the applicable data protection regulations in such jurisdiction. While undertaking the international transfer of your
            information, we will put security measures in place to reasonably protect your data during transmission. We shall, among other things,
            confirm whether the country is on the National Information Technology Development Agency (“NITDA”) White List of Countries with adequate
            data protection laws.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="uppercase font-semibold">DATA RETENTION PERIOD</h3>
          <p className="font-light">
            We may retain Personal Information about the User, as long as it is necessary for business and/or legal purposes. Also, we may retain
            aggregated anonymous information indefinitely. In addition, we may retain your information for an additional period as is permitted or
            required to, among other things, comply with our legal obligations, resolve disputes, and enforce agreements.
          </p>
          <p className="font-light">
            All Personal Information shall be destroyed by the Company where possible. For all Personal Data and records obtained, used and stored by
            the Company, we shall perform periodical reviews of the data retained to confirm the accuracy, purpose, validity and requirement to
            retain.
          </p>
          <p className="font-light">The length of storage of Personal Information shall, amongst other things, be determined by:</p>
          <ul className="list-disc list-outside px-4 sm:px-10 space-y-3">
            <li className="font-light">
              the contract terms agreed between the Company and the Data Subject or as long as it is needed for the purpose for which it was obtained;
              or
            </li>
            <li className="font-light">whether the transaction or relationship has statutory implication or a required retention period; or</li>
            <li className="font-light">
              whether there is an express request for deletion of Personal Data by the Data Subject, provided that such request will only be treated
              where the Data Subject is not under any investigation which may require the Company to retain such Personal Data or there is no
              subsisting contractual arrangement with the Data Subject that would require the processing of the Personal Data; or
            </li>
            <li className="font-light">
              whether the Company has another lawful basis for retaining that information beyond the period for which it is necessary to serve the
              original purpose.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="uppercase font-semibold">CONTACT DETAILS</h3>
          <p className="font-light">
            If you have questions regarding your data privacy rights or would like to submit a related data privacy right request, please email us
            at insert email. Please allow up to 30 days for requests to be processed. The Company reserves the right to charge a reasonable fee to
            process excessive or repeat requests.
          </p>
          <p className="font-light">If you have general questions concerning this Privacy Policy, please contact us at: insert email.</p>
          <p className="font-light">
            We maintain a data breach procedure in order to deal with incidents concerning Personal Information or practices leading to the accidental
            or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, Personal Information transmitted, stored or otherwise
            processed. You may contact our DPO upon becoming aware of any breach of Personal Information or if your access credentials have been
            compromised, to enable us to take the necessary steps towards ensuring the security of your Personal Information or account.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="uppercase font-semibold">UPDATES TO THIS POLICY</h3>
          <p className="font-light">
            We reserve the right to periodically update and modify the terms of our Privacy Policy without notice. Changes to this Privacy Policy will
            take effect on the last updated date.
          </p>
          <p className="font-semibold">Last updated August, 2023</p>
        </div>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;
