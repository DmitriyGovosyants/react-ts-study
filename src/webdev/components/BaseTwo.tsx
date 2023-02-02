const BaseTwo = () => {
  //? 1. array type
  let list: number[] = [1, 2, 3];
  let list1: Array<number> = [1, 2, 3]; // generic type
   
  //? 2. tuple type
  // multiple lines
  let x: [string, number];
  x = ["hello", 10];
  // one line
  let y: [string, number] = ["goodbye", 42];

  //? 3. any type
  // for array
  let z: [any, any] = ["goodbye", 43];
  let w: Array<any> = [10, "hello"];
  // for string
  let notSure: any = false;

  //? 4. enum type
  enum Directions {
    Up = 2,
    Down,
    Left,
    Right
  }
  enum links {
    youtube = "https://youtube.com/",
    you = "https://you.com/",
    facebook = "https://facebook.com/",
  }
  // without annesessary object
  const enum withoutObj {
    Up,
    Down
  }

  //? 5. reverse enum type
  enum Directions {
    Up1,
    Down2,
    Left3,
    Right4
  }

  //? 6. never type
  // function return Error
  const msg = "hello";
  const error = (msg: string): never => {
    throw new Error(msg);
  };
  // function infinite loop
  const infiniteLoop = (): never => {
    while (true) {

    }
  }

  //? 7. object type
  const create = (o: object | null): void => { };
  create({ obj: 1 });

  //? 8. multiple types for one value
  let id: number | string;
  id = 10;
  id = "42";

  return (
    <>
      <h2>Base TS types</h2>
      <div><b>1. array type:</b> number[] or Array with generic number</div>
      <div><b>2. tuple type:</b> [string, number]</div>
      <div><b>3. any type:</b> [any, any] or Array with generic any</div>
      <div><b>4. enum type:</b> use Directions.Up Directions.Down Directions.Left Directions.Right</div>
      <div><b>4. reverse enum type:</b> use Directions[0] Directions[1] Directions[2] Directions[3]</div>
      <div><b>6. never type:</b> use when function always return error or function has infinite loop</div>
      <div><b>7. object type:</b> object | null</div>
      <div><b>8. multiple types for one value:</b> use | </div>
    </>
  )
}

export default BaseTwo;