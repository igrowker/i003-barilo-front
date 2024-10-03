export type CrowdfundingData = {
  profile: "organizer" | "donor" | "approvedDonation";
  title?: string;
  subtitle?: string;
  text?: string;
  image?: string;
  buttons?: {
    label?: string;
    action?: () => void;
  }[];
};
