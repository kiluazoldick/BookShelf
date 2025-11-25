"use client";

import Link from "next/link";
import { Mail, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">BookShelf</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Votre bibliothèque numérique. Des e-books de qualité,
                accessibles instantanément.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Boutique
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Catégories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Centre d&apos;Aide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Mentions Légales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Confidentialité
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-3">
                Recevez nos nouvelles recommandations.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 rounded-lg text-gray-900 text-sm border-none focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button className="bg-white text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>&copy; 2025 BookShelf. Tous droits réservés.</p>

            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
