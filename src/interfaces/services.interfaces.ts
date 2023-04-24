export interface IServiceRequest {
  name: string;
  price: number;
}

export interface IServiceUpdateRequest {
  name?: string;
  price?: number;
}
