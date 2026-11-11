# Portfolio copy draft — for your review before it goes on the site

Nothing in this file is on the site yet. Mark what to change, approve what works, and I will apply it.

Anything in **[confirm]** is something I inferred from your Notion export, CVs or the job-agent master file and could not verify. Numbers only appear where your CVs already state them.

---

## 1. Skills grid (16 tiles)

Removed: Next.js · React & TypeScript · SwiftUI (and I suggest also dropping "Full-Stack Prototyping" for the same reason).
Proposed replacements are marked ★.

| Row | Tiles |
|---|---|
| 1 | Technical Product Management · AI Product Management · LLM Evaluation · Prompt Engineering |
| 2 | ★ Product Strategy & Roadmapping · ★ Product Discovery & Research · ★ PRDs & Technical Specs · ★ Stakeholder & Team Leadership |
| 3 | FinTech Architecture · Payments & BNPL · Regulatory Compliance · System Administration |
| 4 | Go-to-Market & Growth · Experimentation & Metrics · Customer Research · Gamification & Game Design |

(If you keep "Full-Stack Prototyping", swap it for "Experimentation & Metrics".)

---

## 2. Hero sentence about gamification (already live, included for completeness)

"I am also great at gamification: designing loops, progression and reward systems that make products genuinely fun to come back to. There is a small game hidden on this page."

---

## 3. Gaming slot (project 2) — replacing the text you did not like

**Carousel panel text**

> Game development information is private information, but it will be provided in personal conversations.
>
> Two original titles are in development under Pedestrian Games Limited **[confirm you want the studio named]**: a stylised arena brawler built on signature-persona combat, and a narrative time-loop driving simulator set in a fictional Lagos. Full design documents are shared under NDA.

**Case-study page** (replaces the eight-section GDD outline)

- Title: Gaming — Pedestrian Games Limited
- Status line: In development · Details shared in personal conversation
- Summary: one paragraph as above.
- A short "What you can know" list, taken only from the IP-protected overview you gave me:
  - Project One: arcade arena brawler colliding Afrobeats and Hollywood personas; identity-driven movesets; crowd and hype momentum; accessible depth for couch and competitive play.
  - Project Two "Know Road": story-driven time-loop driving and dispatch simulator in a fictional Lagos; progression through knowledge not stat trees; loop ends at 8:15 PM; Unity and Twine.
- A "What stays private" line: rosters, combat algorithms, narrative twists, loop-breaking triggers and systems architecture.
- Button: "Talk to me about it →" (goes to Contact).

**Option B (more private):** keep only the first sentence and the button, with no mention of the two titles. Tell me which.

---

## 4. Case-study format for every project

Each project page will have: **Summary** → **The problem being solved** → **Features that solve it** → **What I did** → screenshots. The carousel panel shows the Summary only.

Projects in the new order: 1 The Move & The Move Business · 2 Gaming · 3 Sage · 4 Azar Payments · 5 EnoverLab · 6 TropicMed · 7 Simservers.io · 8 PMC SMS · 9 SME Cloud · 10 Dalens AI · 11 JustPayNG · 12 KiraPay · 13 Autobiz Smartplan · 14 Autobiz.app · then Naija Tax and Money Moves (personal) once their folders arrive.

---

### 4.1 The Move & The Move Business

**Summary.** A two-sided nightlife marketplace for the US and Nigeria: The Move helps people find events, clubs and lounges, buy tickets, reserve tables and order in-venue services; The Move Business (TMB) gives venues and organisers one place to publish events, sell tickets, manage bookings and scan guests in. I owned product vision and the phased go-to-market as Growth Product Manager at Kenkeputa, and advised on the legal and compliance side of launching in two jurisdictions.

**The problem being solved.** Going out is fragmented: discovery happens on social media, tickets on one platform, table bookings over DMs, and in-venue orders at a crowded bar. Venues feel the other side of it: no single view of bookings, guest lists and sales, and no owned channel to reach customers. Launching across the US and Nigeria adds payment, licensing and data-privacy differences that most nightlife apps ignore.

