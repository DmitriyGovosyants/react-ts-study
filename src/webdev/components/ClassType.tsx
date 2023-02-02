const ClassType = () => {
  //? 1. class types modificators
  class User {
    public name: string; // значение по умолчанию
    private nickName: string; // не может бьіть доступен за пределами класса
    protected age: number; // доступ могут получить только наследники
    readonly pass: number; // только для чтения

    constructor(name: string, age: number, nickName: string, pass: number) {
      this.name = name;
      this.age = age;
      this.nickName = nickName;
      this.pass = pass;
    }
  }

  const dem = new User("Dem", 30, 'Smart', 123);
  console.log(dem)

  //? 2. class default properties
  class User2 {
    name: string;
    age: number = 29;
    nickName: string = "DemStrah";

    constructor(name: string) {
      this.name = name;
    }
  }

  const dem2 = new User2("Dem2");
  console.log(dem2)

  //? 3. minimization of Class properties (modificator nessecary)
  class User3 {
    constructor(
      public name: string,
      public age: number,
      public nickName: string,
      public pass: number,
    ) {}
  }


  return (
    <>
      <h2>Class types</h2>
      <div><b>1. class types modificators: </b>public, private, protected, readonly</div>
      <div><b>2. class default properties: </b>nickName: string = "DemStrah";</div>
      <div><b>3. minimization of class properties (modificator nessecary): </b>use modificator in constructor</div>
    </>
  )
}

export default ClassType;
