import React from "react";
import logo from "../assets/logo2.png";
import arrow1 from "../assets/arrow1.svg";
import arrow2 from "../assets/arrow2.svg";
import people from "../assets/people.png";
import photo from "../assets/photo.jpeg";

export const Posting = () => {
  const handleGetStartedClick = () => {
    window.location.href = "https://main.d2vtx18hi4or1z.amplifyapp.com/"; // Replace with your desired URL
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>

        </div>
        <p>
          VODA Stats Group ("we", "our", "us") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website www.vodastatspr.com, including
          any other media form, media channel, mobile website, or mobile application
          related or connected thereto (collectively, the "Site"). Please read this
          privacy policy carefully. If you do not agree with the terms of this privacy
          policy, please do not access the site.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information
          we may collect on the Site includes:
        </p>
        <ul className="list-disc pl-5">
          <li>Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
          <li>Log and Usage Data: Information about your browser and usage details when you visit our Site, including your IP address, browser type, and referring website addresses.</li>
          <li>Cookies and Tracking Technologies: We may use cookies, web beacons, and similar tracking technologies to collect information about you.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">How We Use Your Information</h2>
        <p>We use the information we collect in the following ways:</p>
        <ul className="list-disc pl-5">
          <li>To provide, operate, and maintain our website.</li>
          <li>To improve, personalize, and expand our website.</li>
          <li>To understand and analyze how you use our website.</li>
          <li>To develop new products, services, features, and functionality.</li>
          <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">Disclosure of Your Information</h2>
        <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
        <ul className="list-disc pl-5">
          <li>By Law or to Protect Rights: If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
          <li>Third-Party Service Providers: We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">Security of Your Information</h2>
        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
        <h2 className="text-2xl font-semibold mt-6">Policy for Children</h2>
        <p>We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.</p>
        <h2 className="text-2xl font-semibold mt-6">Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>
        <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
        <p>felix@vodastatspr.com</p>
      </div>
    </div>
    // <div className="flex flex-col">
    //   <div className="w-full h-36 border-b border-gray-400 flex items-center px-4 gap-4 md:px-20 md:gap-8 lg:px-32 lg:gap-20">
    //     <img
    //       className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
    //       src={logo}
    //       alt="logo"
    //     ></img>
    //     <p className="text-sm text-white/80 font-semibold md:text-xl lg:text-3xl">
    //       Become a Best Team
    //     </p>
    //   </div>
    //   <div className="flex flex-col justify-between min-h-screen">
    //     <div className="flex flex-col gap-4 py-8 px-4 md:gap-8 md:py-16 md:px-20 lg:gap-12 lg:py-24 lg:px-50">
    //       <p className="text-xl text-center text-pink-400 font-bold md:text-3xl lg:text-4xl">
    //         Launching Soon
    //       </p>
    //       <div className="text-center text-gray-500 font-bold text-lg md:text-2xl flex flex-col items-center">
    //         <p>
    //           Get ready to follow all your favorite high school sports matches
    //           here!
    //           <br />
    //           Stay tuned for live updates, match results, and more starting this
    //           August.
    //         </p>
    //       </div>
    //       <div className="text-center text-base font-bold flex justify-center">
    //         <p>
    //           <span className="text-blue-400">40+ Men’s</span>
    //           <span className="text-gray-500"> teams and</span>
    //           <span className="text-pink-400"> 70+ Women’s</span>
    //           <span className="text-gray-500"> teams are here!</span>
    //         </p>
    //       </div>
    //       <div className="flex flex-row justify-center gap-6 items-end md:gap-14 lg:gap-20">
    //         <img
    //           className="w-16 h-16 md:w-24 md:h-24"
    //           src={arrow1}
    //           alt="arrow1"
    //         ></img>
    //         <div
    //           className="w-40 h-14 flex hover:cursor-pointer bg-white rounded-full items-center justify-center md:w-52 md:h-16"
    //           onClick={handleGetStartedClick}
    //         >
    //           <p className="text-black font-bold text-sm md:text-xl">
    //             Get Started
    //           </p>
    //         </div>
    //         <div className="w-16 h-16 md:w-24 md:h-24"></div>
    //       </div>
    //     </div>
    //     <div className="flex flex-row justify-center gap-6 items-end md:gap-14 lg:gap-20">
    //       <div className="w-16 h-16 md:w-24 md:h-24"></div>
    //       <img
    //         className="w-full max-w-xs md:max-w-lg lg:max-w-xl"
    //         src={photo}
    //         alt="photo"
    //       ></img>
    //       <img
    //         className="w-16 h-16 md:w-24 md:h-24"
    //         src={arrow2}
    //         alt="arrow2"
    //       ></img>
    //     </div>
    //   </div>
    // </div>
  );
};
