function formatString(input: string, toUpper?: boolean): string;
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper) return input.toUpperCase();
  else return input.toLowerCase();
}

function filterByRating(
  items: { title: string; rating: number }[],
): { title: string; rating: number }[];
function filterByRating(
  items: { title: string; rating: number }[],
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[];
function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  arrays.forEach((item) => result.push(...item));
  return result;
}

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel(): string {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number;
function processValue(value: string | number): number {
  if (typeof value === "string") return value.length;
  return value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null;
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (!products.length) return null;
  let highestPrice = 0;
  let expensiveProduct: Product | null = null;
  products.forEach((item) => {
    if (item.price > highestPrice) {
      highestPrice = item.price;
      expensiveProduct = item;
    }
  });
  return expensiveProduct;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string;
function getDayType(day: Day): string {
  const weekends = [Day.Saturday, Day.Sunday];
  if (weekends.includes(day)) return "Weekend";
  return "Weekday";
}

async function squareAsync(n: number): Promise<number>;
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject("Error: Negative number not allowed");
    }

    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}
