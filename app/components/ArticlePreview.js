"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArticlePreview() {
  const [showShare, setShowShare] = useState(false);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <article className="bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl grid md:grid-cols-2">
        {/* Article Image */}
        <div className="relative h-48 md:h-auto">
          <Image
            src="/images/drawers.jpg"
            alt="Furniture"
            fill
            className="md:rounded-l-lg object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="p-6 flex flex-col gap-4">
          <h1 className="text-gray-800 font-bold text-xl">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="text-gray-500">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>

          {/* Author & Share */}
          <div className="flex items-center justify-between mt-4 relative">
            {/* Author Info */}
            <div className="flex items-center space-x-4">
              <Image
                src="/images/avatar-michelle.jpg"
                alt="Michelle Appleton"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-gray-800 font-semibold">Michelle Appleton</p>
                <p className="text-gray-500 text-sm">28 Jun 2020</p>
              </div>
            </div>

            {/* Share Button */}
            <button
              onClick={() => setShowShare(!showShare)}
              className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full hover:bg-gray-300 transition relative"
            >
              <Image
                src="/images/icon-share.svg"
                alt="Share"
                width={20}
                height={20}
              />
            </button>

            {/* Share Section */}
            {showShare && (
              <div className="absolute bottom-16 right-0 bg-gray-800 text-white p-3 rounded-lg flex items-center gap-3 shadow-lg">
                <p className="uppercase text-xs tracking-wider">Share</p>
                <Link href="#">
                  <Image
                    src="/images/icon-facebook.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/icon-twitter.svg"
                    alt="Twitter"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/icon-pinterest.svg"
                    alt="Pinterest"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
