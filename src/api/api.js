import Dexie from "dexie";
const FAKE_DELAY_DURATION_IN_SECONDS = 1;

const db = new Dexie("myDb");
db.version(3).stores({
  rentings: `++id, days, rentingDate, model`,
});

const Api = {};

export const bikeTypes = Object.freeze({
  STANDARD: "STANDARD",
  ELECTRIC: "ELECTRIC",
  VINTAGE: "VINTAGE",
});

export const bikeCategories = Object.freeze({
  BASIC: "BASIC",
  PREMIUM: "PREMIUM",
});

const bikeModels = [
  {
    id: 1,
    type: bikeTypes.STANDARD,
    category: bikeCategories.BASIC,
    imgSrc:
      "https://contents.mediadecathlon.com/p1863836/k$044cecb5d46ae70946b3a883735e7e8b/sq/8555876.jpg?format=auto&f=320x320",
  },
  {
    id: 2,
    type: bikeTypes.STANDARD,
    category: bikeCategories.PREMIUM,
    imgSrc:
      "https://contents.mediadecathlon.com/p2146738/k$77edc8b2e118e0e506dbb48c6eb88dda/sq/8761767.jpg?format=auto&f=320x320",
  },
  {
    id: 3,
    type: bikeTypes.ELECTRIC,
    category: bikeCategories.BASIC,
    imgSrc:
      "https://contents.mediadecathlon.com/p1125988/k$99acd343381a5d017cad3efa9b1a28bf/sq/8605298.jpg?format=auto&f=320x320",
  },
  {
    id: 4,
    type: bikeTypes.ELECTRIC,
    category: bikeCategories.PREMIUM,
    imgSrc:
      "https://contents.mediadecathlon.com/p1953749/k$3c4803e9ef02ee1dd4572a47f374caf2/sq/8614842.jpg?format=auto&f=320x320",
  },
  {
    id: 5,
    type: bikeTypes.VINTAGE,
    category: bikeCategories.BASIC,
    imgSrc:
      "https://contents.mediadecathlon.com/p1817973/k$7eabcf2d482dd6e57803130cb0be4523/sq/8405475.jpg?format=auto&f=320x320",
  },
  {
    id: 6,
    type: bikeTypes.VINTAGE,
    category: bikeCategories.PREMIUM,
    imgSrc:
      "https://contents.mediadecathlon.com/p1958115/k$6acd834d68cdf473dd080e86b341ba84/sq/8626797.jpg?format=auto&f=320x320",
  },
];

Api.getAllModels = async () => {
  await new Promise((resolve) =>
    setTimeout(resolve, FAKE_DELAY_DURATION_IN_SECONDS * 1000)
  );
  return bikeModels;
};

Api.getAllRentings = async () => {
  // @ts-ignore
  try {
    const rentings = await db.rentings.reverse().toArray();
    await new Promise((resolve) =>
      setTimeout(resolve, FAKE_DELAY_DURATION_IN_SECONDS * 1000)
    );
    return rentings;
  } catch (e) {
    console.error("Api.getAllRentings error");
    console.error(e);
    return [];
  }
};

Api.addRenting = async (newRentingDto) => {
  // @ts-ignore
  try {
    await db.rentings.put({ ...newRentingDto });
    await new Promise((resolve) =>
      setTimeout(resolve, FAKE_DELAY_DURATION_IN_SECONDS * 1000)
    );
  } catch (e) {
    console.error("Api.addRenting error");
    console.error(e);
  }
  return true;
};

export default Api;
