export const shuffle = (arr: unknown[]) =>
  [...arr].sort(() => 0.5 - Math.random());

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const reverse = (i: number) => i % 2 === 0;

export function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

// export function io = (entries: )
