const Object = () => {
  //? 1. object type
  type Person = {
    name: string,
    age: number,
    nickName?: string,
    getPass?: () => string,
  };
  let user1: Person = {
    name: 'Dem',
    age: 30,
    nickName: 'DemDev',
  };
  let admin: Person = {
    name: 'Dem',
    age: 30,
    getPass(): string {
      return `${this.name}${this.age}`;
    },
  }

  return (
    <>
      <h2>Object types</h2>
      <div><b>1. object standart type</b></div>
    </>
  )
}

export default Object;
