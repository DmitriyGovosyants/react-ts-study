const Function = () => {
  //? 1. function with two required arguments
  const createPassword = (name: string = 'Max', age: number | string = 20): string => `${name}${age}`;
  console.log(createPassword());
  console.log(createPassword("dem", 31));

  //? 2. function with optional argument 'age'
  const createPassword2 = (name: string, age?: number): string => `${name}${age}`;
  console.log(createPassword2('Jack'));

  //? 3. REST type
  const createSkills = (name: string, ...skills: Array<string>) => `${name}, my skills are ${skills.join()}`;

  //? 4. describe funtion type
  let myFunc: (firstArg: string) => void;
  function oldFunc(name: string):void {
    alert(`Hello ${name}, nice to see you!`);
  };
  myFunc = oldFunc;

  return (
    <>
      <h2>Function types</h2>
      <div><b>1. function:</b> req arguments</div>
      <div><b>2. function with optional argument:</b> use ? after arg</div>
      <div><b>3. rest type:</b> {createSkills('Jack', "jS", "ES6")}</div>
      <div><b>4. describe func type:</b>for no arrow function</div>
    </>
  )
}

export default Function;
