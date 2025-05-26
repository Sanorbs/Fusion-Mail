import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Install() {
  const downloadOptions = [
    {
      name: "Chrome Extension",
      description: "Install ZEMS directly in your Chrome browser",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C8.21 0 4.8 1.76 2.4 4.4l4.8 4.8c.6-1.2 1.8-2 3.2-2h8v-4H12zm-4.8 4.8L2.4 4.4C1.6 5.2 1 6.4 1 7.6v8.8c0 1.2.6 2.4 1.4 3.2l4.8-4.8c-.6-1.2-.6-2.6 0-3.8zm4.8 4.8c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2-1-2.2-2.2-2.2zm8 0h-4.8c-.6 1.2-1.8 2-3.2 2s-2.6-.8-3.2-2H2.4c1.4 2.4 4 4 6.8 4h8c2.8 0 5.4-1.6 6.8-4l-4.8-4.8c-.6 1.2-1.8 2-3.2 2z" />
        </svg>
      ),
      link: "#",
      buttonText: "Add to Chrome",
    },
    {
      name: "Firefox Add-on",
      description: "Get ZEMS for Firefox browser",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
        </svg>
      ),
      link: "#",
      buttonText: "Add to Firefox",
    },
    {
      name: "Desktop App",
      description: "Download ZEMS for Windows, Mac, or Linux",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm0 2v16h16V4H4zm2 2h12v12H6V6zm2 2v8h8V8H8z" />
        </svg>
      ),
      link: "#",
      buttonText: "Download",
    },
  ];

  return (
    <>
      <Head>
        <title>Install ZEMS – Get Started with Zero Email Management System</title>
        <meta
          name="description"
          content="Download and install ZEMS to transform your email experience. Available for Chrome, Firefox, and desktop platforms."
        />
      </Head>
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container-custom text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Install ZEMS and Transform Your Email Experience
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Choose your preferred platform and get started with ZEMS in minutes.
            Our AI-powered email management system is available across all major platforms.
          </p>
        </section>

        {/* Download Options */}
        <section className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloadOptions.map((option) => (
              <div
                key={option.name}
                className="bg-white dark:bg-secondary-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                  {option.description}
                </p>
                <Link
                  href={option.link}
                  className="btn-primary w-full justify-center"
                >
                  {option.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Installation Guide */}
        <section className="container-custom mt-20">
          <div className="bg-secondary-50 dark:bg-secondary-800/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Installation Guide
            </h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">Browser Extension</h3>
                  <ol className="list-decimal list-inside space-y-3 text-secondary-600 dark:text-secondary-300">
                    <li>Click the "Add to Chrome" or "Add to Firefox" button above</li>
                    <li>Confirm the installation in your browser's prompt</li>
                    <li>Sign in to your ZEMS account or create a new one</li>
                    <li>Grant necessary permissions when prompted</li>
                    <li>Start using ZEMS in your browser!</li>
                  </ol>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">Desktop Application</h3>
                  <ol className="list-decimal list-inside space-y-3 text-secondary-600 dark:text-secondary-300">
                    <li>Download the installer for your operating system</li>
                    <li>Run the installer and follow the setup wizard</li>
                    <li>Launch ZEMS and sign in to your account</li>
                    <li>Connect your email accounts</li>
                    <li>Customize your preferences and start managing emails!</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="container-custom mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you get started with ZEMS.
            Contact us for any installation or setup assistance.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Support
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
} 