export const capos = Array.from(Array(10).keys())
export const decades = [2020, 2010, 2000, 1990, 1980, 1970, 1960]
export const genres =['pop', 'punk', 'emo', 'folk', 'electronic', 'soundtrack']

export const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}