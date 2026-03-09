import { useEffect, useRef } from "react";

const WA_LINK =
  "https://wa.me/919353242762?text=Hi%20Rebhav!%20I'm%20from%20Chanakya%20University%20and%20I'd%20like%20to%20book%20a%20slot.";

// ===== Scroll reveal hook =====
function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12 },
    );

    const els = document.querySelectorAll(".reveal");
    for (const el of els) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return containerRef;
}

// ===== Ornament SVG =====
function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="48"
      height="16"
      viewBox="0 0 48 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 8 Q12 0 24 8 Q36 16 48 8"
        stroke="oklch(0.78 0.12 80)"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="24" cy="8" r="2.5" fill="oklch(0.78 0.12 80)" />
    </svg>
  );
}

// ===== Price Row =====
function PriceRow({ label, price }: { label: string; price: string }) {
  return (
    <div className="py-3">
      <div className="flex items-center justify-between gap-2">
        <span className="font-sans text-[0.95rem] text-foreground/90 font-medium">
          {label}
        </span>
        <span
          className="font-serif text-[0.95rem] font-semibold"
          style={{ color: "oklch(0.45 0.18 10)" }}
        >
          {price}
        </span>
      </div>
      <div
        className="mt-3 h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.78 0.12 80 / 0.35), transparent)",
        }}
      />
    </div>
  );
}

// ===== Service Card =====
function ServiceCard({
  icon,
  title,
  items,
  delayClass = "",
}: {
  icon: string;
  title: string;
  items: { label: string; price: string }[];
  delayClass?: string;
}) {
  return (
    <div
      className={`reveal ${delayClass} rounded-2xl p-8 shadow-petal border border-border/60 flex flex-col gap-1`}
      style={{ background: "oklch(0.95 0.03 20)" }}
    >
      <div className="text-4xl mb-2" aria-hidden="true">
        {icon}
      </div>
      <h3
        className="font-serif text-2xl font-bold mb-1"
        style={{ color: "oklch(0.45 0.18 10)" }}
      >
        {title}
      </h3>
      <Ornament className="mb-2" />
      <div className="flex flex-col">
        {items.map((item) => (
          <PriceRow key={item.label} label={item.label} price={item.price} />
        ))}
      </div>
    </div>
  );
}

// ===== Discount Card =====
function DiscountCard({
  badge,
  title,
  description,
  delayClass = "",
}: {
  badge: string;
  title: string;
  description: string;
  delayClass?: string;
}) {
  return (
    <div
      className={`reveal ${delayClass} rounded-2xl p-8 shadow-petal border border-border/60 flex flex-col gap-3`}
      style={{ background: "oklch(0.95 0.03 20)" }}
    >
      <div
        className="inline-flex items-center justify-center w-20 h-20 rounded-full self-start mb-2"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.78 0.12 80 / 0.18), oklch(0.78 0.12 80 / 0.35))",
          border: "2px solid oklch(0.78 0.12 80 / 0.6)",
        }}
      >
        <span
          className="font-serif font-bold text-2xl"
          style={{ color: "oklch(0.55 0.14 75)" }}
        >
          {badge}
        </span>
      </div>
      <h3
        className="font-serif text-xl font-bold"
        style={{ color: "oklch(0.45 0.18 10)" }}
      >
        {title}
      </h3>
      <p className="font-sans text-[0.95rem] text-foreground/75 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// ===== Section Heading =====
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-12">
      <h2
        className="reveal font-serif text-4xl md:text-5xl font-bold mb-4"
        style={{ color: "oklch(0.45 0.18 10)" }}
      >
        {children}
      </h2>
      <div className="ornament-divider max-w-xs mx-auto">
        <span
          className="font-sans text-xs tracking-widest uppercase"
          style={{ color: "oklch(0.78 0.12 80)" }}
        >
          ✦
        </span>
      </div>
    </div>
  );
}

