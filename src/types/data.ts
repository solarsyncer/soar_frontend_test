export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "user" | "admin";
  username: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  password: string;
}

export interface Card {
  id: string;
  cardNumber: string;
  cardType: "visa" | "mastercard" | "amex";
  expiryDate: string;
  balance: number;
  currency: string;
  cardHolder: string;
  validThru: string;
}

export interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: "deposit" | "paypal" | "send";
  category: string;
  status: "completed" | "pending" | "failed";
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
  }[];
}
