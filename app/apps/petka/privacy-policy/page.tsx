export default function PetkaAppPrivacyPolicyPage() {
  return (
    <div className="max-w-2xl mx-auto mt-12">
      <article className="leading-8">
        <div className="mb-11">
          <h1 className="font-mono font-bold text-4xl">Privacy Policy for Petka</h1>
          <div className="flex flex-col md:flex-row justify-between gap-1 mt-3 md:items-center">
            <span className="text-xs">Effective Date: 12. 07. 2025</span>
            <span className="text-xs">Contact: Ziga Krasovec — zkrasovec@gmail.com</span>
          </div>
        </div>
        <hr className="border-white/50 dark:border-white/25 my-7" />
        <p>
          This Privacy Policy describes how the Petka mobile application (“Petka”, “we”, “our”, or “us”) collects, uses,
          and protects user data. Petka is a Slovenian-language word game inspired by Wordle. While the game does not
          require user authentication or login, certain data is collected to enable gameplay features and improve the
          overall user experience.
        </p>
        <hr className="border-white/50 dark:border-white/25 mt-12 mb-12" />
        <p>
          <span className="font-bold">1. Information We Collect</span>
          <br />
          Although Petka does not require users to create an account or authenticate, users are required to select a
          nickname before they can play. This nickname is sent to our backend and stored as part of the user profile. In
          addition to the nickname, we collect the following data associated with a randomly generated unique user ID:
        </p>
        <ul>
          <li>• App events (e.g. game started, word guessed, stats viewed)</li>
          <li>• Errors and crash reports</li>
          <li>• Device type, OS version, and platform metadata</li>
        </ul>{' '}
        <p>
          No personally identifiable information (PII) is collected (such as name, email, location, or contact info).
        </p>
        <hr className="border-white/50 dark:border-white/25 mt-12 mb-12" />
        <p>
          <span className="font-bold">2. How We Use the Information</span> <br />
          The collected data is used solely for the following purposes:
        </p>
        <ul>
          <li>• Enabling gameplay features (e.g. tracking progress or statistics)</li>
          <li>• Improving app performance and stability</li>
          <li>• Debugging errors and monitoring system health</li>
          <li>
            • Understanding user behavior to guide future development We do not use the data for advertising purposes,
            and it is never sold to third parties.
          </li>
        </ul>
        <hr className="border-white/50 dark:border-white/25 mt-12 mb-12" />
        <p>
          <span className="font-bold">3. Data Hosting and Third-Party Services</span> <br />
          We use the following trusted third-party services to support Petka&apos;s functionality:
        </p>
        <ul>
          <li>• Convex — for backend data management (e.g. storing nicknames, game progress, and scores)</li>
          <li>• PostHog — for product analytics and feature flag tracking</li>
          <li>
            • Sentry — for crash and error reporting These services follow modern security practices, including
            encryption and access controls, to protect user data.
          </li>
        </ul>
        <hr className="border-white/50 dark:border-white/25 mt-12 mb-12" />
        <p>
          <span className="font-bold">4. Your Rights and Choices</span> <br />
          Since data is stored under a pseudonymous user ID (not tied to your real identity), access and deletion
          requests are limited. However, if you would like to request data deletion or raise any concerns, you can
          contact us directly:
          <p>Ziga Krasovec</p>
          <p>📧 zkrasovec@gmail.com</p>
          We will do our best to accommodate your request.
        </p>
        <hr className="border-white/50 dark:border-white/25 mt-12 mb-12" />
        <p>
          <span className="font-bold">5. Changes to This Policy</span> <br />
          We may update this policy from time to time. Changes will be posted in the app or through appropriate
          communication channels. Continued use of the app constitutes acceptance of the revised policy.
        </p>
      </article>
    </div>
  );
}
