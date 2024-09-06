// Create a Cat class with name, color, breed.
class Cat {
  private name: string;
  private color: string;
  private breed: string;

  // Create a constructor that takes 3 parameters to create an object with name, color, breed.
  constructor(name: string, color: string, breed: string) {
    this.name = name;
    this.color = color;
    this.breed = breed;
  }

  // Create a function/method that returns the cat's data.
  public returnData(): { name: string; color: string; breed: string } {
    return {
      name: this.name,
      color: this.color,
      breed: this.breed,
    };
  }

  // Create a function that can change the cat's name.
  public changeName(newCatName: string): void {
    this.name = newCatName;
  }
}

const cat = new Cat('', 'yellow', 'common housecat');
cat.changeName('Kot');
console.log(cat.returnData());

type CarMake =
  | 'Toyota'
  | 'Volkswagen'
  | 'Ford'
  | 'Honda'
  | 'Nissan'
  | 'Chevrolet'
  | 'BMW'
  | 'Mercedes-Benz'
  | 'Hyundai'
  | 'Kia';

// Create a class named Car
class Car {
  private make: CarMake;
  private model: string;
  private year: number;

  public isRunning: boolean = false;

  // Add a constructor that accepts make, model, and year as parameters and initializes these
  // properties
  constructor(make: CarMake, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  /**
   * getCarInfo method: This method should return a string containing the car's make, model, and year.
   * @returns a string I guess
   */
  public getCarInfo(): string {
    return `\nCar make: ${this.make}\nCar model: ${this.model}\nCar year: ${this.year}`;
  }

  public start(): void {
    this.isRunning = true;
    console.log(`Car running status is set to ${this.isRunning}`);
  }

  public stop(): void {
    this.isRunning = false;
    console.log(`Car running status is set to ${this.isRunning}`);
  }
}

const carArr: Car[] = [new Car('Honda', 'Civic', 2005), new Car('Toyota', 'Corolla', 1997)];

carArr.forEach((c) => {
  const info = c.getCarInfo();
  console.log(info);
  console.log(`Car running status is currently: ${c.isRunning}`);
  c.start();
  c.stop();
});
