"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gray-50 py-24 px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-xs font-medium text-gray-900 mb-12 tracking-widest">
          (WHAT CLIENTS SAY)
        </h2>

        {/* Quote */}
        <blockquote className="mb-12">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
            &ldquo;{currentTestimonial.quote}&rdquo;
          </p>
        </blockquote>

        {/* Author Info */}
        <div className="flex justify-between items-end border-t border-gray-300 pt-6">
          {/* Left side - Author */}
          <div className="flex items-center space-x-3">
            {/* Avatar placeholder - you can add real avatars later */}
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-xs font-medium">
                {currentTestimonial.author.charAt(0)}
              </span>
            </div>
            <div className="text-left">
              <h3 className="text-xs font-bold text-gray-900 tracking-wide">
                {currentTestimonial.author}
              </h3>
              <p className="text-xs text-gray-600">
                {currentTestimonial.position} — {currentTestimonial.company}
              </p>
            </div>
          </div>

          {/* Right side - Company & Link */}
          <div className="text-right">
            <h4 className="text-sm font-bold text-gray-900 mb-1">
              {currentTestimonial.company}
            </h4>
            <a
              href="#"
              className="text-xs text-gray-900 hover:text-gray-600 underline font-medium transition-colors duration-300"
            >
              {currentTestimonial.caseStudyLink}
            </a>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-900"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
