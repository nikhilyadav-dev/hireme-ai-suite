import Header from "@/components/custom/header";
import { UserButton } from "@clerk/clerk-react";
import React from "react";
import {
  Sparkles,
  Wand2,
  Share2,
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  FileText,
} from "lucide-react";

const steps = [
  {
    icon: Wand2,
    title: "Describe your experience",
    description:
      "Answer a few guided prompts about your roles, skills, and goals. No blank page, no guesswork.",
  },
  {
    icon: FileText,
    title: "Let AI shape it",
    description:
      "Our AI turns your answers into polished, recruiter-ready bullet points and summaries you can edit freely.",
  },
  {
    icon: Share2,
    title: "Share & apply",
    description:
      "Export a clean PDF or share a live link, then track it as you send it out to your next opportunity.",
  },
];

const logos = [
  {
    label: "TechCrunch",
    viewBox: "0 0 132 29",
    path: "M39.4555 5.17846C38.9976 3.47767 37.6566 2.13667 35.9558 1.67876C32.8486 0.828369 20.4198 0.828369 20.4198 0.828369C20.4198 0.828369 7.99099 0.828369 4.88379 1.64606C3.21571 2.10396 1.842 3.47767 1.38409 5.17846C0.566406 8.28567 0.566406 14.729 0.566406 14.729C0.566406 14.729 0.566406 21.2051 1.38409 24.2796C1.842 25.9804 3.183 27.3214 4.88379 27.7793C8.0237 28.6297 20.4198 28.6297 20.4198 28.6297C20.4198 28.6297 32.8486 28.6297 35.9558 27.812C37.6566 27.3541 38.9976 26.0131 39.4555 24.3123C40.2732 21.2051 40.2732 14.7618 40.2732 14.7618C40.2732 14.7618 40.3059 8.28567 39.4555 5.17846Z",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:px-12 lg:py-24">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 py-1 pl-1 pr-4 text-sm text-gray-700">
              <span className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                <Sparkles className="h-3 w-3" />
                AI
              </span>
              <span className="font-medium">Supported resume builder</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Your next job starts with{" "}
              <span className="text-primary">a resume that works</span>
            </h1>

            <p className="mt-5 max-w-lg text-lg text-gray-500">
              Answer a few prompts, and our AI turns them into a polished,
              recruiter-ready resume — no formatting headaches, no staring at a
              blank page.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-primary/30"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-base font-medium text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-100"
              >
                <PlayCircle className="h-5 w-5" />
                Watch video
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Free to start
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                No design skills needed
              </div>
            </div>
          </div>

          <div className="relative mx-auto h-[380px] w-full max-w-sm">
            <div className="absolute inset-0 -rotate-6 rounded-2xl border border-gray-200 bg-gray-50 shadow-sm" />
            <div className="absolute inset-0 rotate-3 rounded-2xl border border-gray-200 bg-white shadow-md" />
            <div className="absolute inset-0 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/15" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-2.5 w-2/3 rounded bg-gray-800" />
                  <div className="h-2 w-1/3 rounded bg-gray-300" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded bg-gray-200" />
                <div className="h-2 w-5/6 rounded bg-gray-200" />
                <div className="h-2 w-4/6 rounded bg-gray-200" />
              </div>
              <div className="mt-5 space-y-1.5">
                <div className="h-2 w-1/4 rounded bg-primary/40" />
                <div className="h-2 w-full rounded bg-gray-200" />
                <div className="h-2 w-3/4 rounded bg-gray-200" />
              </div>
              <div className="mt-5 space-y-1.5">
                <div className="h-2 w-1/4 rounded bg-primary/40" />
                <div className="h-2 w-5/6 rounded bg-gray-200" />
                <div className="h-2 w-2/3 rounded bg-gray-200" />
              </div>
              <div className="absolute -bottom-4 -right-4 flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                <Sparkles className="h-3.5 w-3.5" />
                AI polished
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED IN */}
      <section className="border-t border-gray-100 bg-gray-50/60 px-4 py-10 lg:px-12">
        <div className="mx-auto max-w-screen-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Featured in
          </span>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-gray-400 grayscale">
            {logos.map((logo) => (
              <svg
                key={logo.label}
                className="h-7 opacity-70 transition hover:opacity-100"
                viewBox={logo.viewBox}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={logo.path} fill="currentColor" />
              </svg>
            ))}
            <span className="text-sm font-medium">Product Hunt</span>
            <span className="text-sm font-medium">Hacker News</span>
            <span className="text-sm font-medium">Indie Hackers</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 text-center lg:px-12 lg:py-24">
        <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
        <p className="mt-2 text-gray-500">
          Go from blank page to finished resume in three simple steps.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 text-left md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm font-semibold text-primary/50">
                0{index + 1}
              </span>
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-10 py-3 text-sm font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-primary/30"
          >
            Get Started Today
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
