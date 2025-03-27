import React, { useState } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { ChevronDown, ChevronUp } from "lucide-react";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

const assetManagementData = {
  "Investment Planning": {
    description:
      "Comprehensive strategies for long-term financial growth and risk management.",
    duration: "12 weeks",
    fees: "Rs. 10,000/-",
    paymentOptions: [
      "Rs. 9,500/- (One-time)",
      "Rs. 5,000/- + Rs. 5,000/- (Installments)",
    ],
    modules: [
      "Portfolio Diversification & Risk Assessment",
      "Stock Market Analysis & Trading Strategies",
      "Real Estate Investment & Asset Allocation",
      "Mutual Funds, Bonds & Alternative Investments",
      "Tax-efficient Investment Strategies",
      "Retirement Planning & Wealth Management",
      "Financial Tools & Software for Asset Management",
    ],
  },
  "Insurance & Risk Management": {
    description:
      "Understand the fundamentals of insurance policies and risk mitigation strategies.",
    duration: "12 weeks",
    fees: "Rs. 10,000/-",
    paymentOptions: [
      "Rs. 9,500/- (One-time)",
      "Rs. 5,000/- + Rs. 5,000/- (Installments)",
    ],
    modules: [
      "Types of Insurance: Life, Health, Property, Liability",
      "Risk Assessment & Underwriting Principles",
      "Insurance Claim Handling & Policy Structuring",
      "Actuarial Science & Premium Calculations",
      "Regulatory Framework & Compliance",
      "Insurance Tech & AI-driven Risk Predictions",
      "Ethics & Legal Aspects of Insurance",
    ],
  },
  "Financial Advisory & Wealth Management": {
    description:
      "Practical training in financial consulting, investment strategies, and wealth growth.",
    duration: "12 weeks",
    fees: "Rs. 12,000/-",
    paymentOptions: [
      "Rs. 11,500/- (One-time)",
      "Rs. 6,000/- + Rs. 6,000/- (Installments)",
    ],
    modules: [
      "Personal Finance & Budgeting",
      "Investment Portfolio Management",
      "Real Estate & Business Valuation",
      "Tax Planning & Financial Regulations",
      "Wealth Preservation & Succession Planning",
      "Client Relationship Management & Consulting Skills",
      "Advanced Financial Tools & Forecasting Techniques",
    ],
  },
};

export default function AssetManagementSection() {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (key) => {
    setExpandedSections((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  return (
    <ParallaxProvider>
      <ContentWrapper>
        <div className="w-full relative mt-10 mx-auto bg-white shadow-even rounded-2xl p-4 flex flex-col md:w-[86%] md:p-8 text-center">
          <h1 className="text-3xl font-extrabold mb-6">
            Asset Management Programs
          </h1>

          <div className="space-y-4">
            {Object.keys(assetManagementData).map((key) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="p-4 shadow-lg rounded cursor-pointer bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                  onClick={() => toggleSection(key)}
                >
                  <span className="font-semibold">{key}</span>
                  {expandedSections.includes(key) ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>

                {expandedSections.includes(key) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 p-4 rounded bg-gray-50 shadow-lg text-left"
                  >
                    <h2 className="text-xl font-semibold">{key}</h2>
                    <p className="mt-2 text-gray-600">
                      {assetManagementData[key].description}
                    </p>
                    <p className="mt-2 text-gray-500">
                      <strong>Duration:</strong>{" "}
                      {assetManagementData[key].duration}
                    </p>
                    <p className="mt-2 text-gray-500">
                      <strong>Fees:</strong> {assetManagementData[key].fees}
                    </p>
                    <p className="mt-2 text-gray-500 font-semibold">
                      Payment Options:
                    </p>
                    <ul className="mt-2 list-disc ml-5 text-gray-600">
                      {assetManagementData[key].paymentOptions.map(
                        (option, index) => (
                          <li key={index}>{option}</li>
                        )
                      )}
                    </ul>
                    <p className="mt-2 text-gray-500 font-semibold">
                      Module Details:
                    </p>
                    <ul className="mt-2 list-disc ml-5 text-gray-600">
                      {assetManagementData[key].modules.map((option, index) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </ParallaxProvider>
  );
}
