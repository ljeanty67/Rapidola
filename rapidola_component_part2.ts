// This is the continuation of components/RapiDolaWebsite.tsx
// Add this after the desktop navigation section

                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`font-medium transition-colors ${
                    activePage === item.id ? 'font-semibold' : ''
                  }`}
                  style={{ 
                    color: activePage === item.id ? '#1E88E5' : '#1C1C1E'
                  }}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => setActivePage('contact')}
                className="px-6 py-2 font-semibold rounded-lg transition-all"
                style={{ backgroundColor: '#1E88E5', color: 'white' }}
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" style={{ color: '#1C1C1E' }} />
              ) : (
                <Menu className="h-6 w-6" style={{ color: '#1C1C1E' }} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 font-medium ${
                    activePage === item.id ? 'font-semibold' : ''
                  }`}
                  style={{ 
                    color: activePage === item.id ? '#1E88E5' : '#1C1C1E'
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {activePage === 'home' && <HomePage />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'how-it-works' && <HowItWorksPage />}
        {activePage === 'faq' && <FAQPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img 
                src="https://i.postimg.cc/J4h7mgCy/image.png" 
                alt="RapiDola" 
                className="h-10 mb-4"
              />
              <p className="text-gray-600 mb-4">
                Fast, secure digital dollar transfers for Haiti and the diaspora.
              </p>
              <p className="text-sm text-gray-500">
                rapidola.io
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4" style={{ color: '#1C1C1E' }}>
                Company
              </h3>
              <div className="space-y-2">
                {['About', 'How It Works', 'FAQ'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActivePage(item.toLowerCase().replace(' ', '-'))}
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4" style={{ color: '#1C1C1E' }}>
                Connect
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActivePage('contact')}
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </button>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Support
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2026 RapiDola. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RapiDolaWebsite;