// ===== MAIN APP =====
export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* ===== SECTION 1: HERO ===== */}
      <section
        id="hero"
        data-ocid="hero.section"
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/generated/hero-bg.dim_1600x900.jpg')`,
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.15 0.04 20 / 0.72) 0%, oklch(0.10 0.04 15 / 0.82) 60%, oklch(0.08 0.03 10 / 0.90) 100%)",
          }}
        />

        {/* Decorative top border */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.78 0.12 80), oklch(0.90 0.15 85), oklch(0.78 0.12 80), transparent)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center gap-6">
          {/* Brand tagline top */}
          <p
            className="font-sans text-xs tracking-[0.35em] uppercase"
            style={{ color: "oklch(0.78 0.12 80 / 0.85)" }}
          >
            Premium Beauty Services
          </p>

          {/* Main heading */}
          <h1
            className="font-serif font-bold leading-none"
            style={{
              fontSize: "clamp(5rem, 18vw, 11rem)",
              letterSpacing: "0.12em",
              color: "oklch(0.97 0.02 60)",
              textShadow: "0 4px 32px oklch(0 0 0 / 0.5)",
            }}
          >
            REBHAV
          </h1>

          {/* Sub-heading */}
          <p
            className="font-serif italic"
            style={{
              fontSize: "clamp(1.25rem, 3.5vw, 2rem)",
              color: "oklch(0.88 0.13 82)",
              letterSpacing: "0.05em",
            }}
          >
            Art at your Fingertips.
          </p>

          <Ornament />

          {/* Body */}
          <p
            className="font-sans leading-relaxed max-w-xl"
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              color: "oklch(0.90 0.02 50 / 0.85)",
            }}
          >
            Premium Mehendi and Nail Art services, now available at Chanakya
            University. Bringing professional beauty aesthetics directly to your
            campus life.
          </p>

          {/* CTA */}
          <a
            href="#booking"
            className="mt-2 inline-flex items-center gap-2 px-8 py-3 rounded-full font-sans font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-gold"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.78 0.12 80), oklch(0.68 0.14 78))",
              color: "oklch(0.20 0.04 30)",
            }}
            data-ocid="hero.primary_button"
          >
            Book Your Slot
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2">
          <span
            className="font-sans text-xs tracking-widest uppercase"
            style={{ color: "oklch(0.78 0.12 80 / 0.70)" }}
          >
            Explore
          </span>
          <svg
            className="animate-bounce-down"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 3v14M4 11l6 6 6-6"
              stroke="oklch(0.78 0.12 80 / 0.75)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ===== SECTION 2: PRICE MENU ===== */}
      <section
        id="services"
        data-ocid="menu.section"
        className="py-24 px-6"
        style={{ background: "oklch(0.97 0.02 60)" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Our Services</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon="💅"
              title="Nail Studio"
              items={[
                { label: "Gel Extensions", price: "₹400 – ₹800" },
                { label: "Aesthetic Stick-ons", price: "₹300 – ₹600" },
                { label: "Art on Original Nails", price: "₹200 – ₹500" },
              ]}
              delayClass="reveal-delay-1"
            />
            <ServiceCard
              icon="🌿"
              title="Mehendi Magic"
              items={[
                { label: "Palm Length", price: "₹100" },
                { label: "Wrist Length", price: "₹200" },
                { label: "Half Length", price: "₹300" },
                { label: "Full Length", price: "₹600" },
              ]}
              delayClass="reveal-delay-2"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: CAMPUS DISCOUNTS ===== */}
      <section
        id="discounts"
        data-ocid="discounts.section"
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.93 0.05 20) 0%, oklch(0.96 0.03 45) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Special Rewards for our Community</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <DiscountCard
              badge="7%"
              title="Staff Benefit"
              description="7% OFF for all Lecturers and Non-Teaching Staff. Please show your ID card."
              delayClass="reveal-delay-1"
            />
            <DiscountCard
              badge="5%"
              title="Student Perk"
              description="5% OFF for all Chanakya University students. Show your university ID."
              delayClass="reveal-delay-2"
            />
          </div>

          <p
            className="reveal reveal-delay-3 text-center font-sans text-base italic"
            style={{ color: "oklch(0.55 0.04 30)" }}
          >
            ✦ We value the hard work of our educators and the energy of our
            peers! ✦
          </p>
        </div>
      </section>

      {/* ===== SECTION 4: UPCOMING EVENT & BOOKING ===== */}
      <section
        id="booking"
        data-ocid="booking.section"
        className="py-24 px-6 text-center"
        style={{ background: "oklch(0.97 0.02 60)" }}
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          {/* Event badge */}
          <div
            className="reveal inline-flex items-center gap-2 px-5 py-2 rounded-full font-sans text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "oklch(0.45 0.18 10 / 0.08)",
              border: "1px solid oklch(0.45 0.18 10 / 0.25)",
              color: "oklch(0.45 0.18 10)",
            }}
          >
            <span>📅</span>
            <span>Upcoming Event</span>
          </div>

          <h2
            className="reveal reveal-delay-1 font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: "oklch(0.30 0.10 15)" }}
          >
            BIG NEWS: Our Stall is Coming!{" "}
            <span role="img" aria-label="location pin">
              📍
            </span>
          </h2>

          <Ornament />

          <p
            className="reveal reveal-delay-2 font-sans text-lg"
            style={{ color: "oklch(0.45 0.06 30)" }}
          >
            Get ready for the{" "}
            <strong
              className="font-semibold"
              style={{ color: "oklch(0.45 0.18 10)" }}
            >
              Rebhav Live Station
            </strong>{" "}
            on campus next month.
          </p>

          <div
            className="reveal reveal-delay-2 flex items-center gap-2 font-sans text-base font-medium"
            style={{ color: "oklch(0.55 0.08 25)" }}
          >
            <span>📍</span>
            <span>Chanakya University, Admin Block.</span>
          </div>

          <p
            className="reveal reveal-delay-3 font-sans leading-relaxed"
            style={{ color: "oklch(0.50 0.05 30)", maxWidth: "42ch" }}
          >
            Don't wait for the rush! Pre-book your appointment now or DM us for
            more details and customized designs.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="booking.primary_button"
            className="reveal reveal-delay-4 mt-4 inline-flex items-center gap-3 px-10 py-4 rounded-full font-sans font-bold text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 hover:shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.45 0.18 10) 0%, oklch(0.38 0.16 8) 100%)",
              color: "oklch(0.97 0.02 60)",
              boxShadow: "0 4px 24px oklch(0.45 0.18 10 / 0.30)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book Your Slot
          </a>
        </div>
      </section>

      {/* ===== SECTION 5: FOOTER ===== */}
      <footer
        id="footer"
        data-ocid="footer.section"
        className="py-16 px-6"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.25 0.06 15) 0%, oklch(0.18 0.05 12) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Top divider */}
          <div
            className="h-px w-full mb-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.78 0.12 80 / 0.5), transparent)",
            }}
          />

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
            {/* Brand block */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h2
                className="font-serif font-bold tracking-[0.18em]"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  color: "oklch(0.97 0.02 60)",
                }}
              >
                REBHAV
              </h2>
              <p
                className="font-serif italic text-sm"
                style={{ color: "oklch(0.78 0.12 80)" }}
              >
                Art at your Fingertips.
              </p>
              <Ornament className="mt-1" />
            </div>

            {/* Info block */}
            <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
              <div
                className="flex items-center gap-2 font-sans text-sm"
                style={{ color: "oklch(0.80 0.03 40)" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Admin Block, Chanakya University.</span>
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: "oklch(0.78 0.12 80 / 0.15)",
                  border: "1px solid oklch(0.78 0.12 80 / 0.50)",
                  color: "oklch(0.88 0.12 82)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book via WhatsApp
              </a>

              <p
                className="font-sans text-sm"
                style={{ color: "oklch(0.75 0.05 35)" }}
              >
                Follow us for design inspiration! 🎨
              </p>
            </div>
          </div>

          {/* Bottom divider */}
          <div
            className="h-px w-full mt-10 mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.78 0.12 80 / 0.25), transparent)",
            }}
          />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p
              className="font-sans text-xs"
              style={{ color: "oklch(0.55 0.03 30)" }}
            >
              © {new Date().getFullYear()} REBHAV. All rights reserved.
            </p>
            <p
              className="font-sans text-xs"
              style={{ color: "oklch(0.48 0.03 30)" }}
            >
              Built with <span style={{ color: "oklch(0.65 0.12 15)" }}>♥</span>{" "}
              using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors"
                style={{ color: "oklch(0.65 0.08 50)" }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
