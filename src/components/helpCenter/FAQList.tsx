import { FAQItemProps } from "@/types/HelpCenter";
import FAQItem from "./FAQItem";
import { useTranslation } from "react-i18next";

const FAQList: React.FC<{ faqs: FAQItemProps[] }> = ({ faqs }) => {
  const { t } = useTranslation();
  return (
    <ul className="space-y-5 mt-4 mb-14 min-w-[330px] max-w-[500px]">
      {faqs.length ? (
        faqs.map((faq, index) => <FAQItem key={index} {...faq} />)
      ) : (
        <div className="text-center">{t("help.noContent")}</div>
      )}
    </ul>
  );
};

export default FAQList;
