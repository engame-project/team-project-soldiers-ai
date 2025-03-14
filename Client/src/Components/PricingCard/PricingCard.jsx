const PricingCard = ({ data }) => {
  const { package_name, price_per_month, description, features } = data;
  return (
    <>
      <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
        <div
          className={`flex flex-grow flex-col px-6 py-8 space-y-6 rounded-xl sm:p-8 bg-base-100 relative ${
            package_name !== "Pro" ? "" : "border-2 border-primary"
          }`}
        >
          <div className="space-y-2">
            <h4
              className={`text-lg md:text-xl lg:text-2xl font-medium text-base-content-secondary`}
            >
              {package_name}
            </h4>
            <span
              className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
                package_name !== "Pro" ? "text-base-content" : "text-primary"
              }`}
            >
              {price_per_month}
            </span>
          </div>
          <p className="mt-3 leading-relaxed text-base-content-secondary text-sm md:text-base lg:text-base">
            {description}
          </p>
          <ul className="flex-1 mb-6">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex mb-2 space-x-2 text-base-content/80 text-sm md:text-base lg:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-base-content"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`inline-block px-6 py-3 font-semibold tracking-wider text-center rounded-lg hover:bg-primary/80 border border-primary hover:border-primary/80 ${
              package_name !== "Pro"
                ? "text-primary hover:text-primary-content"
                : "bg-primary text-primary-content"
            }`}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
