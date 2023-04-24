export interface ICarRequest {
  name: string;
  license_plate: string;
  list_image: [{ image: string }];
}

export interface ICarUpdateRequest {
  name?: string;
}
