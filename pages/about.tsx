import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const values = [
    {
      title: "Innovation",
      description: "Constantly pushing boundaries to revolutionize email management through AI and machine learning.",
      icon: "💡",
    },
    {
      title: "User-Centric",
      description: "Every feature and decision is made with our users' needs and experience in mind.",
      icon: "👥",
    },
    {
      title: "Security",
      description: "Enterprise-grade security and privacy protection for all user data.",
      icon: "🔒",
    },
    {
      title: "Simplicity",
      description: "Making complex email management simple and intuitive for everyone.",
      icon: "✨",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      image: "/team/sarah.jpg",
      bio: "Former Google engineer with 10+ years of experience in AI and email systems.",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-founder",
      image: "/team/michael.jpg",
      bio: "AI researcher and software architect with expertise in natural language processing.",
    },
    {
      name: "Emily Park",
      role: "Head of Product",
      image: "/team/emily.jpg",
      bio: "Product leader with experience at Microsoft and Slack.",
    },
    {
      name: "David Kim",
      role: "Lead Engineer",
      image: "/team/david.jpg",
      bio: "Full-stack developer specializing in scalable cloud architectures.",
    },
  ];

  return (
    <>
      <Head>
        <title>About Fusion Mail – Our Mission and Team</title>
        <meta
          name="description"
          content="Learn about Fusion Mail, our mission to transform email management, and the team behind the innovation."
        />
      </Head>
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container-custom text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary-600 dark:text-primary-400">Fusion Mail</span>
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
            We're on a mission to transform how people manage their emails, making it smarter, faster, and more efficient through the power of AI.
          </p>
        </section>

        {/* Mission Section */}
        <section className="container-custom mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300">
                At Fusion Mail, we believe that email management shouldn't be a burden. Our mission is to empower professionals and teams to take control of their inboxes through intelligent automation and AI-driven insights.
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-300">
                We're building the future of email management, where technology works seamlessly to help you focus on what matters most.
              </p>
              <Link href="/contact" className="btn-primary inline-flex">
                Join Our Mission
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/50 dark:to-primary-800/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">📧</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary-50 dark:bg-secondary-900/50 py-20 mb-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container-custom mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 bg-secondary-100 dark:bg-secondary-700">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">
                    👤
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-3">
                    {member.role}
                  </p>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-4">Join Us in Transforming Email</h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Whether you're looking to use Fusion Mail or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/install" className="btn bg-white text-primary-600 hover:bg-primary-50">
                Try Fusion Mail Free
              </Link>
              <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
