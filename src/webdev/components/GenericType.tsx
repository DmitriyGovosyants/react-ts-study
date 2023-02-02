import { FC } from "react";

const GenericType: FC = () => {
  //? 1. generic type
  // ES6
  const getter1 = <T extends any>(data: T): T => data;
  console.log(getter1(1));
  // ES5
  function getter2<T>(data: T): T {
    return data;
  }
  console.log(getter2(2))

  //? 2. define type in function calling
  console.log(getter1<number>(3333)); // указьівается получаемьі тип данньіх
  console.log(getter1<string>('4444'));
  
  //? 3. generic in class
  class User<T> {
    constructor(public name: T, public age: T) { }
    
    public getPass(): string {
      return `${this.name}${this.age}`;
    }
  }
  const dem = new User("Dem", '31');
  const max = new User(123, 123);
  console.log(dem.getPass());
  console.log(max.getPass());

  //? 4. multiply generic types in classes
  class User2<T, K> {
    constructor(public name: T, public age: K) { }
    
    public getPass(): string {
      return `${this.name}${this.age}`;
    }
  }
  const dem2 = new User2("Dem", '31');
  const max2 = new User2(123, 123);
  const leo2 = new User2("leo", 123);
  console.log(dem2.getPass());
  console.log(max2.getPass());
  console.log(leo2.getPass());

  //? 5. Extends for classes
  class User3<T, K extends number> {
    constructor(public name: T, public age: K) { }
    
    public getPass(): string {
      return `${this.name}${this.age}`;
    }

    public getSecret(): number {
      return this.age**2;
    }
  }

  return (
    <>
      <h2>Generic types</h2>
      <div><b>1. Generic for function expression and function declaration</b></div>
      <div><b>2. Define type in function calling</b></div>
      <div><b>3. Generic in classes</b></div>
      <div><b>4. Multiply generic types in classes</b></div>
      <div><b>5. Extends for classes</b></div>
    </>
  )
}

export default GenericType;
