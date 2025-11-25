"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface EbookCardProps {
  product: {
    id: string;
    title: string;
    author: string;
    price: number;
    coverUrl: string;
    description: string;
    paymentLink: string;
  };
}

export default function EbookCard({ product }: Readonly<EbookCardProps>) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {/* Cover Image */}
      <Link
        href={`/books/${product.id}`}
        className="block relative h-48 bg-gray-100"
      >
        <Image
          src={product.coverUrl || "/placeholder.svg?height=192&width=128"}
          alt={product.title}
          fill
          className="object-cover"
        />
      </Link>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/books/${product.id}`}>
            <h3 className="font-semibold text-gray-900 hover:text-gray-700 line-clamp-2">
              {product.title}
            </h3>
          </Link>
          <span className="text-sm font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded">
            {product.price.toFixed(2)}XAF
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-2">par {product.author}</p>

        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Action Button */}
        <a
          href={product.paymentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          Acheter
        </a>
      </div>
    </div>
  );
}
