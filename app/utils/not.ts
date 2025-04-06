type Falsy = undefined | null | false | 0 | ""
export const not = <T>(value: T | Falsy): value is Falsy => {
  return !value
}
