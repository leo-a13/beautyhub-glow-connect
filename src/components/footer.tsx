import { MessageCircle, Facebook, Instagram, Twitter } from "lucide-react";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-warmgray-900 text-white">
      <div className="container max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-2xl mb-4 font-bold text-purple-400">BeautyHub</div>
            <p className="text-warmgray-300 mb-4 max-w-md">
              Your trusted platform to discover and connect with the best beauty professionals across Africa. 
              Find top-rated salons, nail artists, and beauty specialists near you.
            </p>
            <div className="flex items-center space-x-4">
                <Link href="#" className="text-warmgray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                <Link href="#" className="text-warmgray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                <Link href="#" className="text-warmgray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-warmgray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-warmgray-300 hover:text-white transition-colors">Add Your Salon</Link></li>
              <li><Link href="#" className="text-warmgray-300 hover:text-white transition-colors">Beauty Tips</Link></li>
              <li><Link href="#" className="text-warmgray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-warmgray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-warmgray-300 hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="#" className="text-warmgray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warmgray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-warmgray-400 text-sm">
              &copy; {new Date().getFullYear()} BeautyHub. All rights reserved.
            </p>
            
            <div className="flex items-center mt-4 md:mt-0">
              <MessageCircle className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-warmgray-300 text-sm">
                WhatsApp Support: +237 6XX XXX XXX
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
