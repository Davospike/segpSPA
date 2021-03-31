export function times(i: number, cb: (n: number) => any, l = i): void {
  if (i === 0) {
    return;
  }

  cb(l - i);
  times(i - 1, cb, l);
}

export function shuffle(array: any[]): any[] {
  let currentIndex = array.length;
  let temporaryValue: any;
  let randomIndex: number;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function importToArray<Key extends string, PropType>(importObject: Record<Key, PropType>): PropType[] {
  const keys = Object.getOwnPropertyNames(importObject);
  return keys.filter(key => key.indexOf("__") !== 0).map(key => importObject[key]);
}
