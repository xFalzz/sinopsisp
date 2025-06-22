import { PageTransition } from '@/components/PageTransition';

export default function PrivacyPage() {
  return (
    <PageTransition>
      <div className="container py-12">
        <div className="prose dark:prose-invert max-w-4xl mx-auto">
          <h1>Privacy Policy for sinopsisp</h1>

          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <p>
            At sinopsisp, accessible from sinopsisp.vercel.app, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by sinopsisp and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>

          <h2>Log Files</h2>
          <p>
            sinopsisp follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
          </p>

          <h2>Cookies and Web Beacons</h2>
          <p>
            Like any other website, sinopsisp uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
          </p>

          <h2>Third-Party Privacy Policies</h2>
          <p>
            sinopsisp&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>

          <h2>Online Privacy Policy Only</h2>
          <p>
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in sinopsisp. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>

          <h2>Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </div>
      </div>
    </PageTransition>
  );
} 