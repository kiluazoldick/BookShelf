"use client";

import { SAMPLE_EBOOKS } from "@/lib/data";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Star, ShoppingCart, Share2, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BookPage() {
  const params = useParams();
  const [book, setBook] = useState<{
    id: string;
    title: string;
    author: string;
    category: string;
    price: number;
    coverUrl: string;
    description: string;
    paymentLink: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement asynchrone
    const bookId = params.id;
    const foundBook = SAMPLE_EBOOKS.find((b) => b.id === bookId);

    if (!foundBook) {
      notFound();
    }

    setBook(foundBook);
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-24 mb-8"></div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
                  <div className="flex gap-3">
                    <div className="flex-1 h-12 bg-gray-200 rounded-lg"></div>
                    <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-24 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 text-sm font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            Retour à la boutique
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Book Cover */}
            <div className="space-y-6">
              <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src={book.coverUrl || "/placeholder.svg"}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex gap-3">
                <a
                  href={book.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Acheter Maintenant
                </a>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Share2 size={18} />
                  Partager
                </button>
              </div>
            </div>

            {/* Book Details */}
            <div className="space-y-6">
              {/* Category */}
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {book.category}
              </span>

              {/* Title & Author */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                  {book.title}
                </h1>
                <p className="text-lg text-gray-600">par {book.author}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">(24 avis)</span>
              </div>

              {/* Price */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-600 text-sm mb-1">Prix</p>
                <p className="text-3xl font-bold text-gray-900">
                  {book.price.toFixed(2)}XAF
                </p>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {book.description}
                </p>
              </div>

              {/* Book Info */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">Format</p>
                  <p className="text-gray-900 font-medium">EPUB, PDF, MOBI</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Auteur</p>
                  <p className="text-gray-900 font-medium">{book.author}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Catégorie</p>
                  <p className="text-gray-900 font-medium">{book.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
