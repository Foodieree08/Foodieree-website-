import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Official Privacy Policy of Foodieree Technologies Private Limited describing policies and procedures on collection, use, processing, and protection of user information.",
  alternates: {
    canonical: "https://foodieree.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Foodieree",
    description:
      "Official Privacy Policy of Foodieree Technologies Private Limited.",
    url: "https://foodieree.com/privacy-policy",
    siteName: "Foodieree",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col selection:bg-black selection:text-white">
      {/* Top Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <span className="font-bold text-lg tracking-tight">Foodieree</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <article className="text-black leading-relaxed space-y-8">
          {/* Document Title Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-3">
              Foodieree Privacy Policies
            </h1>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Entity:</strong> FOODIEREE TECHNOLOGIES PRIVATE LIMITED</p>
              <p><strong>CIN:</strong> U63120BR2026PTC084565</p>
              <p><strong>Platform:</strong> Website (https://foodieree.com/) &amp; Foodieree Mobile Applications</p>
            </div>
          </div>

          {/* Preamble */}
          <div className="space-y-4 text-base text-gray-900 leading-relaxed">
            <p>
              Your privacy matters to Foodieree Technologies Private Limited (the <strong>&ldquo;Company&rdquo;</strong>, <strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;FOODIEREE&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong> or <strong>&ldquo;our&rdquo;</strong>).
            </p>
            <p>
              This Privacy Policy (<strong>&ldquo;Policy&rdquo;</strong>) describes the policies and procedures on the collection, use, processing, storage, retrieval, disclosure, transfer and protection of your information, including personal information and sensitive personal data or information (<strong>&ldquo;Information&rdquo;</strong>), that FOODIEREE receives through your online access, interaction or use, of the Foodieree mobile applications (<strong>&ldquo;Foodieree App&rdquo;</strong>) or our website located at <a href="https://foodieree.com/" className="text-black underline font-medium">https://foodieree.com/</a> (the website and Foodieree App are collectively referred to as the <strong>&ldquo;Platform&rdquo;</strong>) or through your offline interaction with us including through mails, phones, in person, etc., or while availing our Services.
            </p>
            <p>
              The terms <strong>&ldquo;you&rdquo;</strong> and <strong>&ldquo;your&rdquo;</strong> refer to a Consumer (defined below), a Delivery Partner (defined below), a Restaurant Partner (defined below), or any other user of the Platform and / or availing the Services (defined below).
            </p>
            <p>
              The term <strong>&ldquo;Services&rdquo;</strong> refers to any services offered by FOODIEREE in accordance with the terms and conditions applicable to you (and available on the Platform) whether on the Platform or otherwise.
            </p>
            <p>
              Capital terms not defined herein have the meaning assigned to them in the terms and conditions applicable to you and available on Platform.
            </p>
            <p>
              Please read this Policy before using the Platform or submitting any Information to us. This Policy is a part of and incorporated within, and is to be read along with, the terms and conditions applicable to the users of the Foodieree App available on the Platform.
            </p>
          </div>

          {/* 1. USER ACCEPTANCE */}
          <section className="space-y-3 pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-black">1. USER ACCEPTANCE</h2>
            <p className="text-gray-900 leading-relaxed">
              By accessing or using the Platform or the Services, you agree and consent to this Policy, along with any amendments made by the Company at its sole discretion and posted on the Platform from time to time.
            </p>
            <p className="text-gray-900 leading-relaxed">
              Any collection, processing, retrieval, transfer, use, storage, disclosure and protection of your Information will be in accordance with this Policy and applicable laws including but not limited to Information Technology Act, 2000, Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011 and other rules and regulations framed thereunder (as amended from time to time) (<strong>&ldquo;Applicable Laws&rdquo;</strong>). If you do not agree with the Policy, please do not use or access the Platform.
            </p>
            <div className="space-y-2 text-gray-900 pt-1">
              <p>You hereby represent to FOODIEREE that:</p>
              <ol className="list-decimal list-outside space-y-2 pl-6">
                <li>
                  The Information you provide to us from time to time, is and will be authentic, correct, current and updated and you have all the rights, permissions and consents as may be required to provide such Information to us.
                </li>
                <li>
                  Your providing of the Information as well as FOODIEREE&apos;s consequent storage, collection, usage, transfer, access, or processing of such Information will not be in violation of any agreement, Applicable Laws, charter documents, judgments, orders and decrees.
                </li>
                <li>
                  If you disclose to us any Information relating to other people, you represent that you have the authority to do so and to permit us to use such Information in accordance with this Policy.
                </li>
              </ol>
            </div>
          </section>

          {/* 2. DEFINITIONS */}
          <section className="space-y-3 pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-black">2. DEFINITIONS</h2>
            <p className="text-gray-900">
              Unless otherwise provided in this Policy, the terms capitalized in the Policy shall have the meaning as provided hereunder:
            </p>
            <ol className="list-decimal list-outside space-y-2.5 text-gray-900 pl-6">
              <li>
                <strong>&ldquo;Co-branded Services&rdquo;</strong> shall have the meaning assigned to the term in paragraph 5(c) hereto.
              </li>
              <li>
                <strong>&ldquo;Delivery Partner&rdquo;</strong> shall mean a third-party who may be available to provide delivery services to the Consumer.
              </li>
              <li>
                <strong>&ldquo;Device&rdquo;</strong> shall mean computer, mobile or other device used to access the Services.
              </li>
              <li>
                <strong>&ldquo;Device Identifier&rdquo;</strong> shall mean IP address or other unique identifier of the Device.
              </li>
              <li>
                <strong>&ldquo;Consumer&rdquo;</strong> shall mean the person availing food delivery services using the Platform;
              </li>
              <li>
                <strong>&ldquo;Promotion&rdquo;</strong> shall mean any contest and other promotions offered by us.
              </li>
              <li>
                <strong>&ldquo;Personal Information&rdquo;</strong> shall mean such categories of information that could reasonably be used to identify you personally, including your name, e-mail address, and mobile number.
              </li>
              <li>
                <strong>&ldquo;Restaurant Partner&rdquo;</strong> shall mean a food provider business including but not limited to restaurants, bakeries, eateries, cloud kitchen and retail outlets listing and providing food and beverages through the Platform.
              </li>
              <li>
                <strong>&ldquo;TPSP&rdquo;</strong> shall mean a third-party service provider.
              </li>
              <li>
                <strong>&ldquo;Usage Information&rdquo;</strong> shall have the meaning assigned to the term in paragraph 3(II) hereto.
              </li>
            </ol>
          </section>

          {/* 3. WHAT INFORMATION DO WE COLLECT? */}
          <section className="space-y-5 pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-black">3. WHAT INFORMATION DO WE COLLECT?</h2>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-black">I. INFORMATION YOU PROVIDE TO US</h3>
              
              <p className="text-gray-900 leading-relaxed">
                1. <strong>Personal Information:</strong> We may ask you to provide certain Personal Information to us. We may collect this information through various means and in various places for the provision of Services, including account registration forms, contact us forms, or when you otherwise interact with us. When you sign up to use the Services, you create a user profile. We shall ask you to provide only such Personal Information which is for lawful purpose connected with our Services and necessary to be collected by us for such purpose.
              </p>

              <div className="space-y-2 text-gray-900">
                <p>2. The Information you provide to us includes the following:</p>
                <ul className="list-disc list-outside space-y-2.5 pl-6">
                  <li>
                    <strong>Account Information:</strong> Create or update your Foodieree account which may include your email address, name, address, mobile number, gender, date of birth, photograph, login name, password, banking or payment related information (as permitted by Applicable Laws), camera, etc.
                  </li>
                  <li>
                    <strong>Saved Information:</strong> While you use our Services, we may collect and store Information about you to process your requests and automatically complete forms for future transactions, including (but not limited to) your phone number, address, email address, billing information, emergency contact information, etc.
                  </li>
                  <li>
                    <strong>Verification Information:</strong> If you are a Delivery Partner, we may collect location details, profile picture, call and SMS details, copies of government issued identification documents such as Driving License, Aadhaar, Permanent Account Number, etc., license details, and other details (KYC), vehicle related documents such as, certificate of registration, permit of vehicle, certificate of fitness, insurance, pollution certificate etc., user settings, and such other documents which evidence the health or fitness of the vehicle to provide Services on the Platform from time to time. If you are a Delivery Partner, we may also require you to capture your real time self-clicked images (selfies) and upload such selfies on the Platform from time to time to verify your identity. If you are a Restaurant Partner, we may collect such documents to verify the registration and ownership of the business and any other documents that we may in our own discretion require from time to time to confirm the suitability of your food and beverages business listing on the Platform.
                  </li>
                  <li>
                    <strong>Other Information:</strong> We collect additional Information you provide when you correspond with us for customer support or report problems for troubleshooting. We also collect Information that you may submit electronically such as when you use in-app messaging, post on any message boards, provide ratings, reviews, or comments. In case you refer a friend, we may also collect, store, and use the name and contact information of your friend to promote our Services.
                  </li>
                </ul>
              </div>

              <div className="space-y-2 text-gray-900">
                <p>3. In addition to the foregoing, you will not upload, display, share, host, publish or transmit any information that:</p>
                <ul className="list-disc list-outside space-y-2 pl-6">
                  <li>
                    Is harmful, offensive, harassing, obscene, pornographic, invasive of another&apos;s privacy, hateful, racially or ethnically objectionable, disparaging, relating to or encouraging money laundering or gambling, or an online game that causes user harm, or otherwise unlawful in any manner whatsoever, or promoting enmity between different groups on the grounds of religion or caste with the intent to incite violence;
                  </li>
                  <li>
                    Deceives or misleads the addressee about the origin of such messages, or communicates any misinformation or information which is patently false and untrue or misleading in nature;
                  </li>
                  <li>
                    Threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-black">II. INFORMATION WE COLLECT AS YOU ACCESS AND USE Foodieree APP</h3>
              <ul className="list-disc list-outside space-y-3 pl-6 text-gray-900">
                <li>
                  <strong>Transaction Information:</strong> We collect transaction Information such as order details, pick-up and drop-off addresses, payment transaction information (subject to Applicable Laws), etc.
                </li>
                <li>
                  <strong>Location data:</strong>
                  <div className="mt-1 pl-2 space-y-1">
                    <p>
                      <strong>Consumer:</strong> We collect precise or approximate location data from your Device if you enable us to do so. We collect this data from the time a Service is requested until it is finished, and any time the app is running in the foreground of your Device. We use this data to enhance your use of Foodieree App, including to improve mutually delivery locations, nearby show reel, and prevent and detect fraud. Even if you have not enabled us to collect location data from your Device, we collect the Delivery Partner&apos;s location data collected during a drop off, and links such location data with your account. This enables us to offer services to you, such as receipt generation and customer support.
                    </p>
                  </div>
                </li>
                <li>
                  <strong>Usage Information:</strong> We, our TPSP may use a variety of technologies that automatically (or passively) collect certain Information whenever you visit or interact with the Platform for obtaining the Services (<strong>&ldquo;Usage Information&rdquo;</strong>). This Usage Information may include the browser that you are using, the URL that referred you to our Services, and the time of day, searches and search results, or usage behavior on the App, etc.
                </li>
                <li>
                  <strong>Device Information:</strong> We collect Information by ourselves or through integration with third-party applications which consists of technical information and aggregated usage information, and may contain, among other things, Device Identifier of your Device, your preferred language and country site, manufacturer, software, and model of your Device, Device type, operating systems and versions, your geolocation, mobile network data, screens you have visited, your touch gestures performed in your Foodieree App, your scrolling activity, and any other actions you have performed during your use of Foodieree App, etc., to enhance user interface and experience on the Platform, facilitate the provision of software updates, product support and other services to you, etc. Any sensitive information about other programs that you are running on your Device, passwords, and activity across other applications are not collected and all the sensitive information are masked.
                </li>
                <li>
                  <strong>SMS/Text Messages:</strong> We may collect data from SMS/ text messages upon receiving Device access permissions from you for the purposes of (i) issuing and receiving one-time passwords and other device verification, and (ii) automatically filling verification details during financial transactions, either through us or a TPSP, in accordance with Applicable Laws. We do not share or transfer SMS/ text message data to any third party other than as provided under this Policy.
                </li>
                <li>
                  <strong>Call details:</strong> We may, additionally, record your calls with us made from the Device used to provide Services and related call details.
                </li>
                <li>
                  <strong>Other Information:</strong> We collect Information about how you interact with the Foodieree App and any of our web sites to which the Foodieree App links, such as how many times you use a specific part of the Foodieree App over a given time period, the amount of time you spend using the Foodieree App , how often you use the Foodieree App, actions you take in the Foodieree App and how you engage with the Foodieree App, etc.
                </li>
                <li>
                  <strong>Cookies:</strong> Usage Information may be collected using a cookie. If you do not want information to be collected through the use of cookies, your browser / app settings allow you to deny or accept the use of cookies. Cookies can be disabled or controlled by setting a preference within your web browser or on your Device. If you choose to disable cookies or flash cookies on your Device, some features of the Services may not function properly or we may not be able to customize the delivery of information to you. The Company cannot control the use of cookies (or the resulting information) by third parties, and use of third-party cookies is not covered by our Policy.
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-lg font-bold text-black">III. INFORMATION THIRD PARTIES PROVIDE ABOUT YOU</h3>
              <p className="text-gray-900 leading-relaxed">
                We may, from time to time, collect Information about you through the Platform or while availing the Services and collect Information from our affiliates or third parties / TPSPs such as technical sub-contractors, business partners, analytics providers, search information providers, payment service providers, etc., and also from publicly available sources such as commercially available marketing lists, social networks and other related media.
              </p>
            </div>
          </section>

          {/* 4. USE OF INFORMATION COLLECTED */}
          <section className="space-y-3 pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-black">4. USE OF INFORMATION COLLECTED</h2>
            <p className="text-gray-900">
              Our primary goal in collecting your Information is to provide you with an enhanced experience when using the Services. We may use your Information we collect in accordance with this Policy for the following purposes:
            </p>
            <ol className="list-decimal list-outside space-y-2 text-gray-900 pl-6">
              <li>To enable you to access the Platform.</li>
              <li>To verify your identity and/ or your capacity, under applicable law, to provide and avail Services through the Platform;</li>
              <li>To closely monitor which features of the Services are used most, to allow you to view your trip history, rate trips or bookings, and to determine which features need to be improved for enhanced user experience, including usage patterns and geographic locations to determine where we should offer or focus services, features and/or resources;</li>
              <li>To send you a welcome email/SMS to verify your username and password;</li>
              <li>To provide you the correct app version depending on your Device type, for troubleshooting and in some cases, marketing purposes;</li>
              <li>To help diagnose problems with our computer server, and to administer the Platform;</li>
              <li>To send you strictly service-related announcements on rare occasions when it is necessary to do so. For instance, if our Services are temporarily suspended for maintenance, we might send you an email. If you do not wish to receive them, you have the option to deactivate your account;</li>
              <li>To prevent, discover and investigate violations of this Policy or any applicable terms of service or terms of use;</li>
              <li>To identify and/or detect security breaches or attacks, errors, fraud, money laundering, abuse and other criminal activities, and investigating and taking appropriate remedial action;</li>
              <li>We provide some of your Personal Information (such as your name, email ID, contact number, delivery location) to the Delivery Partner and/or Restaurant Partner who accepts your request for Services so that the Delivery Partner and/or Restaurant Partner may contact for the delivery of the order;</li>
              <li>If you are a Consumer, we use geo-location information for various purposes, including delivery location determination, to automatically fetch your location when you open the Foodieree App;</li>
              <li>If you are a Delivery Partner, we may share your name, phone number and/or profile picture (if applicable), tracking details with our Consumers to provide them the Services;</li>
              <li>We may use your Personal Information or Usage Information that we collect about you: (a) to provide you with information or services or process transactions that you have requested or agreed to receive including to send you electronic newsletters, or to provide you with special offers or promotional materials on behalf of us or third parties; (b) to enable you to participate in a variety of the Services&apos; features such as online or mobile entry sweepstakes, contests or other promotions; (c) to contact you with regard to your use of the Services and, in our discretion, changes to the Services and/or the Services&apos; policies; (d) for internal business purposes; (e) for inclusion in our data analytics; and (f) for purposes disclosed at the time you provide your Information or as otherwise set forth in this Policy;</li>
              <li>To enhance your user experience in relation to the Foodieree App or the Services, including customisation / personalization of the Foodieree App or the Services;</li>
              <li>To provide relevant offers or rewards to you, based on your consumption patterns;</li>
              <li>To enforce our terms and conditions and this Policy, and resolve any disputes;</li>
              <li>To provide functionality, analyse performance, fix errors, bugs, and improve the usability and effectiveness of the Platform;</li>
              <li>To comply with Applicable Laws (or any other rules and regulations) or requests received from regulators, government, law enforcement or judicial authorities under Applicable Laws (or any other rules and regulations) or our contract with a third party;</li>
              <li>To carry out our obligations and enforcing rights arising from any contracts between us;</li>
              <li>To disclose to affiliates, our and their employees, agents and representatives on a need-to-know basis to facilitate provision of Services;</li>
              <li>To deliver any administrative notices, alerts, advice, notifications and communication relevant to your use of the Services, through social media (including WhatsApp), SMS and other media;</li>
              <li>If you sign up to use our Services as an employee or as a stakeholder of a third party with whom the Company has an arrangement and has offered discount coupons/ or extended certain promotional offers, the Company may share any information provided by you with such third party to be utilised by them for limited internal business purposes only; and/ or</li>
              <li>To fulfil any other purpose for which you provide us the Information and/or for any other purpose with your consent. Please note, we do not use the information collected from you for targeted advertising.</li>
            </ol>
          </section>

          {/* 5. HOW AND WHEN DO WE DISCLOSE INFORMATION TO THIRD PARTIES */}
          <section className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-black">5. HOW AND WHEN DO WE DISCLOSE INFORMATION TO THIRD PARTIES</h2>
            <p className="text-gray-900 leading-relaxed">
              We do not sell, share, rent or trade the information we have collected about you, other than as disclosed within this Policy or at the time you provide your Information. Following are the situations when Information may be shared:
            </p>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-black">I. WHEN YOU AGREE TO SHARE INFORMATION WITH THIRD PARTIES:</h3>
              <p className="text-gray-900 leading-relaxed">
                You may opt to receive information and/or marketing offers directly from third parties when you access third party links on the Foodieree App. If you do agree to have your Personal Information shared, your Personal Information will be disclosed to such third parties and all Information you disclose will be subject to the privacy policy and practices of such third parties. We are not responsible for the privacy policies and practices of such third parties and, therefore, you should review the privacy policies and practices of such third parties prior to agreeing to receive such information from them. If you later decide that you no longer want to receive communication from a third party, you will need to contact that third party directly.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-black">II. THIRD PARTIES PROVIDING SERVICES ON OUR BEHALF</h3>
              <p className="text-gray-900 leading-relaxed">
                We may share the Information you provide with our TPSPs, business partners, and agents. Please refer to such third-party’s privacy policy for more details before using their services on the Foodieree App.
              </p>
              <p className="text-gray-900 leading-relaxed">
                We use TPSPs to facilitate our Services, provide or perform certain aspects of the Services on our behalf – such as host the Services, design and/or operate the Services’ features, track the Services’ analytics, process payments, engage in anti-fraud and security measures, perform background and identity verification, run criminal record checks, provide customer support, provide geo-location information to Consumer/Delivery Partners, enable us to send you special offers, host our job application form, perform technical services (e.g., without limitation, maintenance services, database management, web analytics and improvement of the Services’ features), or perform other administrative services. These third parties will have access to Information, including Personal Information to only carry out the services they are performing for you or for us. We will require each of these TPSPs to ensure the same level of data protection as us and impose contractual obligations not to disclose or use Personal Information for any other purpose.
              </p>
              <p className="text-gray-900 leading-relaxed">
                TPSPs providing analytics related services may set and access their own cookies, web beacons and embedded scripts on your Device and they may otherwise collect or have access to Information about you.
              </p>
              <p className="text-gray-900 leading-relaxed">
                We use a third-party hosting provider who hosts our support section of our website. Information collected within this section of our website by such TPSP is governed by our Policy.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-black">III. CO-BRANDED SERVICES</h3>
              <p className="text-gray-900 leading-relaxed">
                Certain aspects of the Services may be provided to you in association with third parties (<strong>&ldquo;Co-Branded Services&rdquo;</strong>) such as credit houses, loan providers, sponsors and charities, and may require you to disclose Information including Personal Information to them. Such Co-Branded Services will identify the third party. If you elect to register for products and/or services through the Co-Branded Services, you shall have deemed to have consented to providing your Information to both us and the third party. Further, if you sign-in to a Co-Branded Service with a username and password obtained through our Services, your Personal Information may be disclosed to the identified third parties for that Co-Branded Service and will be subject to their privacy policies and practices.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-black">IV. CONTESTS AND PROMOTIONS</h3>
              <p className="text-gray-900 leading-relaxed">
                We may offer Promotions through the Services that may require registration. By participating in a Promotion, you are agreeing to the official rules that govern that Promotion, which may contain specific requirements of you, including, allowing the sponsor of the Promotion to use your name, voice and/or likeness in advertising or marketing associated with the Promotion. If you choose to enter a Promotion, you agree that your Personal Information may be disclosed to third parties or the public in connection with the administration of such Promotion, including, in connection with winner selection, prize fulfilment, and as required by law or permitted by the Promotion’s official rules, such as on a winners list.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-black">V. ADMINISTRATIVE AND LEGAL REASONS</h3>
              <p className="text-gray-900 leading-relaxed">
                We cooperate with Government and law enforcement officials and private parties to enforce and comply with the Applicable Laws and other rules and regulations. Thus, we may access, use, preserve, transfer and disclose your information (including Personal Information, IP address, Device Information or geo-location data), to government or law enforcement officials or private parties as we reasonably determine is necessary and appropriate: (i) to satisfy any Applicable Law, rules, regulation, subpoenas, Governmental requests or legal process; (ii) to protect and/or defend the terms and conditions applicable to use of the Foodieree App or the Services, including investigation of potential violations thereof; (iii) to protect the safety, rights, property or security of the Company, our Services or any third party; (iv) to protect the safety of the public for any reason; (v) to detect, prevent or otherwise address fraud, security or technical issues; and /or (vi) to prevent or stop activity we may consider to be, or to pose a risk of being, an illegal, unethical, or legally actionable activity.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-black">VI. AFFILIATES AND BUSINESS TRANSFER</h3>
              <p className="text-gray-900 leading-relaxed">
                We may share your Information, including your Personal Information and Usage Information with our parent, subsidiaries and affiliates for internal reasons, including business and operational purposes. We also reserve the right to disclose and transfer all such information: (i) to a subsequent owner, co-owner or operator of the Services or applicable database; or (ii) in connection with a corporate merger, consolidation, restructuring, the sale of substantially all of our membership interests and/or assets or other corporate change, including, during the course of any due diligence process.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-black">VII. MARKET STUDY AND OTHER BENEFITS</h3>
              <p className="text-gray-900 leading-relaxed">
                We may share your information, including your Personal Information and Usage Information with third parties for any purpose, including but not limited to undertaking market research/ study, conduct data analysis, determine and customize product or service offerings, to improve the products or Services or to make any other benefits/products/ services available to you.
              </p>
            </div>
          </section>

          {/* 6. THIRD PARTY CONTENT AND LINKS TO THIRD PARTY SERVICES */}
          <section className="space-y-3 pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-black">6. THIRD PARTY CONTENT AND LINKS TO THIRD PARTY SERVICES</h2>
            <p className="text-gray-900 leading-relaxed">
              The Services may contain content that is supplied by a third party, and those third parties may collect website usage information and your Device Identifier when web pages from any online or mobile Services are served to your browser. In addition, when you are using the Services, you may be directed to other sites or applications that are operated and controlled by third parties that we do not control, in which case our Policy will no longer apply. We are not responsible for the privacy practices employed by any of these third parties. For example, if you click on a banner advertisement, the click may take you away from Foodieree App onto a different web site. These other web sites may send their own cookies to you, independently collect data or solicit Information and may or may not have their own published privacy policies.
            </p>
            <p className="text-gray-900 leading-relaxed">
              Information (including Personal Information) may be collected by third-parties if there is content from the Foodieree App that you specifically and knowingly upload to, share with or transmit to an email recipient, online community, website, or to the public, e.g. uploaded photos and reels, posted reviews or comments, or information about you or your order or booking that you choose to share with others through features which may be provided on our Services. This uploaded, shared, or transmitted content will also be subject to the privacy policy of the email, online community website, social media or other platform to which you upload, share or transmit the content. We are not responsible for the privacy practices employed by any of these third parties.
            </p>
            <p className="text-gray-900 leading-relaxed">
              Our online and mobile Services may include social media features, such as the Facebook/Instagram/X Like button, and widgets such as a “Share This” button, or interactive mini-programs that run on Foodieree App. These features may collect Information including your IP address, photograph, which page you are visiting on our online or mobile Services, and may set a cookie to enable the feature to function properly. Social media features and widgets are either hosted by a third party or hosted directly on our online Services and/or the Platform. Your interactions with these features and widgets are governed by the privacy policy of the company providing them and we will not be responsible or liable for any acts or omissions of such third parties.
            </p>
            <p className="text-gray-900 leading-relaxed">
              In particular, remember that certain third-parties may be located in or have facilities that are located in a different jurisdiction, hence, if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which such service provider is, or its facilities are located. We encourage you to note when you leave web pages or links controlled by Foodieree App/ Services and to read the privacy statements of all third party web sites or applications before submitting any Information to such third parties. We will not be liable for any acts or omissions of the third-party service providers.
            </p>
          </section>

          {/* 7. INFORMATION COLLECTED BY YOU */}
          <section className="space-y-3 pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-black">7. INFORMATION COLLECTED BY YOU</h2>
            <p className="text-gray-900 leading-relaxed">
              This Policy does not cover the usage of any information about you which is obtained by the Delivery Partner and/or Restaurant Partner while providing you a Service, or otherwise.
            </p>
          </section>

          {/* 8. CHANGE OF INFORMATION AND CANCELLATION OF ACCOUNT */}
          <section className="space-y-3 pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-black">8. CHANGE OF INFORMATION AND CANCELLATION OF ACCOUNT</h2>
            <ol className="list-decimal list-outside space-y-2.5 text-gray-900 pl-6">
              <li>
                You are responsible for maintaining the accuracy of the Information you submit to us, such as your contact information provided as part of account registration.
              </li>
              <li>
                If your Personal Information or Information you provide to us changes, or if you no longer desire our Services, you may correct, delete inaccuracies, or amend information by making the change on our member information page or by contacting us through the email address mentioned on the Platform, or contacting the Grievance Officer. We will make good faith efforts to make requested changes in our then active databases as soon as reasonably practicable.
              </li>
              <li>
                You may also cancel or modify the communications that you have elected to receive from us by following the instructions contained within an e-mail or by logging into your user account and changing your communication preferences.
              </li>
              <li>
                If upon modifying or changing the Information earlier provided to Us, we find it difficult to provide access to our Services to you due to insufficiency/ inaccuracy of the Information, we may, in our sole discretion terminate your access to the Services by providing you a written notice to this effect on your registered email address.
              </li>
              <li>
                If you wish to cancel your account or request that we no longer use your Information to provide you services, contact us through email address mentioned in this Policy, the Platform or the Grievance Officer mentioned in this Policy. Please note, we may not be able to provide some or all of the Services in case you disable access to any of your Information as described under this Policy.
              </li>
              <li>
                We will retain your Information including Personal Information and Usage Information (including geo-location) for as long as your account with the Services is active and as needed to provide you services. Even after your account is terminated, we will retain some of your Information including Personal Information and Usage Information (including geo-location, trip history, and transaction history) for a period of 180 days, to resolve disputes, conclude any activities related to cancellation of an account, investigate, or prevent fraud and other inappropriate activity related to your account, to enforce our agreements, or for other business reasons, etc. After completion of such period, your data may either be deleted from our database or be anonymized and aggregated, and then may be held by us as long as necessary for us to provide our Services effectively, but our use of the anonymized data will be solely for analytic purposes.
              </li>
            </ol>
          </section>

          {/* 9. SECURITY */}
          <section className="space-y-3 pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-black">9. SECURITY</h2>
            <p className="text-gray-900 leading-relaxed">
              The Information we collect is securely stored within our databases, and we use standard, industry-wide, commercially reasonable security practices such as encryption, firewalls and SSL (Secure Socket Layers) for protecting your Information. However, as effective as encryption technology is, no security system is impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that Information you supply won&apos;t be intercepted while being transmitted to us over the Internet or wireless communication, and any Information you transmit to us, you do at your own risk. We recommend that you not disclose your password to anyone.
            </p>
          </section>

          {/* 10. INFORMATION OF CHILDREN */}
          <section className="space-y-3 pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-black">10. INFORMATION OF CHILDREN</h2>
            <p className="text-gray-900 leading-relaxed">
              We do not knowingly solicit or collect Information from children under the age of 18 years. Use of the Foodieree App is only available for persons who can enter into a legally binding contract under Applicable Laws.
            </p>
          </section>

          {/* 11. GRIEVANCE OFFICER */}
          <section className="space-y-3 pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-black">11. GRIEVANCE OFFICER</h2>
            <p className="text-gray-900 leading-relaxed">
              If you would like to ask about, make a request relating to, or complain about how We process your information, please contact or email our grievance officer, at the addresse below. Our grievance officer will attempt to expeditiously redress your grievances.
            </p>
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-sm text-gray-900">
              <p>For any request, complain, feedback or grievances, please contact: <a href="mailto:support@foodieree.com" className="text-black underline font-semibold">support@foodieree.com</a></p>
            </div>
          </section>

          {/* 12. CHANGES TO THE PRIVACY POLICY */}
          <section className="space-y-3 pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-black">12. CHANGES TO THE PRIVACY POLICY</h2>
            <p className="text-gray-900 leading-relaxed">
              We reserve the right to update / modify, from time to time, this Policy to reflect changes to our Information practices. Any changes will be effective immediately upon the posting of the revised Policy on the Platform. If we make any material changes, we will notify you by email (sent to the e-mail address specified in your account) or by means of a notice on the Foodieree App prior to the change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices. Your use of the Foodieree App or availing the Services after an updated Policy becomes effective will indicate your acceptance of the updated Policy.
            </p>
          </section>
        </article>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
