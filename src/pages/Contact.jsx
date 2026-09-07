import { useState } from "react";
import Card from "../components/Card";
import Icon from "../components/Icon";
import Field from "../components/Field";
import Input from "../components/Input";
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import Button from "../components/Button";

const industries = [
  "Financial services firms — PE & M&A",
  "Manufacturing & industrial services",
  "Professional & home services",
  "Commercial & residential real estate",
  "Consumer products & CPG",
  "Ecommerce & digital",
  "ETA searchers — pre- or post-close"
  ];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section style={{ background: "var(--wn-gradient-hero)", padding: "clamp(64px,9vw,80px) 24px clamp(48px,7vw,64px)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>Contact</div>
          <h1 style={{ margin: "12px 0 0", font: "700 46px/1.15 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>
            Book a free consultation
          </h1>
          <p style={{ margin: "16px 0 0", font: "400 19px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)" }}>
            You'll hear back within one business day.
          </p>
        </div>
      </section>

      <section style={{ padding: "clamp(48px,7vw,64px) 24px clamp(64px,9vw,96px)", background: "var(--wn-bg)" }}>
        <div className="wn-contact-grid" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Card padding="36px">
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "40px 0", textAlign: "center", alignItems: "center" }}>
                <Icon name="check-circle" size={32} color="var(--wn-accent)" />
                <h2 style={{ margin: 0, font: "700 28px/1.2 Poppins,sans-serif", color: "var(--wn-text)" }}>Message sent</h2>
                <p style={{ margin: 0, font: "400 17px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)" }}>
                  Thank you! We'll come back to you within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <h2 style={{ margin: 0, font: "700 26px/1.2 Poppins,sans-serif", color: "var(--wn-text)" }}>Tell us about your business</h2>
                <div className="wn-form-row">
                  <Field label="Name" htmlFor="cf-name" required>
                    <Input id="cf-name" name="name" placeholder="Your name" required />
                  </Field>
                  <Field label="Email" htmlFor="cf-email" required>
                    <Input id="cf-email" name="email" type="email" placeholder="you@company.com" required />
                  </Field>
                </div>
                <div className="wn-form-row">
                  <Field label="Business name" htmlFor="cf-biz">
                    <Input id="cf-biz" name="business" placeholder="Company" />
                  </Field>
                  <Field label="Industry" htmlFor="cf-ind">
                    <Select id="cf-ind" name="industry">
                      <option>Select one</option>
                      {industries.map((i) => (
                        <option key={i}>{i}</option>
                      ))}
                    </Select>
                  </Field>
                </div>
                <Field label="What do you need help with?" htmlFor="cf-msg" helper="Where the books stand today is the most useful thing you can tell us.">
                  <Textarea id="cf-msg" name="message" rows={5} placeholder="Books are six months behind and I can't price jobs without knowing my margins…" />
                </Field>
                <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  <Button size="lg" type="submit">Send message</Button>
                  <span style={{ font: "400 14px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)" }}>No pitch deck. No obligation.</span>
                </div>
              </form>
            )}
          </Card>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Card padding="28px">
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Icon name="calendar-check" size={24} color="var(--wn-accent)" />
                <h3 style={{ margin: 0, font: "600 20px/1.25 Poppins,sans-serif", color: "var(--wn-text)" }}>Book it directly</h3>
                <p style={{ margin: 0, font: "400 16px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)" }}>
                  Pick a 20-minute slot on the calendar and skip the back-and-forth.
                </p>
                <div style={{ background: "var(--wn-cream-200)", border: "1px dashed #D9CBB6", borderRadius: 12, padding: 18, font: "400 14px/1.55 Inter,sans-serif", color: "var(--wn-text-muted)" }}>
                  <a href="https://calendly.com/scott-woodwardnorth/30min"</a>                
              </div>
                <Button variant="accent" fullWidth href="#book">Open the calendar</Button>
              </div>
            </Card>
            <Card padding="28px">
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <h3 style={{ margin: 0, font: "600 20px/1.25 Poppins,sans-serif", color: "var(--wn-text)" }}>Reach us</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 10, font: "400 16px/1.6 Inter,sans-serif", color: "var(--wn-text)" }}>
                  <Icon name="mail" size={18} color="var(--wn-accent)" />
                  <a href="mailto:scott@woodwardnorth.com">scott@woodwardnorth.com</a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, font: "400 16px/1.6 Inter,sans-serif", color: "var(--wn-text)" }}>
                  <Icon name="phone" size={18} color="var(--wn-accent)" />
                  <span>(612) 555-0142</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, font: "400 16px/1.6 Inter,sans-serif", color: "var(--wn-text)" }}>
                  <Icon name="linkedin" size={18} color="var(--wn-accent)" />
                  <a href="https://www.linkedin.com/in/scotthalasy/" target="_blank" rel="noopener">Scott Halasy on LinkedIn</a>
                </div>
                <p style={{ margin: "4px 0 0", font: "400 14px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)" }}>
                  Remote practice, clients nationwide. Placeholder phone number until the business line is live.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
