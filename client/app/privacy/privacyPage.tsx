"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SpanHeader from "../components/SpanHeader";
import { useUser } from "../contexts/UserContext";

export default function PrivacyPage() {
  const logger = require("../../logger");
  const router = useRouter();
  const { userInfo } = useUser();

  useEffect(() => {
    if (!userInfo) {
      logger.warn("User not found.");
      alert("User not found.");
    }
  }, [userInfo, router]);

  return (
    <div className="bg-eggshell min-h-screen flex flex-col">
      <SpanHeader
        onClick={() => router.push("/settings")}
        headerText="Privacy Policy"
      ></SpanHeader>

      <div className="rounded-3xl bg-white flex flex-col mt-4 mb-44 w-full md:max-w-[800px] md:min-h-[550px] p-4 shadow-[0_32px_64px_0_rgba(44,39,56,0.08),0_16px_32px_0_rgba(44,39,56,0.04)]">
        <div className="font-bold text-start text-darkgrey p-3 text-[35px]">
          PRIVACY POLICY
        </div>
        <div className="font-bold text-start text-blue p-3 text-[16px]">
          Last updated: March 2024
        </div>
        <br></br>
        <div className="font-sans text-start text-darkgrey p-4 text-[14px]">
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.<br></br> We use Your Personal data to provide and
          improve the Service. By using the Service, You agree to the collection
          and use of information in accordance with this Privacy Policy.
        </div>
        <div className="font-bold text-start text-blue p-3 text-[28px]">
          Interpretation and Definitions
        </div>
        <div className="font-bold text-start text-blue p-3 text-[20px]">
          Interpretation
        </div>
        <div className="font-sans text-start text-blue p-3 text-[20px]">
          Definitions
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          For the purposes of this Privacy Policy:<br></br>
          <ul className="list-disc">
            <li>
              Account means a unique account created for You to access our
              Service or parts of our Service.
            </li>
            <li>
              Affiliate means an entity that controls, is controlled by or is
              under common control with a party, where "control" means ownership
              of 50% or more of the shares, equity interest or other securities
              entitled to vote for election of directors or other managing
              authority.
            </li>
            <li>
              Application refers to Compass, the software program provided by
              the Company.
            </li>
            <li>
              Company (referred to as either "the Company", "We", "Us" or "Our"
              in this Agreement) refers to developers of Compass.
            </li>
            <li>Country refers to: Quebec, Canada</li>
            <li>
              Device means any device that can access the Service such as a
              computer, a cellphone or a digital tablet.
            </li>
            <li>
              Personal Data is any information that relates to an identified or
              identifiable individual.
            </li>
            <li>Service refers to the Application.</li>
            <li>
              Service Provider means any natural or legal person who processes
              the data on behalf of the Company. It refers to third-party
              companies or individuals employed by the Company to facilitate the
              Service, to provide the Service on behalf of the Company, to
              perform services related to the Service or to assist the Company
              in analyzing how the Service is used.
            </li>
            <li>
              Usage Data refers to data collected automatically, either
              generated by the use of the Service or from the Service
              infrastructure itself (for example, the duration of a page visit).
            </li>
            <li>
              You means the individual accessing or using the Service, or the
              company, or other legal entity on behalf of which such individual
              is accessing or using the Service, as applicable
            </li>
          </ul>
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[28px]">
          Collecting and Using Your Personal Data
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[20px]">
          Types of Data Collected
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[16px]">
          Personal Data
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include, but is
          not limited to:<br></br>
          <ul className="list-disc">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Usage Data</li>
          </ul>
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[16px]">
          Usage Data
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          Usage Data is collected automatically when using the Service.<br></br>{" "}
          Usage Data may include information such as Your Device's Internet
          Protocol address (e.g. IP address), browser type, browser version, the
          pages of our Service that You visit, the time and date of Your visit,
          the time spent on those pages, unique device identifiers and other
          diagnostic data.<br></br> When You access the Service by or through a
          mobile device, We may collect certain information automatically,
          including, but not limited to, the type of mobile device You use, Your
          mobile device unique ID, the IP address of Your mobile device, Your
          mobile operating system, the type of mobile Internet browser You use,
          unique device identifiers and other diagnostic data.<br></br> We may
          also collect information that Your browser sends whenever You visit
          our Service or when You access the Service by or through a mobile
          device.
          <br></br>
          Usage Data is also being collected by Google Analytics and Vercel Web
          Analytics. For more details, visit the "Retention of Your Personal
          Data" section
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[16px]">
          Information Collected while Using the Application
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          While using Our Application, in order to provide features of Our
          Application, We may collect, with Your prior permission:
          <br></br>
          <ul className="list-disc">
            <li>Information from your Device's phone book (contacts list)</li>
            <li>
              Pictures and other information from your Device's camera and photo
              library
            </li>
          </ul>
          <br></br>
          We use this information to provide features of Our Service, to improve
          and customize Our Service. The information may be uploaded to the
          Company's servers and/or a Service Provider's server or it may be
          simply stored on Your device.
          <br></br>
          You can enable or disable access to this information at any time,
          through Your Device settings.
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[20px]">
          Use of Your Personal Data
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          The Company may use Personal Data for the following purposes:<br></br>
          <ul className="list-disc">
            <li>
              To provide and maintain our Service, including to monitor the
              usage of our Service.
            </li>
            <li>
              To manage Your Account: to manage Your registration as a user of
              the Service. The Personal Data You provide can give You access to
              different functionalities of the Service that are available to You
              as a registered user.
            </li>
            <li>
              For the performance of a contract: the development, compliance and
              undertaking of the purchase contract for the products, items or
              services You have purchased or of any other contract with Us
              through the Service.
            </li>
            <li>
              To contact You: To contact You by email, or other equivalent forms
              of electronic communication, such as a mobile application's push
              notifications regarding updates or informative communications
              related to the functionalities, products or contracted services,
              including the security updates, when necessary or reasonable for
              their implementation.
            </li>
            <li>
              To manage Your requests: To attend and manage Your requests to Us.
            </li>
            <li>
              For business transfers: We may use Your information to evaluate or
              conduct a merger, divestiture, restructuring, reorganization,
              dissolution, or other sale or transfer of some or all of Our
              assets, whether as a going concern or as part of bankruptcy,
              liquidation, or similar proceeding, in which Personal Data held by
              Us about our Service users is among the assets transferred.
            </li>
            <li>
              For other purposes: We may use Your information for other
              purposes, such as data analysis, identifying usage trends,
              determining the effectiveness of our promotional campaigns and to
              evaluate and improve our Service, products, services, marketing
              and your experience.
            </li>
          </ul>
          <br></br>
          We may share Your personal information in the following situations:
          <br></br>
          <ul className="list-disc">
            <li>
              With Service Providers: We may share Your personal information
              with Service Providers to monitor and analyze the use of our
              Service, to contact You.
            </li>
            <li>
              For business transfers: We may share or transfer Your personal
              information in connection with, or during negotiations of, any
              merger, sale of Company assets, financing, or acquisition of all
              or a portion of Our business to another company.
            </li>
            <li>
              With Your consent: We may disclose Your personal information for
              any other purpose with Your consent.
            </li>
          </ul>
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[20px]">
          Retention of Your Personal Data
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          The Company will retain Your Personal Data only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use Your Personal Data to the extent necessary to comply
          with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and
          enforce our legal agreements and policies.<br></br> The Company will
          also retain Usage Data for internal analysis purposes. Usage Data is
          generally retained for a shorter period of time, except when this data
          is used to strengthen the security or to improve the functionality of
          Our Service, or We are legally obligated to retain this data for
          longer time periods.
          <br></br>
          <br></br>
          In addition, Our app uses Google Analytics and Vercel Web Analytics to
          anonymously collect user interaction data to improve the app's
          experience. The data will not be disclosed to the public and will only
          be used for the purpose to improve the user experience.
          <br></br>
          The following metrics are being collected and analyzed by Compass:
          <ul className="list-disc">
            <li>Average Engagement Time</li>
            <li>Number of Views Per Page</li>
            <li>Number of times a Form Start has occured</li>
            <li>Number of times a Session Start has occured</li>
          </ul>
          <br></br>
          Other metrics are being collected but will not be retained or analyzed
          by Compass.
          <br></br>
          For more details on the metrics, visit
          <ul className="list-disc">
            <li>
              <a href="https://developers.google.com/analytics">
                https://developers.google.com/analytics
              </a>
            </li>
            <li>
              <a href="https://vercel.com/docs/analytics">
                https://vercel.com/docs/analytics
              </a>
            </li>
          </ul>
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[20px]">
          Transfer of Your Personal Data
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          Your information, including Personal Data, is processed at the
          Company's operating offices and in any other places where the parties
          involved in the processing are located. It means that this information
          may be transferred to — and maintained on — computers located outside
          of Your state, province, country or other governmental jurisdiction
          where the data protection laws may differ than those from Your
          jurisdiction.<br></br> Your consent to this Privacy Policy followed by
          Your submission of such information represents Your agreement to that
          transfer.<br></br> The Company will take all steps reasonably
          necessary to ensure that Your data is treated securely and in
          accordance with this Privacy Policy and no transfer of Your Personal
          Data will take place to an organization or a country unless there are
          adequate controls in place including the security of Your data and
          other personal information.
        </div>
        <div className="font-bold text-start text-blue p-3 text-[20px]">
          Delete Your Personal Data
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          You have the right to delete or request that We assist in deleting the
          Personal Data that We have collected about You.
          <br></br>
          Our Service may give You the ability to delete certain information
          about You from within the Service.<br></br> You may update, amend, or
          delete Your information at any time by signing in to Your Account, if
          you have one, and visiting the account settings section that allows
          you to manage Your personal information. You may also contact Us to
          request access to, correct, or delete any personal information that
          You have provided to Us.<br></br> Please note, however, that We may
          need to retain certain information when we have a legal obligation or
          lawful basis to do so.
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[20px]">
          Disclosure of Your Personal Data
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[16px]">
          Business Transactions
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          If the Company is involved in a merger, acquisition or asset sale,
          Your Personal Data may be transferred. We will provide notice before
          Your Personal Data is transferred and becomes subject to a different
          Privacy Policy.
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[16px]">
          Law enforcement
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          Under certain circumstances, the Company may be required to disclose
          Your Personal Data if required to do so by law or in response to valid
          requests by public authorities (e.g. a court or a government agency).
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[16px]">
          Other legal requirements
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          The Company may disclose Your Personal Data in the good faith belief
          that such action is necessary to:<br></br>
          <ul className="list-disc">
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of the Company</li>
            <li>
              Prevent or investigate possible wrongdoing in connection with the
              Service
            </li>
            <li>
              Protect the personal safety of Users of the Service or the public
            </li>
            <li>Protect against legal liability</li>
          </ul>
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[20px]">
          Security of Your Personal Data
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet, or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[28px]">
          Children's Privacy
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          Our Service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 13. If You are a parent or guardian and You are aware
          that Your child has provided Us with Personal Data, please contact Us.
          If We become aware that We have collected Personal Data from anyone
          under the age of 13 without verification of parental consent, We take
          steps to remove that information from Our servers.<br></br>
          If We need to rely on consent as a legal basis for processing Your
          information and Your country requires consent from a parent, We may
          require Your parent's consent before We collect and use that
          information.
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[28px]">
          Links to Other Websites
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          Our Service may contain links to other websites that are not operated
          by Us. If You click on a third party link, You will be directed to
          that third party's site. We strongly advise You to review the Privacy
          Policy of every site You visit.
          <br></br> We have no control over and assume no responsibility for the
          content, privacy policies or practices of any third party sites or
          services.
          <br></br>
          <br></br>
          The health news section of our app aggregates articles from various
          sources for informational purposes only. We want to clarify that we
          are not affiliated with any of the publishers or authors of the
          syndicated content, and we do not create or endorse any of the
          articles. The views, opinions, and information presented in the health
          news section are solely those of the respective authors and
          publishers, and do not necessarily reflect our own views or opinions.
          Users are encouraged to exercise discretion and consult with qualified
          healthcare professionals regarding any medical concerns or decisions
          based on the content provided. We strive to provide accurate and
          up-to-date information, but we cannot guarantee the completeness or
          accuracy of the content presented. By accessing and using the health
          news section of our app, users acknowledge and accept these terms and
          conditions.
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[28px]">
          Health Tips
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          Health Tips displayed to users are collected from reliable sources.
          Note that these tips should not be used as medical advice and only act
          as a suggestion to improve your daily lives. Compass is not liable for
          any damages caused by these health tips. Discretion is advised.
          Compass has no affiliation with any of the following sources:
          <li>
            https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/anger-management/art-20045434
          </li>
          <li>
            https://www.beyondblue.org.au/mental-health/anxiety/treatments-for-anxiety/anxiety-management-strategies
          </li>
          <li>
            https://www.healthline.com/health/natural-ways-to-reduce-anxiety#natural-strategies
          </li>
          <li>
            https://mentalhealthcommission.ca/resource/quick-tips-to-reduce-anxiety/
          </li>
          <li>https://www.youtube.com/watch?v=2-WMJpoi8Qo</li>
          <li>
            https://www.medicalnewstoday.com/articles/how-to-improve-concentration#exercise
          </li>
          <li>
            https://www.healthline.com/health/depression/how-to-fight-depression#clinical-treatment
          </li>
          <li>
            https://psychcentral.com/stress/how-to-deal-with-feeling-overwhelmed#mindfulness
          </li>
          <li>https://www.calm.com/blog/feeling-overwhelmed</li>
          <li>https://www.choosingtherapy.com/feeling-overwhelmed/</li>
          <li>
            https://psychcentral.com/stress/how-to-deal-with-feeling-overwhelmed#things-you-love
          </li>
          <li>https://www.cdc.gov/sleep/about_sleep/sleep_hygiene.html</li>
          <li>
            https://sleepeducation.org/healthy-sleep/healthy-sleep-habits/
          </li>
          <li>
            https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/fatigue-fighting-tips
          </li>
          <li>
            https://www.nhs.uk/live-well/sleep-and-tiredness/self-help-tips-to-fight-fatigue/
          </li>
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[28px]">
          Changes to this Privacy Policy
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page.{" "}
          <br></br>We will let You know via email and/or a prominent notice on
          Our Service, prior to the change becoming effective and update the
          "Last updated" date at the top of this Privacy Policy.<br></br> You
          are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </div>
        <div className="font-bold text-start  text-blue p-3 text-[28px]">
          Contact Us
        </div>
        <div className="font-sans text-start text-darkgrey p-3 text-[14px]">
          If you have any questions about this Privacy Policy, You can contact
          us: <br></br>* By email: soen4901medicalapp@gmail.com
        </div>
        <p className={"w-full h-full text-grey text-center mt-32"}>
          &copy; Compass 2024
        </p>
      </div>
    </div>
  );
}
