import {
  FAQConfigItem,
  FAQItemProps,
  HelpCenterView,
} from "@/types/HelpCenter";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const useHelpCenter = () => {
  const [activeView, setActiveView] = useState<
    HelpCenterView.FAQ | HelpCenterView.Contact
  >(HelpCenterView.FAQ);

  const setActiveViewHelper = (view: HelpCenterView) => {
    setActiveView((prevActiveView) =>
      prevActiveView !== view ? view : prevActiveView
    );
  };

  return { activeView, setActiveViewHelper };
};

export const faqConfig: FAQConfigItem[] = [
  {
    id: "create_trip",
    question: "faq.create_trip.question",
    answer: "faq.create_trip.answer",
    topicKey: "faq.create_trip.topic",
  },
  {
    id: "trip_cost",
    question: "faq.trip_cost.question",
    answer: "faq.trip_cost.answer",
    topicKey: "faq.trip_cost.topic",
  },
  {
    id: "trip_types",
    question: "faq.trip_types.question",
    answer: "faq.trip_types.answer",
    topicKey: "faq.trip_types.topic",
  },
  {
    id: "payment",
    question: "faq.payment.question",
    answer: "faq.payment.answer",
    topicKey: "faq.payment.topic",
  },
  {
    id: "cancellation",
    question: "faq.cancellation.question",
    answer: "faq.cancellation.answer",
    topicKey: "faq.cancellation.topic",
  },
  {
    id: "support",
    question: "faq.support.question",
    answer: "faq.support.answer",
    topicKey: "faq.support.topic",
  },
  {
    id: "documentation",
    question: "faq.documentation.question",
    answer: "faq.documentation.answer",
    topicKey: "faq.documentation.topic",
  },
  {
    id: "sharing",
    question: "faq.sharing.question",
    answer: "faq.sharing.answer",
    topicKey: "faq.sharing.topic",
  },
  {
    id: "register",
    question: "faq.register.question",
    answer: "faq.register.answer",
    topicKey: "faq.register.topic",
  },
  {
    id: "search_trips",
    question: "faq.search_trips.question",
    answer: "faq.search_trips.answer",
    topicKey: "faq.search_trips.topic",
  },
  {
    id: "join_trip",
    question: "faq.join_trip.question",
    answer: "faq.join_trip.answer",
    topicKey: "faq.join_trip.topic",
  },
  {
    id: "add_remove_participants",
    question: "faq.add_remove_participants.question",
    answer: "faq.add_remove_participants.answer",
    topicKey: "faq.add_remove_participants.topic",
  },
  {
    id: "update_profile",
    question: "faq.update_profile.question",
    answer: "faq.update_profile.answer",
    topicKey: "faq.update_profile.topic",
  },
];

export const useFilteredQuestions = () => {
  const [questions, setFilteredQuestions] = useState<FAQItemProps[]>([]);
  const [activeTheme, setActiveTheme] = useState<string>("popular_topic");
  const { t } = useTranslation();
 
  const setFilteredQuestionsByTheme = (theme: string) => {
    setFilteredQuestions(
      faqConfig
        .filter((item) => t(item.topicKey) === theme)
        .map((item) => ({
          index: 0,
          question: t(item.question),
          answer: t(item.answer),
        }))
    );
    setActiveTheme(theme);
  };

  useEffect(() => {
    setFilteredQuestionsByTheme("popular_topic");
  }, []);

  return { questions, setFilteredQuestionsByTheme, activeTheme };
};
