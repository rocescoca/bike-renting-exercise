import Api from "api/api";

const getAllModels = async () => {
  return await Api.getAllModels();
};

const getAllRentings = async () => {
  return await Api.getAllRentings();
};

const addRenting = async (newRentingDto) => {
  return await Api.addRenting(newRentingDto);
};

const Bike = {
  getAllModels,
  getAllRentings,
  addRenting,
};

export default Bike;
