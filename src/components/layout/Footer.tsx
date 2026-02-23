export function Footer() {
  return (
    <footer className="bg-[#030B1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div>
            <img
              src="/images/t1p-logo.png"
              alt="That 1 Painter"
              className="h-8 w-auto"
            />
            <p className="text-stone text-sm mt-3 max-w-xs">
              Excellence and Kindness — the foundation of everything we do. Professional painting services for your home and business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {['Interior Painting', 'Exterior Painting', 'Cabinet Refinishing', 'Pressure Washing', 'Drywall Repair'].map(service => (
                <li key={service}>
                  <span className="text-sm text-stone hover:text-azure transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-stone">
              <li>
                <a href="tel:+15551234567" className="hover:text-azure transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@that1painter.com" className="hover:text-azure transition-colors">
                  info@that1painter.com
                </a>
              </li>
              <li>134+ Locations Nationwide</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 text-center">
          <p className="text-xs text-granite">
            &copy; {new Date().getFullYear()} That 1 Painter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
