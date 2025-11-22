import React, { useState, useEffect, useCallback } from "react";

const pressReleasesData = [
  {
    id: 1,
    title: "YourCompany Launches Revolutionary New Product",
    date: "July 15, 2025",
    summary:
      "We’re excited to announce the launch of our groundbreaking product designed to transform the industry.",
    content:
      "This revolutionary product integrates the latest technology with intuitive design to redefine market standards. It's engineered for performance, sustainability, and scalability. Customers will benefit from enhanced features including AI-driven analytics, real-time feedback, and seamless integration with existing workflows.",
    link: "https://yourcompany.com/press/1",
  },
  {
    id: 2,
    title: "YourCompany Announces Strategic Partnership with Tech Giant",
    date: "June 30, 2025",
    summary:
      "A new collaboration to expand our services and deliver enhanced value to customers worldwide.",
    content:
      "The partnership combines YourCompany's innovative solutions with Tech Giant's extensive market reach, promising groundbreaking services and technology advancement. Both companies commit to co-develop new products focused on AI, cloud computing, and cybersecurity.",
    link: "https://yourcompany.com/press/2",
  },
  {
    id: 3,
    title: "YourCompany Reports Record Growth in Q2 2025",
    date: "July 5, 2025",
    summary:
      "Strong financial performance driven by innovative solutions and increased market demand.",
    content:
      "YourCompany reported a 35% increase in revenue for Q2 2025, attributed to strong sales in North America and Asia-Pacific regions. Investment in R&D and customer satisfaction initiatives were key drivers of growth.",
    link: "https://yourcompany.com/press/3",
  },
  {
    id: 4,
    title: "YourCompany CEO to Speak at Global Tech Conference",
    date: "July 20, 2025",
    summary:
      "Join us at the upcoming event as our CEO shares insights on future technology trends.",
    content:
      "At the Global Tech Conference 2025, YourCompany's CEO will discuss emerging trends in AI and sustainability. The keynote focuses on the company's vision for leveraging technology to solve complex global challenges.",
    link: "https://yourcompany.com/press/4",
  },
];

// Related short articles for each press release by id
const relatedArticlesData = {
  1: [
    {
      id: "1a",
      title: "Product Design Philosophy",
      summary:
        "Discover the core design values behind the new revolutionary product.",
      content:
        "The design philosophy focuses on user-centric interfaces, accessibility, and cutting-edge aesthetics. Emphasis was placed on ease of use while maintaining powerful features under the hood.",
    },
    {
      id: "1b",
      title: "AI-Driven Features Overview",
      summary:
        "An introduction to the AI capabilities integrated into the new product.",
      content:
        "Our AI algorithms adapt to user behaviors and automate complex tasks, enhancing productivity and providing insightful analytics in real-time.",
    },
  ],
  2: [
    {
      id: "2a",
      title: "Strategic Partnership Goals",
      summary:
        "Understanding the objectives behind our collaboration with Tech Giant.",
      content:
        "The partnership aims to pool expertise, drive innovation in cloud computing, and expand cybersecurity offerings to meet evolving market needs.",
    },
    {
      id: "2b",
      title: "Upcoming Joint Products",
      summary:
        "Sneak peek into products co-developed by YourCompany and Tech Giant.",
      content:
        "Focusing on AI-driven cloud security tools, the joint products promise enhanced protection and scalability for enterprise customers.",
    },
  ],
  3: [
    {
      id: "3a",
      title: "Q2 Market Growth Analysis",
      summary:
        "In-depth look at the factors behind YourCompany's record growth in Q2.",
      content:
        "Strong demand in APAC and NA regions, combined with innovative product launches, drove revenue growth beyond expectations.",
    },
    {
      id: "3b",
      title: "Investment in R&D",
      summary:
        "How increased research and development fueled the company’s success.",
      content:
        "Significant funds were allocated to AI research, enabling the launch of advanced product features that differentiate us from competitors.",
    },
  ],
  4: [
    {
      id: "4a",
      title: "CEO's Vision on AI",
      summary: "Highlights from the CEO's upcoming conference keynote.",
      content:
        "Our CEO will share insights on leveraging AI responsibly and ethically to transform industries and improve global sustainability.",
    },
    {
      id: "4b",
      title: "Global Tech Conference Agenda",
      summary: "What to expect from this year’s Global Tech Conference.",
      content:
        "Panels will cover emerging tech trends, sustainability in tech, and collaborations that are shaping the future.",
    },
  ],
};

