
# What are some differences between interfaces and types in TypeScript?
- Types are mostly used for defining types for primitive data types and interface for non privitive types
- Types can be combined using the & intersection and interfaces can extend one and another
- Types cannot extend class but interface can
- we can use union to combine two types into one but we cannot use union to combine two interfaces into one interface. But we can combine two interfaces into one type using uniton. `type Person = IJack | IAdam`


# What is the use of the keyof keyword in TypeScript? Provide an example.
- The keyof keyword in typescript returns the keys of an object as an uniton. or if the type as index signature it returns the index signature type.
```ts
interface IPerson {
  name: string;
  age: number;
  country: string;
}

// here keyof will return the keys of the IPerson, name|age|country
type PersonKeys = keyof IPerson;

// and if we have index signature
interface IGameResult {
  [n: number]: number;
}
// here Game = number
type Game = keyof IGameResult;
```
