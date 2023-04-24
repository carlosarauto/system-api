import prisma from '../../prisma';
import { CarReturnSchema } from '../../schemas';
import { ICarRequest } from '../../interfaces/cars.interfaces';

export const createCarService = async (
  { name, license_plate, list_image }: ICarRequest,
  client_id: string,
) => {
  const carData = await prisma.clientsOnCars.create({
    data: {
      car: {
        create: {
          name,
          license_plate,
          list_image: { createMany: { data: list_image } },
        },
      },
      client: { connect: { id: client_id } },
    },
  });

  const car = await prisma.car.findUnique({ where: { id: carData.car_id } });

  return CarReturnSchema.parse(car);
};
