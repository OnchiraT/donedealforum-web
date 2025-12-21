export function Footer() {
  return (
    <footer className="luxury-texture bg-white border-t border-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <img src="/logo.png" alt="Done Deal Forum" className="w-32 h-auto mb-4" />
            <p className="text-sm text-gray-600">Done Deal Forum 2025</p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <p className="text-sm text-gray-600 mb-2">info@donedealforum.com</p>
            <p className="text-sm text-gray-600">+66 (0) 2-XXX-XXXX</p>
          </div>
          
          {/* Location */}
          <div>
            <h3 className="text-lg mb-4">Venue</h3>
            <p className="text-sm text-gray-600">Bangkok, Thailand</p>
            <p className="text-sm text-gray-600">25 February 2025</p>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2025 Done Deal Forum. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
