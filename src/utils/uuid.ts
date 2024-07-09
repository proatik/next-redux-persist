export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export const uuid = (): UUID => {
  const segments = 5,
    segmentLength = 5;

  const getRandomDigits = (length: number): string => {
    let digits = "";

    for (let i = 0; i < length; i++) {
      digits += Math.floor(Math.random() * 10).toString();
    }

    return digits;
  };

  let uuid = "";

  for (let i = 0; i < segments; i++) {
    uuid += getRandomDigits(segmentLength);

    if (i < segments - 1) {
      uuid += "-";
    }
  }

  return uuid as UUID;
};
