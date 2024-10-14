export interface StepOneFormData {
  groupName: string;
  numberOfPeople: number;
}

export interface User {
  id: string;
  name: string;
}

export interface GroupData {
  name: string;
  studentsQuantity: number;
  users: User[];
}
