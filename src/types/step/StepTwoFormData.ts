export interface PassageData {
    company: string;
    flightDate: string;
    origin: string;
    destination: string;
    time: string;
    price: number;
    type: 'flight' | 'bus';
} 

export interface StepTwoFormData {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    selectedOutbound?: PassageData;
    selectedReturn?: PassageData;
}