// Loading spinner component
const Spinner = () => (
  <div className="flex justify-center items-center py-10" aria-label="Loading">
    <svg
      className="animate-spin h-10 w-10 text-yellow-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8z"
      ></path>
    </svg>
  </div>
);

// Large article sample content (~3000 words, truncated here for demo)
const largeArticleText = `

## Introduction

In today’s rapidly evolving technological landscape, YourCompany has once again pushed the boundaries of innovation by launching a revolutionary new product. This product is more than just a tool; it represents a paradigm shift in how businesses and consumers interact with technology. The following article provides a comprehensive analysis of this groundbreaking product—exploring its design philosophy, cutting-edge technological features, market impact, strategic partnerships, and future prospects.

Spanning over 60,000+ words, this article aims to offer a complete and authoritative resource that leaves no stone unturned.

---

## Table of Contents

1. The Genesis of the Revolutionary Product
2. Design Philosophy: Marrying Form with Function
3. Core Technologies and Innovations
4. AI-Driven Features and Capabilities
5. Performance, Scalability, and Sustainability
6. Market Reception and Financial Impact
7. Strategic Collaborations and Partnerships
8. Research & Development: Fueling Innovation
9. Leadership Vision: Insights from YourCompany’s CEO
10. Industry Trends and Competitive Landscape
11. Customer Success Stories and Use Cases
12. Regulatory Compliance and Ethical Standards
13. Future Roadmap: What Lies Ahead
14. Conclusion: Positioning for the Future
15. Appendix: Deep Dives into Related Press Releases

---

## 1. The Genesis of the Revolutionary Product

### 1.1 Background and Motivation

YourCompany has a rich history of delivering transformative solutions, but this latest product launch, announced on July 15, 2025, marks a pivotal milestone. The impetus behind this product was to address rising market demands for intelligent, scalable, and sustainable solutions capable of seamlessly integrating into existing infrastructures.

### 1.2 Development Timeline

The product’s development journey spanned over three years, involving multiple phases of research, prototyping, user testing, and refinement. Cross-functional teams comprising engineers, designers, and market analysts collaborated intensively to ensure that the final product not only meets but exceeds market expectations.

### 1.3 Launch Highlights

On the official launch day, YourCompany shared details of the product’s core attributes, emphasizing its industry-first integration of AI-powered analytics, real-time feedback mechanisms, and unmatched scalability.

---

## 2. Design Philosophy: Marrying Form with Function

### 2.1 User-Centered Design

At the heart of the product lies an uncompromising commitment to user experience. The design team prioritized creating an interface that is intuitive and accessible to users with varying levels of technical expertise.

### 2.2 Accessibility and Inclusivity

The product supports a broad spectrum of users by adhering to accessibility standards such as WCAG 2.1, ensuring that people with disabilities can interact with it effectively.

### 2.3 Aesthetic Excellence

The interface employs a minimalist yet sophisticated aesthetic that balances visual appeal with practical usability. Attention was given to color theory, typography, and layout to ensure clarity and reduce cognitive load.

---

## 3. Core Technologies and Innovations

### 3.1 Cloud-Native Architecture

Built on a cloud-native microservices architecture, the product allows independent scaling of components, providing unprecedented flexibility and reliability.

### 3.2 Cutting-Edge AI Integration

State-of-the-art AI algorithms drive personalized user experiences, predictive analytics, and automation.

### 3.3 Real-Time Data Processing

The product incorporates real-time event processing, enabling instant decision-making and feedback loops critical for dynamic environments.

---

## 4. AI-Driven Features and Capabilities

### 4.1 Adaptive Machine Learning Models

The product learns continuously from user interactions, adapting workflows and automating routine tasks to optimize efficiency.

### 4.2 Intelligent Analytics Dashboard

Users can access a dynamic dashboard that visualizes data insights, tracks KPIs, and provides actionable recommendations.

### 4.3 Automated Support Systems

AI-powered chatbots and virtual assistants provide 24/7 support, resolving common queries and escalating complex issues to human agents.

---

## 5. Performance, Scalability, and Sustainability

### 5.1 Scalability to Enterprise Levels

Thanks to containerized deployments and orchestration via Kubernetes, the product can support millions of concurrent users without performance degradation.

### 5.2 Sustainability Initiatives

Energy-efficient algorithms and green data centers underpin the product’s commitment to reducing environmental impact.

### 5.3 Robust Security Posture

Multi-layered security protocols safeguard data privacy and protect against evolving cyber threats.

---

## 6. Market Reception and Financial Impact

### 6.1 Explosive Growth Metrics

YourCompany reported a remarkable 35% increase in Q2 2025 revenues, largely attributable to the product's market adoption.

### 6.2 Regional Demand Analysis

North America and Asia-Pacific regions exhibited particularly strong uptake, driven by accelerated digital transformation efforts.

### 6.3 Customer Satisfaction and Retention

Independent surveys show a customer satisfaction rating of 4.8 out of 5, with significant improvements in retention rates.

---

## 7. Strategic Collaborations and Partnerships

### 7.1 Partnership with Tech Giant

Announced on June 30, 2025, the strategic alliance combines YourCompany’s innovative technology with Tech Giant’s global reach, aiming to co-develop AI-driven cloud security solutions.

### 7.2 Joint Product Pipeline

Several upcoming products leveraging AI and cloud infrastructure are slated for release within the next 18 months.

---

## 8. Research & Development: Fueling Innovation

### 8.1 Investment Growth

YourCompany increased its R\&D budget by 40%, focusing heavily on AI research, cloud computing, and cybersecurity.

### 8.2 Innovation Labs

State-of-the-art labs across multiple geographies enable rapid prototyping and testing of new features.

---

## 9. Leadership Vision: Insights from YourCompany’s CEO

### 9.1 Conference Keynote

At the Global Tech Conference on July 20, 2025, the CEO outlined a vision centered on leveraging AI responsibly to foster sustainable growth.

### 9.2 Ethical AI Commitment

The company pledges adherence to global ethical standards in AI development, emphasizing transparency and fairness.

---

## 10. Industry Trends and Competitive Landscape

### 10.1 Digital Transformation Drivers

Increased automation, cloud adoption, and AI proliferation define the backdrop against which YourCompany innovates.

### 10.2 Competitive Positioning

The product’s unique blend of features positions YourCompany as a market leader, outperforming competitors on both functionality and user experience.

---

## 11. Customer Success Stories and Use Cases

### 11.1 Large-Scale Enterprise Deployment

A Fortune 500 client reported a 30% increase in operational efficiency after adopting the product.

### 11.2 Small Business Impact

SMEs benefited from cost savings and improved customer engagement through the product’s scalable features.

---

## 12. Regulatory Compliance and Ethical Standards

### 12.1 Data Privacy Compliance

The product complies with GDPR, CCPA, and other regional data protection regulations.

### 12.2 Security Certifications

ISO 27001, SOC 2 Type II, and other certifications demonstrate rigorous security practices.

---

## 13. Future Roadmap: What Lies Ahead

### 13.1 Feature Enhancements

Plans include advanced multi-user collaboration, AI-driven personalization, and integration with emerging technologies like quantum computing.

### 13.2 Market Expansion

Targeting new markets in Europe and Latin America to broaden the product’s global footprint.

---

## 14. Conclusion: Positioning for the Future

YourCompany’s revolutionary product exemplifies the company’s leadership in innovation, sustainability, and customer-centric design. This product not only addresses current market needs but is also poised to evolve alongside future technological advancements.

---

## 15. Appendix: Deep Dives into Related Press Releases

### Press Release 1: Product Launch

* **Design Philosophy:** User-centric, accessible, intuitive.
* **AI Features:** Adaptive algorithms, predictive analytics, automation.

### Press Release 2: Strategic Partnership

* **Goals:** Combine expertise in AI, cloud, cybersecurity.
* **Upcoming Products:** AI-powered cloud security tools.

### Press Release 3: Financial Growth

* **Drivers:** Increased demand in APAC/NA, innovative launches.
* **R\&D Investments:** Boosted to accelerate innovation.

### Press Release 4: CEO Speech

* **Vision:** Ethical AI use, sustainability focus.
* **Conference Agenda:** Emerging trends and collaborations.

## 16. Global Supply Chain and Manufacturing Excellence

### 16.1 Sustainable Sourcing

YourCompany has revamped its supply chain to prioritize ethically sourced, sustainable materials that minimize environmental impact without compromising quality.

### 16.2 Advanced Manufacturing Technologies

Leveraging Industry 4.0 principles, the product manufacturing process utilizes automation, IoT sensors, and AI-driven quality control to ensure precision and scalability.

### 16.3 Risk Management and Resilience

The supply chain is designed with redundancy and real-time monitoring to mitigate risks from geopolitical disruptions, natural disasters, or pandemics, ensuring uninterrupted product availability.

---

## 17. Comprehensive Security Architecture

### 17.1 Zero Trust Security Model

Adopting a zero trust framework, the product continuously verifies every access request, minimizing insider threats and external breaches.

### 17.2 End-to-End Encryption

Data encryption is enforced at rest and in transit, ensuring maximum protection of sensitive user and corporate data.

### 17.3 Incident Response and Recovery

Built-in automated incident detection with AI-powered anomaly detection allows swift response and minimal downtime in case of attacks.

---

## 18. Developer Ecosystem and API Strategy

### 18.1 Open APIs and SDKs

YourCompany provides robust, well-documented APIs and SDKs that enable third-party developers and partners to build custom integrations and extensions.

### 18.2 Developer Portal and Community

A dedicated portal offers extensive tutorials, forums, and support channels to foster a vibrant developer ecosystem around the product.

### 18.3 Marketplace and Partner Programs

The company encourages third-party solutions through a marketplace and partner certification programs, expanding product functionality and market reach.

---

## 19. Training, Adoption, and Change Management

### 19.1 Comprehensive Training Programs

YourCompany offers tailored training modules, webinars, and hands-on workshops to facilitate smooth adoption by users of all skill levels.

### 19.2 User Onboarding Experience

The product includes interactive onboarding wizards and contextual help features to reduce the learning curve and increase user engagement.

### 19.3 Change Management Consulting

For enterprise customers, YourCompany provides expert change management services to align organizational processes with the new technology.

---

## 20. Environmental and Social Governance (ESG) Impact

### 20.1 Carbon Neutral Goals

YourCompany has committed to achieving carbon neutrality by 2030, with this product designed to minimize energy consumption and resource waste.

### 20.2 Social Responsibility Initiatives

Partnerships with NGOs and community programs aim to leverage the product to improve education, healthcare, and economic opportunities globally.

### 20.3 Transparency and Reporting

Regular sustainability reports detail progress and challenges, reinforcing the company’s commitment to ESG principles.

---

## 21. Customization and Localization

### 21.1 Multi-Language Support

The product supports over 50 languages with localized UI/UX adaptations for cultural relevancy.

### 21.2 Regulatory Compliance by Region

Tailored features ensure compliance with region-specific laws including data sovereignty, privacy, and industry regulations.

### 21.3 Flexible Deployment Options

Customers can choose cloud, hybrid, or on-premise deployments to meet diverse operational requirements.

---

## 22. Competitive Benchmarking and Industry Recognition

### 22.1 Side-by-Side Comparisons

Independent analyst reports place YourCompany’s product ahead in areas like innovation, user satisfaction, and total cost of ownership compared to leading competitors.

### 22.2 Awards and Certifications

The product has earned numerous industry awards, including “Best Innovation in AI” and “Top Cloud Product 2025.”

### 22.3 Analyst Endorsements

Prominent firms such as Gartner and Forrester have recognized YourCompany as a “Leader” in their respective Magic Quadrants and Waves.

---

## 23. Integration with Emerging Technologies

### 23.1 Internet of Things (IoT) Connectivity

Seamless integration with IoT devices allows real-time data gathering and control across smart environments.

### 23.2 Blockchain for Security and Transparency

Pilot projects are underway to leverage blockchain for secure audit trails and transaction validation.

### 23.3 Preparing for Quantum Computing

YourCompany invests in quantum-resistant encryption methods and explores quantum computing applications for future-ready performance.

---

## 24. Customer Feedback Loops and Continuous Improvement

### 24.1 Real-Time Feedback Channels

Embedded feedback tools collect user insights and bug reports, feeding directly into agile development cycles.

### 24.2 Beta Programs and Early Access

Select customers participate in beta testing new features, influencing product direction.

### 24.3 Continuous Delivery and Updates

YourCompany uses continuous integration/continuous delivery (CI/CD) pipelines for frequent, seamless product updates without downtime.

* Everything from your current article (the 24 sections) in more detail
* Additional technical deep dives (architecture diagrams, devops, CI/CD, testing, security audits)
* Expanded market analysis (global regions, verticals, customer segmentation)
* Detailed competitor analyses & case studies
* Extended partner ecosystems (resellers, integrators, cloud platforms)
* More on social responsibility and ESG (governance, ethics, community impact)
* In-depth R\&D & innovation pipeline insights
* Product lifecycle management & versioning strategy
* Sales & marketing strategies & campaigns
* Customer success programs & detailed testimonials
* Industry forecasts & future-proofing strategies
* Human capital strategy & culture behind innovation
* Comprehensive legal & compliance landscape
* Localization & internationalization strategies
* Extensive appendices with technical specs, data sheets, interviews

---

## Expanded Mega Article: “YourCompany’s Revolutionary New Product — The Definitive, Authoritative Guide and Industry Game-Changer”

---

### Table of Contents (Expanded)

1. The Genesis of the Revolutionary Product
2. Design Philosophy: Marrying Form with Function
3. Core Technologies and Innovations
4. AI-Driven Features and Capabilities
5. Performance, Scalability, and Sustainability
6. Market Reception and Financial Impact
7. Strategic Collaborations and Partnerships
8. Research & Development: Fueling Innovation
9. Leadership Vision: Insights from YourCompany’s CEO
10. Industry Trends and Competitive Landscape
11. Customer Success Stories and Use Cases
12. Regulatory Compliance and Ethical Standards
13. Future Roadmap: What Lies Ahead
14. Global Supply Chain and Manufacturing Excellence
15. Comprehensive Security Architecture
16. Developer Ecosystem and API Strategy
17. Training, Adoption, and Change Management
18. Environmental and Social Governance (ESG) Impact
19. Customization and Localization
20. Competitive Benchmarking and Industry Recognition
21. Integration with Emerging Technologies
22. Customer Feedback Loops and Continuous Improvement
23. Technical Architecture Deep Dive
24. DevOps, Testing, and Continuous Delivery
25. Sales & Marketing Strategy and Campaigns
26. Global Market Expansion Strategy
27. Human Capital, Culture, and Talent Development
28. Legal Landscape, Intellectual Property & Compliance
29. Product Lifecycle and Versioning Strategy
30. Community Engagement and Social Impact
31. In-Depth Case Studies & Vertical Market Use Cases
32. Partner Ecosystem & Marketplace Strategy
33. Crisis Management & Risk Mitigation
34. Future-Proofing and Innovation Pipeline
35. Appendix: Extended Press Releases, Interviews, Technical Specs

---

### Sample Expanded Section Drafts (to illustrate scale & depth)

---

### 23. Technical Architecture Deep Dive

#### 23.1 Microservices Design and Communication Protocols

This section offers a full architectural blueprint describing each microservice, its responsibilities, communication protocols (gRPC, REST, event-driven architectures), and fault-tolerance strategies.

#### 23.2 Data Storage and Management

Detailed discussion on the databases used (relational, NoSQL), data sharding, replication strategies, and real-time data streaming via Kafka or similar.

#### 23.3 Cloud Infrastructure & Multi-Region Deployment

Analysis of cloud providers used, multi-region failover, CDN strategies, and autoscaling logic.

#### 23.4 API Gateway and Security Layers

Comprehensive explanation of API management, throttling, authentication & authorization (OAuth 2.0, JWT), and rate limiting.

#### 23.5 Monitoring, Logging, and Observability

Overview of centralized logging (ELK stack), real-time monitoring (Prometheus, Grafana), and alerting mechanisms ensuring uptime and quick incident response.

---

### 24. DevOps, Testing, and Continuous Delivery

#### 24.1 CI/CD Pipeline Architecture

Step-by-step breakdown of the automated pipelines that handle building, testing, and deployment with tools such as Jenkins, CircleCI, GitHub Actions.

#### 24.2 Automated Testing Suite

Explanation of unit tests, integration tests, end-to-end tests, security scanning, and load testing methodologies.

#### 24.3 Infrastructure as Code and Containerization

Description of infrastructure management using Terraform, Helm charts, and Kubernetes for container orchestration.

---

### 25. Sales & Marketing Strategy and Campaigns

#### 25.1 Go-To-Market Strategy

In-depth look at market segmentation, buyer personas, and targeted campaigns for different verticals.

#### 25.2 Digital Marketing & Lead Generation

Analysis of paid advertising, SEO, content marketing, and social media strategies that drive adoption.

#### 25.3 Channel Sales and Partner Enablement

Discussion on reseller programs, co-marketing initiatives, and partner training.

---

### 31. In-Depth Case Studies & Vertical Market Use Cases

* **31.1 Finance Sector: Risk Management Transformation**
* **31.2 Healthcare: Enhancing Patient Care with AI**
* **31.3 Retail: Omnichannel Customer Engagement**
* **31.4 Manufacturing: Predictive Maintenance and IoT Integration**

Each includes measurable KPIs, ROI analyses, customer quotes, and implementation lessons.

---

### What next?

If you want, I can generate:

* A fully written **giant mega article** section by section (huge text blocks, thousands of words per section), or
* A fully fleshed-out **structured outline with bullet points and summaries** for all 35 sections, or
* Specific expanded sections you want to deep dive on first.


`.repeat(2);

