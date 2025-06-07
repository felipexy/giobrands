export default function ServicesSection() {
  const services = [
    {
      number: "01.",
      title: "Brand Strategy.",
      description:
        "Define the core of your brand clearly and strategically. Through comprehensive market analysis, clear positioning, and insightful storytelling, I help you build a strong foundation that guides growth and differentiates your brand.",
    },
    {
      number: "02.",
      title: "Visual Identity.",
      description:
        "Craft cohesive and powerful visual identities—including logo design, typography, color systems, and detailed brand guidelines. Every element is thoughtfully designed to authentically communicate your unique story and resonate at every touchpoint.",
    },
    {
      number: "03.",
      title: "Brand Collateral.",
      description:
        "Develop meticulously crafted materials, from sophisticated presentations and engaging marketing assets to consistent brand experiences across print and digital. Every detail matters, ensuring professional excellence and cohesive communication.",
    },
    {
      number: "04.",
      title: "Digital Experiences.",
      description:
        "Create engaging digital solutions including responsive websites, impactful social media content, and strategic digital campaigns. Designed for real-world results, each solution maximizes your brand's presence and deepens audience connections.",
    },
  ];

  return (
    <section className="py-16 px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Main Text */}
          <div className="flex flex-col">
            <div className="text-xs font-medium text-gray-600 mb-6 tracking-wider">
              (SERVIÇOS)
            </div>
            <h2 className="text-xl lg:text-2xl font-light leading-tight text-gray-900">
              Great design goes beyond aesthetics.
              <br />
              My approach is strategic, purposeful,
              <br />
              and built to drive clarity, recognition, and
              <br />
              lasting impact for your brand.
            </h2>
          </div>

          {/* Right Column - Services List */}
          <div className="flex flex-col space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0"
              >
                <div className="flex items-start gap-4">
                  <div className="text-sm font-medium text-gray-400 flex-shrink-0 mt-1">
                    {service.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
