import { href, Link } from "react-router-dom";
import logo from "../assets/logo2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Products",
      links: [
        { label: "iPhone", path: "/" },
        { label: "Accessories", path: "/" },
        { label: "Service", path: "/" },
        { label: "Support", path: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/" },
        { label: "Careers", path: "/" },
        { label: "Press", path: "/" },
        { label: "News", path: "/" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact", path: "/" },
        { label: "Help Center", path: "/" },
        { label: "Warranty", path: "/" },
        { label: "Returns", path: "/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", path: "/" },
        { label: "Terms of Service", path: "/" },
        { label: "Cookie Policy", path: "/" },
        { label: "Disclaimer", path: "/" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-facebook-icon lucide-facebook"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      pathname: "https://web.facebook.com/meas.reaksa.2025",
    },
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-instagram-icon lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      pathname: "https://www.instagram.com/meas.reaksa/",
    },
    {
      name: "Github",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-github-icon lucide-github"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      pathname: "https://github.com/SA1946",
    },
    {
      name: "YouTube",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-youtube-icon lucide-youtube"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      ),
      pathname: "https://t.me",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top  */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand  */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logo} alt="Logo" className="h-20 w-auto mr-4" />
              <span className="text-2xl font-bold">SynsaStore</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your trusted partner for premium smartphones and accessories. We
              bring you the latest technology with exceptional service and
              support.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({name , pathname , icon}) => (
                <a
                  key={name}
                  href={pathname}
                  target="_blank"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={name}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links  */}
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-6 text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* StayUpdate */}
        <div className="bg-gradient-to-r from-blue-600/15 to-purple-600/5 rounded-3xl p-8 mb-12 border border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest news about new products, exclusive deals, and tech
              updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                onClick={() => (window.location.pathname = "/")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* at the bottom  */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} SynsaStore. All rights reserved.
            </div>

            {/* Payment */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex space-x-2">
                {["VisaCard", "Wing", "ABA", "ACLEDA"].map((method) => (
                  <div
                    key={method}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-xs font-medium"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating bg in the footer*/}
      <div className="absolute top-10 right-10 w-24 h-24 bg-blue-500/25 rounded-full blur-xl animate-pulse " />
      <div
        className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
    </footer>
  );
};

export default Footer;
