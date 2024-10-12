export interface PassageData {
  companyName: string;
  departureDate: string;
  destination: {
    name: string;
  };
  price: number;
  transportCategory: "PREMIUM" | "STANDARD" | "BASIC";
  type: "flight" | "bus";
}

export interface StepTwoFormData {
  origin: string;
  destination: string;
  selectedOutbound?: PassageData | null;
  selectedReturn?: PassageData | null;
}
