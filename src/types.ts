export interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface UserProfile {
  name: string;
  address: string;
  email: string;
}

export interface SLA {
  id: number;
  name: string;
  cost: number;
}

export interface PaymentMethod {
  id: number;
  method: string;
}