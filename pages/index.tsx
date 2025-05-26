import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <>
      <Head>
        <title>FM – Fusion Mail</title>
        <meta
          name="description"
          content="Organize your inbox with ease. Fusion Mail is your AI-powered assistant for managing and sorting emails effortlessly."
        />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-b from-white to-secondary-50 dark:from-secondary-900 dark:to-secondary-900/50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="flex items-center space-x-4 mb-8">
                <Logo size="lg" />
                <div className="h-8 w-px bg-secondary-200 dark:bg-secondary-700" />
                <span className="text-sm font-medium text-secondary-600 dark:text-secondary-400">
                  AI-Powered Email Management
                </span>
              </div>
              <h1 className="leading-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                  Email Experience
                </span>
              </h1>
              <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-xl">
                Take control of your inbox with AI-powered email management. Sort, prioritize, and respond to emails effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/install" className="btn-primary group">
                  <span>Get Started Free</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/features" className="btn-secondary group">
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-secondary-800 bg-gradient-to-br from-primary-400 to-primary-600"
                    />
                  ))}
                </div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">
                  Join <span className="font-semibold text-primary-600 dark:text-primary-400">1,000+</span> professionals
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/50 dark:to-primary-800/50 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white dark:bg-secondary-800 rounded-2xl shadow-xl p-6">
                <div className="h-full flex flex-col">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div className="h-8 bg-secondary-100 dark:bg-secondary-700 rounded animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-secondary-100 dark:bg-secondary-700 rounded w-3/4"></div>
                      <div className="h-4 bg-secondary-100 dark:bg-secondary-700 rounded w-1/2"></div>
                    </div>
                    <div className="h-24 bg-primary-50 dark:bg-primary-900/30 rounded-lg p-4">
                      <div className="h-4 bg-primary-200 dark:bg-primary-800 rounded w-1/4 mb-2"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-primary-200 dark:bg-primary-800 rounded w-full"></div>
                        <div className="h-3 bg-primary-200 dark:bg-primary-800 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-900/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Fusion Mail?</h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Experience the future of email management with our powerful features
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Sorting",
                description: "Automatically categorize and prioritize your emails using advanced AI algorithms.",
                icon: "🤖",
              },
              {
                title: "Smart Templates",
                description: "Create and use intelligent email templates that adapt to your writing style.",
                icon: "📝",
              },
              {
                title: "Priority Inbox",
                description: "Focus on what matters most with our intelligent priority system.",
                icon: "🎯",
              },
              {
                title: "Analytics Dashboard",
                description: "Get insights into your email habits and improve your productivity.",
                icon: "📊",
              },
              {
                title: "Secure & Private",
                description: "Your data is encrypted and protected with enterprise-grade security.",
                icon: "🔒",
              },
              {
                title: "Cross-Platform",
                description: "Access your organized inbox from any device, anywhere.",
                icon: "🌐",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-4">Ready to Transform Your Inbox?</h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Join thousands of professionals who have already revolutionized their email management with Fusion Mail.
            </p>
            <Link href="/install" className="btn bg-white text-primary-600 hover:bg-primary-50">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
