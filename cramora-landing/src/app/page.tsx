'use client';
import Image from "next/image";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Star, Sparkles, FileText, Target, Brain } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="font-inter bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/cramora-logo.png"
            alt="Cramora AI Logo"
            width={180}
            height={50}
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {[
            { name: "Home", href: "#home" },
            { name: "Features", href: "#features" },
            { name: "Why Us?", href: "#why-us" },
            { name: "Pricing", href: "#pricing" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "FAQ", href: "#faq" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#493dc6] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button className="bg-[#493dc6] hover:bg-[#4438b9] text-white rounded-full px-6 py-2 font-semibold">
          Try Cramora
        </Button>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="text-center py-32 px-6 bg-white text-[#191545]"
      >
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className="w-5 h-5 text-[#493DC6] fill-[#493DC6]"
            />
          ))}
          <span className="ml-2 text-sm font-medium text-[#191545]">
            Top rated by beta testers
          </span>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto"
        >
          Cramora AI is the fastest way to prep for an exam, even the night before
        </motion.h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-600">
          Your AI-powered go to study tool that builds 1-page cram sheets,
          predicts exam questions, and tests you instantly.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-[#493DC6] hover:bg-[#4438b9] text-white font-semibold rounded-full px-10 py-4 transition-colors duration-200"
        >
          Try Now Free
        </Button>
      </section>

      
      {/* Features Section */}
      <section id="features" className="py-28 px-6 bg-[#493DC6] text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Powerful Features Built for Students</h2>
          <p className="text-gray-200 mb-16 max-w-2xl mx-auto text-lg">
            Everything you need to cram smarter, retain faster, and walk into exams feeling confident.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 – Cram Hubs */}
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm hover:-translate-y-2 hover:bg-white/15 transition-all duration-300 shadow-lg">
              <div className="flex justify-center items-center w-14 h-14 bg-white/20 rounded-xl mx-auto mb-6">
                <Sparkles className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cram Hubs</h3>
              <p className="text-base text-gray-200 leading-relaxed">
                Dump your notes, slides, and PDFs — our AI instantly finds the 20% of content that covers 80% of your exam.
              </p>
            </div>

            {/* Feature 2 – 1-Page AI Summaries */}
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm hover:-translate-y-2 hover:bg-white/15 transition-all duration-300 shadow-lg">
              <div className="flex justify-center items-center w-14 h-14 bg-white/20 rounded-xl mx-auto mb-6">
                <FileText className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1-Page AI Summaries</h3>
              <p className="text-base text-gray-200 leading-relaxed">
                Turn 50+ pages of notes into a one-page, bullet-point cram sheet — perfect for last-minute review.
              </p>
            </div>

            {/* Feature 3 – Predicted Test Questions */}
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm hover:-translate-y-2 hover:bg-white/15 transition-all duration-300 shadow-lg">
              <div className="flex justify-center items-center w-14 h-14 bg-white/20 rounded-xl mx-auto mb-6">
                <Target className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predicted Test Questions</h3>
              <p className="text-base text-gray-200 leading-relaxed">
                Get AI-generated questions based on your notes so you can focus on what’s most likely to be on the exam.
              </p>
            </div>

            {/* Feature 4 – Quizlet-Style Practice */}
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm hover:-translate-y-2 hover:bg-white/15 transition-all duration-300 shadow-lg">
              <div className="flex justify-center items-center w-14 h-14 bg-white/20 rounded-xl mx-auto mb-6">
                <Brain className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quizlet-Style Practice</h3>
              <p className="text-base text-gray-200 leading-relaxed">
                Test yourself with fast, interactive questions and instant feedback — active recall made effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section
        id="why-us"
        className="py-28 px-6 bg-gray-50 text-center text-[#191545]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Why Choose Cramora?</h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            Here’s how Cramora stacks up against popular study tools like Chegg, Notion AI, and Quizlet.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto pb-12">
            <table className="min-w-[800px] mx-auto border-collapse rounded-xl overflow-hidden shadow-md">
              <thead className="bg-[#493DC6] text-white">
                <tr>
                  <th className="py-4 px-6 text-left text-lg font-semibold">Feature</th>
                  <th className="py-4 px-6 text-lg font-semibold">Cramora AI</th>
                  <th className="py-4 px-6 text-lg font-semibold">Chegg</th>
                  <th className="py-4 px-6 text-lg font-semibold">Notion AI</th>
                  <th className="py-4 px-6 text-lg font-semibold">Quizlet</th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-700">
              {[
                ['AI-Powered Study Hubs (Cram Hubs)', true, false, false, false],
                ['1-Page AI Summaries', true, false, true, false],
                ['Predicted Test Questions', true, false, false, false],
                ['Active Recall Practice (Quizlet-Style)', true, false, false, true],
                ['All-in-One Study Workflow', true, false, false, false],
                ['Pricing', 'Free', '$14.95/mo', '$10/mo', '$7.99/mo'],
              ].map(([feature, cramora, chegg, notion, quizlet], i) => (
                <tr
                  key={i}
                  className={`border-t border-gray-200 ${
                    i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <td className="py-4 px-6 text-left font-medium">{feature}</td>

                  {[cramora, chegg, notion, quizlet].map((val, j) => (
                    <td key={j} className="py-4 px-6 text-center">
                      {typeof val === 'boolean' ? (
                        val ? (
                          <Check className="text-green-500 w-5 h-5 mx-auto" />
                        ) : (
                          <span className="text-red-400 font-bold text-lg">×</span>
                        )
                      ) : (
                        <span className="text-gray-700 font-medium">{val}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              </tbody>
            </table>
          </div>

          {/* Why Cramora Message */}
          <p className="mt-5 text-2xl font-semibold text-[#191545] max-w-3xl mx-auto">
            Because <span className="text-[#493DC6]">Cramora</span> is built for last-minute students who don’t have time to waste. Just drop your notes and walk into your exam prepared.
          </p>

        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-[#493DC6] mb-4">Simple Pricing</h2>
          <p className="text-gray-600 mb-16 text-lg">
            Since we’re in <span className="font-semibold text-[#493DC6]">beta</span>, all premium features are <strong>100% free — for now.</strong>
          </p>

          {/* Pricing Card */}
          <div className="bg-white rounded-3xl shadow-lg p-10 max-w-md mx-auto border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-3xl font-bold text-[#191545] mb-2">Free (Beta Access)</h3>
            <p className="text-gray-500 mb-6">Get every premium feature without paying a cent during beta.</p>
            <div className="text-5xl font-extrabold text-[#493DC6] mb-8">$0<span className="text-lg font-medium text-gray-500">/month</span></div>

            <ul className="text-left space-y-4 mb-8">
              {[
                'AI-Powered Cram Hubs',
                '1-Page AI Summaries',
                'Predicted Test Questions',
                'Quizlet-Style Practice',
                'Unlimited File Uploads',
                'Access to Future Premium Tools',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="bg-[#493DC6] hover:bg-[#3b34a0] text-white rounded-full px-10 py-4 font-semibold w-full"
            >
              Join Free Beta
            </Button>
          </div>
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