**Features that solve it.**
1. *Event and venue discovery* — browse events, clubs and lounges by what is happening tonight, not by scrolling feeds.
2. *Tickets and table reservations in one flow* — buy a ticket or hold a table without leaving the app.
3. *In-venue service ordering* — order from your table so service does not depend on reaching the bar.
4. *TMB publishing and bookings* — venues publish events, manage reservations and track sales from one dashboard.
5. *Guest entry scanning and promotions* — faster doors and promotion tools that acquire customers through the consumer app.
6. *Payments and wallet integrations built to pass legal review* — acceptance criteria written with jurisdiction-specific rules in mind.

**What I did.**
- Defined the product vision and ran phased launches across the US and Nigeria, measuring adoption and retention per region.
- Partnered with engineering on system-design trade-offs for payments and event discovery; authored the product specs.
- Reviewed API specs and technical designs for legal and regulatory risk on payment and wallet features, and defined compliant acceptance criteria.
- Advised design, marketing and operations on the legal implications of product decisions.

---

### 4.2 Sage (operations backend for Tekkas Store)

**Summary.** Sage is the admin and operations backend behind Tekkas Store and Azar Payments. I inherited a buggy codebase and rebuilt its structure from scratch, prioritising the modules the business ran on daily and scoping the rest into a roadmap.

**The problem being solved.** Operations staff had no reliable view of transactions, customers and user activity, and the existing admin tool failed often enough that people worked around it. A BNPL product cannot run on workarounds: eligibility and repayment decisions need an audited control centre.

**Features that solve it.**
1. *Dashboard* — the daily numbers in one screen.
2. *Customer and user management* — profiles, roles and oversight of who can do what.
3. *Reporting* — transaction and activity visibility for finance and operations.
4. *Inventory* — stock visibility tied to orders.
5. *Azar control centre* — repayment and eligibility flows managed from one place.
6. *Scoped next: payments, communication and fraud detection* — designed into the structure so they land without another rewrite.

**What I did.**
- Rebuilt the information architecture and module priorities after inheriting the codebase.
- Balanced product needs, operational efficiency and compliance requirements in every scoping decision.
- Ran the fraud-detection, user-role and inventory scoping with the operations team.

---

### 4.3 Azar Payments (BNPL inside Tekkas Store)

**Summary.** Azar is an embedded flexible-payments (BNPL) option inside Tekkas Store that lets verified shoppers split a purchase. I worked on its structure, positioning and integration: eligibility rules, repayment flows, gateway connections and the compliance-friendly way it is explained to customers.

**The problem being solved.** Shoppers abandon carts they cannot pay in full today; stores lose the sale and lenders stay out of e-commerce because risk, repayment and messaging are hard to get right. A split-payment product has to be simple at checkout and defensible to a regulator.

**Features that solve it.**
1. *Eligibility at checkout* — verified users see the split option only when they qualify.
2. *Clear repayment schedules* — plain-language instalments and reminders.
3. *Gateway integration* — collection runs through the existing payment rails.
4. *Compliance-friendly messaging* — disclosures and copy written so marketing and legal agree.
5. *Admin oversight through Sage* — every decision and repayment visible to operations.
6. *Growth metrics* — take-up, repayment and default tracked from launch.

**What I did.**
- Owned the product from checkout flow to admin oversight as Growth Product Manager.
- Shaped positioning and the messaging that passed compliance review.
- Ran user acceptance testing and the partnership conversations around the launch.

---

### 4.4 EnoverLab

**Summary.** EnoverLab trains the next generation of African product managers, from fundamentals to advanced practice. I built curriculum and taught, and as Program Manager and legal adviser drafted the institute's commercial contracts.

**The problem being solved.** Africa's product teams are growing faster than the supply of trained PMs; most learning material is written for other markets and does not teach the judgement calls that matter here.

