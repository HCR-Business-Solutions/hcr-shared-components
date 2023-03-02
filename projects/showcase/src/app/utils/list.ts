export function rand_from_list<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}
