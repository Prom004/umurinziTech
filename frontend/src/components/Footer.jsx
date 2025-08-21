import React from 'react';



function Footer() {

    const footerLinks = {
    "Quick Links": ["Home", "About Us", "Services", "Blog"],
    "Legal": ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"],
    "Support": ["Help Center", "Contact Support", "User Manual", "Training Resources"],
    "Government Partners": ["Ministry of ICT", "Rwanda Investigation Bureau", "National Police"]
  };


  return(

    <footer className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-lg mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-indigo-200 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-indigo-800 pt-8 text-center">
            <p className="text-indigo-200 text-sm">
              © 2024 UmurinziTech Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )

}
export default Footer;