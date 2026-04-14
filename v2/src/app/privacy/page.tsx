import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Waterstone Companies",
  description:
    "How Waterstone Companies collects, uses, and protects your information when you use our website and contact form.",
};

function PrivacyList({ children }: { children: ReactNode }) {
  return (
    <ul className="my-5 mb-8 list-disc pl-[calc(1.75rem+0.65rem)] pr-7 py-6 bg-background-secondary border border-border rounded-md text-foreground-muted text-base leading-relaxed marker:text-accent-dark space-y-4 [&>li]:pl-2">
      {children}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <section className="relative min-h-[38vh] flex items-center justify-center px-6 py-20 text-primary-foreground">
        <div className="absolute inset-0" aria-hidden>
          <Image src="/photos/2N4A4450.jpg" alt="" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" aria-hidden />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-label uppercase tracking-widest text-accent-on-inverse/90 mb-3">Legal</p>
          <h1 className="font-serif text-h1 md:text-display">Privacy Policy</h1>
          <p className="mt-4 text-body-lg text-accent-on-inverse">
            How we handle information you share with Waterstone Companies through our website.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto privacy-doc">
          <p className="text-sm text-foreground-muted mb-6">Last updated: October 2025</p>
          <p className="text-body-sm text-foreground-muted leading-relaxed mb-6">
            Waterstone Companies (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is
            committed to protecting your personal information. This Privacy Policy explains how we collect, use, and
            safeguard the information you provide through our website.
          </p>

          <h2 id="collect" className="text-[1.2rem] font-semibold text-foreground mt-6 mb-4">
            1. Information we collect
          </h2>
          <p className="text-body-sm text-foreground-muted leading-relaxed mb-4">
            When you submit an inquiry through our{" "}
            <Link href="/contact" className="text-foreground font-medium underline-offset-2 hover:underline">
              contact form
            </Link>
            , we collect the following information:
          </p>
          <PrivacyList>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your phone number</li>
            <li>Any other details you choose to include in your message</li>
          </PrivacyList>
          <p className="text-body-sm text-foreground-muted leading-relaxed">
            This information is provided voluntarily so that we can respond to your inquiry and share relevant
            information about building your new home.
          </p>

          <h2 id="use" className="text-[1.2rem] font-semibold text-foreground mt-10 mb-4">
            2. How we use your information
          </h2>
          <p className="text-body-sm text-foreground-muted leading-relaxed mb-4">
            We use the personal information you provide to:
          </p>
          <PrivacyList>
            <li>Contact you in response to your inquiry</li>
            <li>Discuss your new home build and better understand your needs</li>
            <li>Pre-qualify your inquiry to determine whether our services are the right fit for your project</li>
            <li>Provide you with relevant information about our homebuilding services</li>
          </PrivacyList>
          <p className="text-body-sm text-foreground-muted leading-relaxed">
            We will only use your information for the purposes for which it was collected, unless required or authorized
            by law.
          </p>

          <h2 id="store" className="text-[1.2rem] font-semibold text-foreground mt-10 mb-4">
            3. How we store and protect your information
          </h2>
          <PrivacyList>
            <li>We take reasonable steps to keep your personal information stored securely.</li>
            <li>We work to protect it from misuse, loss, unauthorized access, alteration, or disclosure.</li>
            <li>Your details are kept in secure systems with appropriate safeguards.</li>
            <li>Only authorized Waterstone Companies team members can access your information.</li>
          </PrivacyList>

          <h2 id="share" className="text-[1.2rem] font-semibold text-foreground mt-10 mb-4">
            4. Sharing your information
          </h2>
          <PrivacyList>
            <li>We do not sell, rent, or trade your personal information.</li>
            <li>
              We may share it with trusted third parties only when necessary to operate our business—for example, CRM or
              email service providers—and only if they agree to keep your information secure and confidential.
            </li>
          </PrivacyList>

          <h2 id="access" className="text-[1.2rem] font-semibold text-foreground mt-10 mb-4">
            5. Accessing and updating your information
          </h2>
          <p className="text-body-sm text-foreground-muted leading-relaxed">
            You have the right to request access to the personal information we hold about you and to request corrections
            if it&apos;s inaccurate or outdated. To do so, please contact us using the details below.
          </p>

          <h2 id="cookies" className="text-[1.2rem] font-semibold text-foreground mt-10 mb-4">
            6. Cookies and website usage
          </h2>
          <p className="text-body-sm text-foreground-muted leading-relaxed">
            Our website may use cookies and similar technologies to improve your browsing experience. You can choose to
            disable cookies through your browser settings, though some parts of the site may not function properly without
            them.
          </p>

          <h2 id="changes" className="text-[1.2rem] font-semibold text-foreground mt-10 mb-4">
            7. Changes to this privacy policy
          </h2>
          <p className="text-body-sm text-foreground-muted leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other
            operational, legal, or regulatory reasons. The updated policy will be posted on this page with the
            &ldquo;Last updated&rdquo; date revised accordingly.
          </p>

          <h2 id="contact" className="text-[1.2rem] font-semibold text-foreground mt-10 mb-4">
            8. Contact us
          </h2>
          <p className="text-body-sm text-foreground-muted leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal
            information, please reach out using the details below.
          </p>
          <p className="text-body-sm text-foreground mt-5 mb-3">
            <strong>Waterstone Companies</strong>
          </p>
          <ul className="my-5 mb-8 list-disc pl-[calc(1.75rem+0.65rem)] pr-7 py-6 bg-background-secondary border border-border rounded-md text-foreground-muted text-base leading-relaxed marker:text-accent-dark space-y-4 [&>li]:pl-2">
            <li>
              <span className="inline-block min-w-[4.5rem] font-semibold text-foreground max-[480px]:block max-[480px]:min-w-0 max-[480px]:mb-0.5">
                Email
              </span>{" "}
              <a href="mailto:brian@briancamp.com" className="text-foreground underline-offset-2 hover:underline">
                brian@briancamp.com
              </a>
            </li>
            <li>
              <span className="inline-block min-w-[4.5rem] font-semibold text-foreground max-[480px]:block max-[480px]:min-w-0 max-[480px]:mb-0.5">
                Phone
              </span>{" "}
              <a href="tel:+12055750176" className="text-foreground underline-offset-2 hover:underline">
                (205) 575-0176
              </a>
            </li>
            <li>
              <span className="inline-block min-w-[4.5rem] font-semibold text-foreground max-[480px]:block max-[480px]:min-w-0 max-[480px]:mb-0.5">
                Website
              </span>{" "}
              <a
                href="https://www.briancamp.com"
                className="text-foreground underline-offset-2 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                www.briancamp.com
              </a>
            </li>
          </ul>

          {/* TODO: Add printable PDF at /assets/... when the policy PDF asset exists in public. Static referenced ../assets/waterstone-homes-privacy-policy.pdf (not in repo). */}
        </div>
      </section>
    </>
  );
}