**Features that solve it.**
1. *Curriculum for 70+ professionals* with an emphasis on data-driven growth and strategic planning.
2. *Mentoring* on technical literacy, defining KPIs, running experiments and prioritising.
3. *Contracts and compliance* that keep the institute's partnerships safe.

**What I did.** Built the curriculum, mentored cohorts, reviewed and drafted commercial contracts, and worked cross-functionally on customer-satisfaction programmes.

---

### 4.5 TropicMed **[confirm all; the export had only screenshots]**

**Summary.** A healthcare platform with separate journeys for patients and doctors, from landing page through sign-in, user-type selection and doctor registration.

**The problem being solved.** Patients and doctors need different onboarding, verification and trust signals; one generic sign-up serves neither.

**Features that solve it.**
1. *User-type selection up front* so each side gets the right flow.
2. *Doctor registration with credential capture* **[confirm]**.
3. *Simple patient sign-in*.

**What I did.** Product management and business development **[confirm scope]**.

---

### 4.6 Simservers.io

**Summary.** Simservers.io automates USSD transactions with proprietary technology so businesses and developers can run airtime and data top-ups faster and more reliably, with a companion app for management and real-time monitoring.

**The problem being solved.** USSD workflows are manual, slow and fail silently; resellers lose money on every retry and have no visibility until a customer complains.

**Features that solve it.**
1. *Automated airtime and data top-ups* over USSD.
2. *Companion app* for management on the go.
3. *Real-time monitoring* so failures are seen immediately.

**What I did.** Product Manager: roadmap, positioning and the developer and business audiences' needs.

---

### 4.7 PMC SMS

**Summary.** A messaging platform for bulk and personalised communication over SMS, email and WhatsApp, with schedulers, OTP services and AI-powered retargeting; a mobile app for quick sends and a web app for managing everything.

**The problem being solved.** Small businesses and organisations pay too much to reach customers across three channels and have no way to schedule, personalise or follow up without a developer.

**Features that solve it.**
1. *Bulk and personalised sends* across SMS, email and WhatsApp.
2. *Birthday and campaign schedulers*.
3. *OTP service* for businesses that need verification.
4. *AI-powered retargeting* to follow up the people who did not respond.
5. *Mobile app for execution, web app for management*.

**What I did.** Automation, branding, backend and software development oversight **[confirm your role]**.

---

### 4.8 SME Cloud

**Summary.** SME Cloud removes the complexity of buying bulk data from multiple ISPs and running VTU transactions: USSD codes plus cloud automation, with monetisation models, sales analysis, auto-retry and downtime notifications.

**The problem being solved.** Business owners juggle several ISP portals and USSD menus to buy bulk data, then resell with no analytics, and every outage costs them sales they never see.

**Features that solve it.**
1. *ISP communication automation* — one place for multiple ISPs.
2. *Bulk data purchases* and *VTU transactions*.
3. *Service monitoring with downtime notifications*.
4. *Auto-retry* on failed transactions.
5. *Sales analysis* and flexible *monetisation models*.

**What I did.** Product Manager: product design, branding and logo direction, business development and the mobile application.

---

### 4.9 Dalens AI

**Summary.** DalensAI uses artificial intelligence to monitor and optimise the care of farm animals, giving farmers real-time insights, predictive analytics and management tools for healthier livestock and better productivity. I created the product vision and roadmap and secured early-stage funding.

**The problem being solved.** Livestock losses are discovered late. Farmers lack the data to act early, and existing tools are built for large commercial farms.

**Features that solve it.**
1. *Real-time monitoring* of animal health signals.
2. *Predictive analytics* that flag problems before they become losses.
3. *Management tools* that fit how smaller farms actually work.

**What I did.**
- Developed product roadmaps and go-to-market across 5 workstreams, from concept to a $10K funding close.
- Ran 4 MVP validation cycles with real users, cutting rework by 25% and launch timelines by 3 weeks.
- Turned customer and market research into iterative refinements that lifted engagement and retention.

---

