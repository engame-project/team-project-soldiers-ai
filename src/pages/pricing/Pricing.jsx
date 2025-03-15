import PricingCard from "../../Components/PricingCard/PricingCard";

const Pricing = () => {
  const data = [
    {
      package_name: "Beginner",
      price_per_month: "Free",
      description:
        "Ideal for individuals starting their learning journey with AI-generated courses.",
      features: [
        "Generate up to 3 courses per month",
        "Access to AI-Powered Course Outline Generation",
        "Personalized Learning",
        "Content Customization",
        "Assignments Generation",
        "Quizzes Generation",
        "Progress Tracker & Visual Dashboard",
        "FAQ Generator",
      ],
    },
    {
      package_name: "Pro",
      price_per_month: "$49",
      description:
        "Perfect for professionals seeking advanced features and enhanced learning experiences.",
      features: [
        "Generate up to 20 courses per month",
        "All Beginner package features",
        "AI-Created Images",
        "Content Voice-Over",
        "Certificate Issuance",
        "Priority Support",
      ],
    },
    {
      package_name: "Team",
      price_per_month: "$199",
      description:
        "Designed for teams and organizations aiming for collaborative learning and comprehensive analytics.",
      features: [
        "Unlimited course generation",
        "All Pro package features",
        "Multi-User Collaboration",
        "Advanced Analytics Dashboard",
        "Custom Domain Integration",
        "Dedicated Account Manager",
      ],
    },
  ];

  return (
    <>
      <section className="py-12 md:py-20 lg:py-32 bg-base-200 text-base-content px-5">
        <div className="container px-5 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-bold tracking-wider uppercase text-base-content-secondary">
              Pricing
            </span>
            <h2 className="text-4xl font-bold lg:text-5xl">
              Choose your best plan
            </h2>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            {data.map((item, idx) => (
              <PricingCard key={idx} data={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