const PressReleases = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReleases, setFilteredReleases] = useState(pressReleasesData);
  const [selectedRelease, setSelectedRelease] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [fullArticleOpen, setFullArticleOpen] = useState(false);
  const [fullArticleTitle, setFullArticleTitle] = useState("");
  const [fullArticleContent, setFullArticleContent] = useState("");

  useEffect(() => {
    if (!searchTerm.trim()) setFilteredReleases(pressReleasesData);
    else {
      const lower = searchTerm.toLowerCase();
      setFilteredReleases(
        pressReleasesData.filter((pr) =>
          pr.title.toLowerCase().includes(lower)
        )
      );
    }
  }, [searchTerm]);

  const openModal = useCallback((id) => {
    setModalOpen(true);
    setLoadingDetails(true);
    setSelectedRelease(null);
    setTimeout(() => {
      const release = pressReleasesData.find((pr) => pr.id === id);
      setSelectedRelease(release);
      setLoadingDetails(false);
    }, 800);
  }, []);

  const closeModal = () => setModalOpen(false);

  const openFullArticle = (e, title, content) => {
    e.preventDefault();
    setFullArticleTitle(title);
    setFullArticleContent(content || largeArticleText);
    setFullArticleOpen(true);
  };
  const closeFullArticle = () => setFullArticleOpen(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        if (fullArticleOpen) closeFullArticle();
        else if (modalOpen) closeModal();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalOpen, fullArticleOpen]);

  return (
    <>
      <section className="bg-gray-900 py-16 px-4 sm:px-8 mb-[-30px] my-15">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-yellow-400 text-3xl sm:text-4xl font-bold">
            Press Releases
          </h2>
          <p className="mt-4 text-yellow-300 text-lg my-[-50px]">
            Stay updated with our latest news and official announcements.
          </p>

          <div className="mt-8">
            <input
              type="search"
              placeholder="Search press releases..."
              aria-label="Search press releases"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mt-10 space-y-6 text-left max-w-3xl mx-auto">
            {filteredReleases.length === 0 ? (
              <p className="text-center italic text-yellow-300">
                No press releases found.
              </p>
            ) : (
              filteredReleases.map(({ id, title, date, summary }) => (
                <button
                  key={id}
                  onClick={() => openModal(id)}
                  className="w-full text-left bg-gray-800 rounded-lg p-6 shadow hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  aria-label={`Read ${title}`}
                >
                  <h3 className="text-yellow-400 text-xl font-semibold">
                    {title}
                  </h3>
                  <time className="text-yellow-300 text-sm font-mono">{date}</time>
                  <p className="mt-2 text-yellow-300">{summary}</p>
                </button>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6 rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {loadingDetails ? (
              <Spinner />
            ) : selectedRelease ? (
              <>
                <h2 className="text-yellow-400 text-2xl font-bold mb-2">
                  {selectedRelease.title}
                </h2>
                <time className="text-yellow-300 text-sm font-mono">
                  {selectedRelease.date}
                </time>
                <p className="mt-4 text-yellow-300 whitespace-pre-line">
                  {selectedRelease.content}
                </p>
                <a
                  href={selectedRelease.link}
                  onClick={(e) =>
                    openFullArticle(e, selectedRelease.title, largeArticleText)
                  }
                  className="mt-6 inline-block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-300 focus:outline-none"
                  role="button"
                >
                  Read Full Article
                </a>

                {relatedArticlesData[selectedRelease.id] && (
                  <section className="mt-10 border-t border-yellow-700 pt-6">
                    <h3 className="text-yellow-400 text-xl font-semibold mb-4">
                      Related Articles
                    </h3>
                    <ul className="space-y-4">
                      {relatedArticlesData[selectedRelease.id].map(
                        ({ id, title, summary, content }) => (
                          <li
                            key={id}
                            className="bg-gray-800 rounded-md p-4 shadow"
                          >
                            <button
                              onClick={(e) => openFullArticle(e, title, content)}
                              className="text-yellow-300 text-lg font-semibold hover:text-yellow-400 focus:outline-none"
                            >
                              {title}
                            </button>
                            <p className="mt-1 text-yellow-300">{summary}</p>
                          </li>
                        )
                      )}
                    </ul>
                  </section>
                )}
              </>
            ) : (
              <p className="text-yellow-300">No content to display.</p>
            )}
          </div>
        </div>
      )}

      {/* Full Article Modal */}
      {fullArticleOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-60"
          onClick={closeFullArticle}
        >
          <div
            className="bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeFullArticle}
              aria-label="Close"
              className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-yellow-400 text-3xl font-bold mb-6">
              {fullArticleTitle}
            </h2>
            <article className="text-yellow-300 text-sm sm:text-base whitespace-pre-line leading-relaxed">
              {fullArticleContent}
            </article>
          </div>
        </div>
      )}
    </>
  );
};

export default PressReleases;
