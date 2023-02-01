const BaseTwo = () => {
  //? 1. boolean
  let isCompeleted: boolean = false;
  // isCompeleted = 42;     error
  // isCompeleted = '42';   error
  isCompeleted = true;
   

  return (
    <>
      <h2>Base TS types</h2>
      <div><b>1. boolean:</b> {isCompeleted ? 'true' : 'false'}</div>
    </>
  )
}

export default BaseTwo;