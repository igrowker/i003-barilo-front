export interface FAQItemProps {
  index: number;
  question: string;
  answer: string;
}

export interface FAQConfigItem extends Omit<FAQItemProps, "index"> {
  id: string;
  topicKey: string;
}

export interface ContactProps {
  icon: JSX.Element;
  url: string;
  text: string;
}

export interface HelpCenterProps {
  faq: FAQItemProps[];
  contact: ContactProps[];
}

export enum HelpCenterView {
  FAQ = "faq",
  Contact = "contact",
}
