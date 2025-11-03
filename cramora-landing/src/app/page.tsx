'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Star, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="font-inter bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-sm sticky top-0 bg-white z-50">
        <h1 className="text-2xl font-bold text-[#493dc6]">Cramora AI</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#benefits" className="hover:text-[#493dc6]">Benefits</a>
          <a href="#how" className="hover:text-[#493dc6]">How it Works</a>
          <a href="#pricing" className="hover:text-[#493dc6]">Pricing</a>
          <a href="#faq" className="hover:text-[#493dc6]">FAQ</a>
        </div>
        <Button className="bg-[#493dc6] hover:bg-[#332b8d] text-white rounded-full px-6">Join Beta</Button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-[#493dc6] to-[#191545] text-white">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold mb-6">
          Study Smarter, Not Harder — with Cramora AI
        </motion.h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-200">
          Your all-in-one AI study companion that creates 1-page cram sheets, predicts exam questions, and quizzes you instantly.
        </p>
        <Button size="lg" className="bg-white text-[#493dc6] font-semibold rounded-full px-10 py-4 hover:bg-gray-100">
          Join the Beta for Free
        </Button>
        <div className="flex justify-center mt-10 space-x-4">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="text-yellow-400 fill-yellow-400" />)}
          <p className="ml-2">Loved by 100+ students</p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 text-center bg-gray-50">
        <p className="uppercase text-sm tracking-widest text-gray-500 mb-6">Trusted by Students From</p>
        <div className="flex flex-wrap justify-center gap-10 opacity-70">
          {['Harvard', 'Marist', 'Stanford', 'MIT', 'Yale'].map(uni => (
            <span key={uni} className="text-xl font-semibold">{uni}</span>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#493dc6] mb-12">Why Students Love Cramora</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['AI Cram Sheets', 'Smart Question Generator', 'Instant Feedback'].map((title, i) => (
            <Card key={i} className="shadow-md border-none">
              <CardContent className="p-6">
                <Sparkles className="w-10 h-10 text-[#493dc6] mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">{title}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 bg-gray-50 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#493dc6] mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['Upload Notes', 'Generate Cram Sheet', 'Take Smart Quiz'].map((step, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="text-[#493dc6] text-5xl font-bold mb-4">{i + 1}</div>
                <h3 className="font-semibold text-xl mb-2">{step}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#493dc6] mb-12">Cramora vs Others</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[600px] mx-auto border-collapse border border-gray-200">
            <thead className="bg-[#493dc6] text-white">
              <tr>
                <th className="py-3 px-6 text-left">Feature</th>
                <th className="py-3 px-6">Cramora</th>
                <th className="py-3 px-6">Others</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['AI Cram Sheets', true, false],
                ['Predicted Exam Questions', true, false],
                ['Instant Feedback Quizzes', true, false],
                ['File-Based Study Hub', true, false],
                ['Free Beta Access', true, false]
              ].map(([feature, cramora, others], i) => (
                <tr key={i} className="border-t border-gray-200">
                  <td className="py-3 px-6 text-left">{feature}</td>
                  <td className="py-3 px-6">{cramora ? <Check className="text-green-500 mx-auto" /> : ''}</td>
                  <td className="py-3 px-6">{others ? <Check className="text-green-500 mx-auto" /> : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-[#493dc6] mb-6">Simple Pricing</h2>
        <p className="text-gray-600 mb-10">Cramora AI is <strong>100% free during beta</strong>. Join today and start studying smarter!</p>
        <Button size="lg" className="bg-[#493dc6] text-white rounded-full px-10 py-4 hover:bg-[#332b8d]">Join Free Beta</Button>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#493dc6] mb-12">What Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['“Cramora saved my finals week!”', '“AI-generated notes are a game changer.”', '“Feels like ChatGPT for studying.”'].map((quote, i) => (
            <Card key={i} className="shadow-sm border-none">
              <CardContent className="p-6 italic">{quote}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50 px-6">
        <h2 className="text-4xl font-bold text-[#493dc6] text-center mb-12">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            ['What is Cramora AI?', 'An AI-powered study companion that helps you prepare for exams efficiently.'],
            ['Is it really free?', 'Yes! Cramora AI is free during its beta phase.'],
            ['Can I upload multiple files?', 'Yes, you can upload multiple study files to your Cram Hub.']
          ].map(([q, a], i) => (
            <div key={i} className="bg-white shadow-sm rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">{q}</h3>
              <p className="text-gray-600">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-r from-[#493dc6] to-[#332b8d] text-white">
        <h2 className="text-4xl font-bold mb-6">Join 100+ Students Already Using Cramora</h2>
        <p className="mb-8 text-lg">Start studying smarter today — free during beta.</p>
        <Button size="lg" className="bg-white text-[#493dc6] rounded-full px-10 py-4 font-semibold hover:bg-gray-100">Join Free Beta</Button>
      </section>

      {/* Footer */}
      <footer className="bg-[#191545] text-white py-10 text-center">
        <p>&copy; {new Date().getFullYear()} Cramora AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