### 4.10 JustPayNG

**Summary.** A payment platform built to simplify transactions. I supervised development and design, oversaw API integrations and kept designers and engineers aligned on an interface people could use without instruction.

**The problem being solved.** Payment products fail on integration quality and on interfaces designed by engineers for engineers.

**Features that solve it.**
1. *Clean API integrations* for reliable connectivity.
2. *An intuitive interface* validated with users.
3. *Cross-functional delivery* that kept scope and quality honest.

**What I did.** Technical oversight, project management and the bridge between design and development.

---

### 4.11 KiraPay

**Summary.** A secure digital payment platform for businesses of every size: multiple payment methods, real-time transaction monitoring and simple API integration for SMEs, e-commerce platforms and developers.

**The problem being solved.** Small merchants need enterprise-grade payment acceptance without enterprise cost or operational bottlenecks.

**Features that solve it.**
1. *Multiple payment methods* under one integration.
2. *Real-time transaction monitoring*.
3. *Developer-friendly API*.

**What I did.** **[confirm your role; the export had no role field]**

---

### 4.12 Autobiz Smartplan (CDLP Hub Limited)

**Summary.** A packaged offer that delivers high-quality websites at speed, bundled with branding and basic advertising so a new business launches with a coherent identity. I built the business plan, marketing model and pricing structure, then led designers and engineers to deliver it.

**The problem being solved.** Small businesses buy a website, a logo and ads from three vendors, on three timelines, and end up with a brand that does not match itself.

**Features that solve it.**
1. *Fixed-scope website delivery* at exceptional speed.
2. *Integrated branding* for a cohesive identity.
3. *Launch advertising campaigns* to reach the target audience from day one.
4. *Packaged pricing* that makes the decision simple.

**What I did.** Business plan, marketing model, pricing, multidisciplinary team leadership and campaign execution within tight timelines.

---

### 4.13 Autobiz.app

**Summary.** A dual-purpose platform: an API marketplace that gives developers and business owners predesigned APIs to build digital solutions faster, and an internal operations platform for running a business day to day.

**The problem being solved.** Teams rebuild the same integrations and run operations across disconnected tools; both slow down delivery and hide problems.

**Features that solve it.**
1. *API marketplace* of predesigned APIs.
2. *Operations management* tools in one platform.
3. *Mobile application* for on-the-go use.

**What I did.** Product Manager across both halves of the platform.

---

## 5. Naija Tax (personal project) — new case study

**Summary.** Naija Tax is a guided tax product for Nigerians who are willing to pay their taxes but should never have to understand the law to do it. It turns the tax code into a plain-language interview: it works out which taxes apply to you, registers you, fills the forms from what you already have, and takes the payment. The user understands "this is how my tax works" and gets on with their life. I am building it as a lawyer and product manager who has watched capable, well-informed people get this wrong.

**The problem being solved.**
Most Nigerians who want to be compliant do not know where to start: whether they need a TIN, which taxes apply to a salary earner with a side business, what the thresholds are, when returns are due, or how to pay without a visit to an office. Nigeria's 2025 tax reform laws **[verify: Nigeria Tax Act 2025, in force from January 2026]** change the rules again, which makes the knowledge gap wider, not smaller. Government portals such as TaxPro-Max **[verify name]** are built for people who already know what to file. The result is that compliance is treated as something you hire an accountant for, and most people simply do not do it.

The motivation is personal. My sister follows tax news closely, can tell you what changed this year, and still has no real idea what actually gets done when a return is filed. She knows about tax; she does not know her tax. That gap, between being informed and being able to act, is the product.

**The reference: TurboTax (United States).** TurboTax is the clearest proof that tax software wins by hiding the tax code, not explaining it. It asks about your life ("did you get married, buy a house, do freelance work?") instead of asking about schedules and line items; it imports documents so you type less; it shows progress and a running refund figure so you always know where you stand; it explains every question in one sentence with "why we ask"; and it backs the whole thing with accuracy and maximum-refund guarantees. Nigeria has none of this. Naija Tax takes the interview model and rebuilds it for Nigerian income types, registration steps and payment rails.

