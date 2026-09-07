import Card from "../components/Card";
import Icon from "../components/Icon";
import CredentialChip from "../components/CredentialChip";
import CTABand from "../components/CTABand";
import outdoors from "../assets/outdoors.jpeg";
import watermark from "../assets/logo-mark-transparent.png";

const commitments = [
  {
    icon: "calendar-check",
    title: "The date is the date",
    body: "Your close date is agreed at onboarding and it doesn't move. If something will make it move, you hear it before the date, not after.",
  },
  {
    icon: "file-text",
    title: "Plain language",
    body: "Statements come with a written read-out in words you'd use out loud. No jargon shield.",
  },
  {
    icon: "compass",
    title: "One owner, start to finish",
    body: "You work with the person doing the work. Nothing gets handed to a queue you've never met.",
  },
];

export default function About() {
  return (
    <div>
      <section style={{ background: "var(--wn-gradient-hero)", padding: "clamp(64px,9vw,80px) 24px clamp(64px,9vw,88px)" }}>
        <div className="wn-split-about" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <img
            src={outdoors}
            alt="Scott Halasy outdoors"
            style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", borderRadius: 16, border: "1px solid var(--wn-line)", boxShadow: "0 10px 30px rgba(63,90,70,0.10)" }}
          />
          <div>
            <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>About</div>
            <h1 style={{ margin: "12px 0 0", font: "700 46px/1.15 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>
              Scott Halasy, founder
            </h1>
            <p style={{ margin: "18px 0 0", font: "400 18px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)", textWrap: "pretty" }}>
              Hi, I'm Scott Halasy. 
              I've spent my career at the intersection of finance & accounting, product & operations. 
              Where I’ve found the most energy is when I’m able to combine rigorous quantitative financial analysis 
              and a deep understanding of how a business operates with strategic thinking and decision-making.

              Along the way I’ve developed a real passion for Main Street businesses: SMBs and lower middle-market companies. 
              I love talking to business owners and founders, hearing their stories, finding their why, and learning about their vision and goals.
              
              I started Woodward North because the business I care about most, the Main Street one with an enduring legacy behind it, usually gets the
              thinnest financial support. You get a filing service, or you get an expensive firm that shows up once a year. Perhaps you manage
              your own books or have your CPA do it. Funny how you never hear from that CPA until Uncle Sam comes calling.
              
              And with your lean team and an endless to-do list, the simplest things become the biggest burden. The books fall behind. Tax season is around the corner. 
              An acquisition entrepreneur, M&A advisor, or a local private equity firm calls to ask about your succession plan. 
              
              That's the last thing on your mind right now. You need to take back your time, take a deep breath.
              And figure out how you can spend more time working on your business rather than in it.
            </p>
            <p style={{ margin: "16px 0 0", font: "400 18px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)", textWrap: "pretty" }}>
              What you need is a monthly close that lands on time and someone who will sit with the numbers and say what they mean. That's what Woodward North is about:
              bookkeeping done properly, then a conversation about what to do next.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
              <CredentialChip label="QuickBooks Online ProAdvisor" iconName="badge-check" />
              <CredentialChip label="CFI FMVA program" iconName="trending-up" />
            </div>
            <p style={{ margin: "16px 0 0", font: "400 15px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)" }}>
              Full certification list on{" "}
              <a href="https://www.linkedin.com/in/scotthalasy/details/certifications/" target="_blank" rel="noopener">
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(64px,9vw,96px) 24px", background: "var(--wn-bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>How we work</div>
            <h2 style={{ margin: "12px 0 0", font: "700 38px/1.2 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>
              Three commitments, kept every month
            </h2>
          </div>
          <div className="wn-grid-3" style={{ marginTop: 44 }}>
            {commitments.map((c) => (
              <Card key={c.title} padding="28px">
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <Icon name={c.icon} size={24} color="var(--wn-accent)" />
                  <h3 style={{ margin: 0, font: "600 20px/1.25 Poppins,sans-serif", color: "var(--wn-text)" }}>{c.title}</h3>
                  <p style={{ margin: 0, font: "400 16px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)" }}>{c.body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABand eyebrow="Next step" title="Let's see whether we're a fit." intro="Twenty minutes, your books, an honest answer." note="No pitch deck. No obligation." watermarkSrc={watermark} />
    </div>
  );
}
