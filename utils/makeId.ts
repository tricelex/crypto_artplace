export const makeId = (length: number) => {
  let result = '';

  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const characterLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characterLength));
  }

  return result;
};
