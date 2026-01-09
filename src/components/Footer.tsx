export function Footer() {
  return (
    <footer className="luxury-texture bg-white border-t border-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <img src="/donedeal-academy-logo.jpg" alt="Done Deal Academy" className="w-40 h-auto mb-4 rounded" />
            <p className="text-sm text-gray-600 mb-2">Closing Deals is Just the Beginning!</p>
            <p className="text-sm text-gray-500">Thailand's First Digital-Driven Commercial Leadership Academy</p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4 font-semibold">Contact</h3>
            <p className="text-sm text-gray-600 mb-2">
              <a href="mailto:missdonedeal.dda@gmail.com" className="hover:text-red-600 transition-colors">
                missdonedeal.dda@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-600">
              <a href="tel:0613104694" className="hover:text-red-600 transition-colors">
                061 310 4694
              </a>
            </p>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg mb-4 font-semibold">Follow Us</h3>
            <div className="flex flex-col gap-2">
              <a 
                href="https://www.facebook.com/donedealacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Facebook: Done Deal Academy
              </a>
              <a 
                href="https://www.instagram.com/donedealacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
              >
                Instagram: @donedealacademy
              </a>
              <a 
                href="https://www.tiktok.com/@done.deal.academy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                TikTok: @done.deal.academy
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2025 Done Deal Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-sm text-gray-500">#DoneDealAcademy</span>
            <span className="text-sm text-gray-500">#WhereDealsHappen</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