**Features that solve it.**
1. *Life-based interview, not a tax form* — "Do you earn a salary? Freelance? Rent out property? Run a registered business?" The engine maps answers to the taxes that apply (PAYE/PIT, VAT registration, small-company rules, withholding) and says so in one sentence each.
2. *Guided registration* — TIN registration walked through step by step with the documents you already have (NIN, BVN, CAC details) **[verify current requirements]**.
3. *Smart fill from what you have* — payslips, bank statements and invoices become numbers in the right boxes; the user confirms, they do not calculate.
4. *"Why we ask" on every question* — one plain sentence per question, so understanding is a by-product of filing, not a prerequisite.
5. *Running total and progress* — the TurboTax trick: you always see what you owe so far, what is left to answer and what you have saved.
6. *Pay inside the product* — payment through approved rails with receipts and a record you can show.
7. *Filing calendar and reminders* — deadlines by tax type, with reminders tied to the user's actual obligations, not a generic list.
8. *Versioned rules engine, lawyer-reviewed* — the tax logic lives in versioned rules so that when the law changes (as it did in 2025), the product changes without a rewrite, and every version is reviewed against the statute.
9. *Audit-ready records* — every filing, payment and the rule version used is kept, so a query years later has an answer.

**What I did / am doing.**
- Mapped the Nigerian individual and small-business tax obligations into a decision tree a non-expert can answer.
- Designed the interview flow and the rules-engine architecture, with legal review as a release gate.
- Defined the metrics that matter: time-to-first-filing, completion rate, and the share of users who file without external help.

**Status.** Personal project in development. Screens to follow when the folder arrives.

---

## 6. Money Moves (personal project) — placeholder until the folder arrives

I will write this in the same format (Summary · Problem · Features · What I did) and produce a two-page "mini case study" PDF for download from the page, once I can read the folder and images. Questions to answer in the folder or here:
1. What Money Moves is, in one sentence, and who it is for.
2. The problem it solves and how you noticed it.
3. The three to six features you want shown, matched to the screenshots.
4. Status (prototype, live, in development) and any link.

---

## 7. Optional: work-experience carousel from your real history

The experience carousel currently shows roles derived from the project data, with no dates, because the Notion export had none. Your job-agent master file has the real history with dates. I can replace the carousel with these (dates copied exactly as written there, nothing added):

1. Founder & Managing Director — Pedestrian Games Limited · Jul 2026 – Present
2. Director & Technical Product Lead — Kentol Limited · 2026 – Present
3. AI Data Trainer, Prompt Engineer & Visual Evaluation Specialist — Handshake AI, Outlier, Micro1, MultiMango · 2026 – Present
4. Legal & Compliance Officer / Growth Product Manager — Kenkeputa · Aug 2024 – Present **[the master file says Legal & Compliance Officer; the CVs say Growth Product Manager — which title for the site?]**
5. Program Manager, Legal Adviser & Tutor — EnoverLab Training Institute · May 2023 – Present
6. Community Outreach Officer & Digital Product Lead — PAAM Literacy & Vocational Organisation · Aug 2026 – Sept 2026
7. Compliance and Legal Officer / Product Manager — Concept Delapaix Hub · Apr 2023 – Nov 2024 **[same title question]**
8. Project / Product Manager — Dalens AI · Apr 2021 – Mar 2024
9. Co-Founder — Splash Zone Games and Recreations Arena · Sept 2019 – March 2023
10. Head of Chambers — Ewagbolahan & Co · Apr 2018 – Dec 2019
11. Associate — Bode Elemide & Co · Nov 2016 – Jul 2018

Say yes and which titles to use, and I will apply it. Credentials could also be updated from the same file (Bar Practicing Certificate, Google PM Certificate, Software PM Specialization from the University of Alberta, Harvard CS50) alongside the ones already shown.
