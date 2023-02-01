const BaseOne = () => {
  //? 1. boolean
  let isCompeleted: boolean = false;
  // isCompeleted = 42;     error
  // isCompeleted = '42';   error
  isCompeleted = true;

  //? 2. number
  const decimal: number = 6;
  const integer: number = 7.10;
  const hex: number = 0xf00d;
  const binary: number = 0b1010;
  const octal: number = 0o744;

  //? 3. string
  const name: string = "Demian";
  const sentence: string = `Hello, my name is ${name}`;

  //? 4. null & undefined
  // typeof null;
  // typeof undefined;
  const u: undefined = undefined;
  const n: null = null;

  //? 5. void
  const greetUser = (): void => {
    alert("Hello, nice to see you!");
  }
   

  return (
    <>
      <h2>Base TS types</h2>
      <div><b>1. boolean:</b> {isCompeleted ? 'true' : 'false'}</div>
      <div><b>2. number:</b> {decimal} --- {integer} --- {hex} --- {binary} --- {octal} </div>
      <div><b>3. string:</b> {sentence}</div>
      <div><b>4. null & undefined:</b> {`${n} ${u}`}</div>
      <div><b>5. void:</b> <button onClick={greetUser}>function</button></div>
    </>
  )
}

export default BaseOne;