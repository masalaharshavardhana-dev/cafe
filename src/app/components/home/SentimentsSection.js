'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Sparkles, Wand2 } from 'lucide-react';

export default function SentimentsSection() {
  return (
    <section className="py-32 px-8 md:px-24 bg-latte overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Image Side */}
        <div className="relative w-full md:w-1/2 aspect-[3/4] md:aspect-auto md:h-[800px] rounded-[3rem] overflow-hidden group border border-latte/10">
          <Image 
            src="/greetings.jpg"
            alt="Paperdew Greeting Cards"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-60" />
          
          <div className="absolute bottom-12 left-12 right-12 p-8 glass rounded-3xl border border-white/10 backdrop-blur-md">
            <p className="text-latte/80 text-sm italic font-light">
              "Every card tells a story, every sip holds a memory."
            </p>
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-matte-black/10 rounded-full text-matte-black text-xs tracking-widest uppercase">
              <Sparkles size={14} />
              <span>Sentiments by Paperdew</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif text-matte-black leading-tight">
              Coffee & <br /> Conversations
            </h2>
            <p className="text-xl text-matte-black/60 font-light leading-relaxed max-w-xl">
              Celebrate your most cherished moments at Cà phê Bistro. Our curated collection of Paperdew greeting cards is here to help you find the perfect words for your loved ones while you enjoy your favorite brew.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            <div className="p-8 rounded-3xl bg-matte-black/5 backdrop-blur-md border border-matte-black/5 space-y-4 hover:border-matte-black/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-matte-black/5 flex items-center justify-center text-matte-black">
                <Heart size={24} />
              </div>
              <h4 className="text-xl font-serif text-matte-black">Anniversary Special</h4>
              <p className="text-sm text-matte-black/50 font-light">Elegantly crafted cards for love that lasts a lifetime.</p>
            </div>
            <div className="p-8 rounded-3xl bg-matte-black/5 backdrop-blur-md border border-matte-black/5 space-y-4 hover:border-matte-black/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-matte-black/5 flex items-center justify-center text-matte-black">
                <Wand2 size={24} />
              </div>
              <h4 className="text-xl font-serif text-matte-black">Birthday Magic</h4>
              <p className="text-sm text-matte-black/50 font-light">Vibrant and thoughtful cards for your favorite people.</p>
            </div>
          </div>


        </div>
      </div>
      
      {/* Background Accents */}
      <div className="absolute -top-64 -right-64 w-128 h-128 bg-matte-black/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
