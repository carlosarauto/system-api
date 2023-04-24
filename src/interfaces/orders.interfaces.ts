export interface IOrderRequest {
  description?: string;
  price: number;
  services: [service: string];
  car_id: string;
  client_id: string;
}

export interface IOrderUpdateRequest {
  description?: string;
  price?: number;
}
