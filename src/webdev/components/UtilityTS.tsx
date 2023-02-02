import { FC } from "react";

const UtilityTS: FC = () => {
  //? 1. Readonly<T> только для чтения
  interface User {
    name: string;
  }
  const user: Readonly<User> = {
    name: "Dem",
  }
  // user.name = "max"; --- Error --- you cann`t do this
  
  //? 2. Required<T> передельівает все поля на обязательньіе
  interface Props {
    a?: number;
    b?: string;
  };

  const obj: Props = { a: 5 };
  // const obj2: Required<Props> = { a: 5 }; --- Error --- property 'b' missing
  
  //? 3. Record<K, T> создает набор соответствующего типа
  interface PageInfo {
    title: string;
  }

  type Page = 'home' | 'about' | 'contact';

  const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
  };
  
  //? 4. Pick<T, K> конструируем об'ект только из вьібранньіх типов
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = Pick<Todo, 'title' | 'completed'>;

  const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
  };

  //? 5. Omit<T, K>
  interface Todo2 {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview2 = Omit<Todo2, 'description'>;

  const todo2: TodoPreview2 = {
    title: 'Clean room',
    completed: false,
  };

  //? 6. Exclude<T, U>
  type T0 = Exclude<"a" | "b" | "c", "a">;                      // "b" | "c"
  type T1 = Exclude<"a" | "b" | "c", "a" | "b">;                // "c"
  type T2 = Exclude<string | number | (() => void), Function>;  // string | number

  //? 7. Extract<T, U>
  type T3 = Extract<"a" | "b" | "c", "a" | "f">;                // "a"
  type T4 = Extract<string | number | (() => void), Function>;  // () => void

  //? 8. NonNullable<T>
  type T5 = NonNullable<string | number | undefined>;           // string | number
  type T6 = NonNullable<string[] | null | undefined>;           // string[]

  //? 9. ReturnType<T>
  type A0 = ReturnType<() => string>;                                 // string
  type A1 = ReturnType<(s: string) => void>;                          // void
  type A2 = ReturnType<(<T>() => T)>;                                 // {}
  type A3 = ReturnType<(<T extends X, X extends number[]>() => T)>;   // number[]
  // type A4 = ReturnType<typeof f1>;                                 // I cann`t declare function
  type A5 = ReturnType<any>;                                          // any
  type A6 = ReturnType<never>;                                        // any
  // type A7 = ReturnType<string>;                                    // Error
  // type A8 = ReturnType<Function>;                                  // Error

  //? 10. InstanceType<T>
  class C {
    x = 0;
    y = 0;
  }

  type C0 = InstanceType<typeof C>;       // C
  type C1 = InstanceType<any>;            // any
  type C2 = InstanceType<never>;          // any
  // type C3 = InstanceType<string>;      // Error
  // type C4 = InstanceType<Function>;    // Error

  return (
    <>
      <h2>Utility TS</h2>
      <div><b>1. Readonly&lt;T&gt; только для чтения</b></div>
      <div><b>2. Required&lt;T&gt; передельівает все поля на обязательньіе</b></div>
      <div><b>3. Record&lt;K, T&gt; создает набор соответствующего типа</b></div>
      <div><b>4. Pick&lt;T, K&gt; конструируем об'ект только из вьібранньіх типов</b></div>
      <div><b>5. Omit&lt;T, K&gt; удаляет один из типов из об'екта</b></div>
      <div><b>6. Exclude&lt;T, U&gt; исключает все типьі переданньіе вторьім аргументом</b></div>
      <div><b>7. Extract&lt;T, U&gt; оставляет все типьі переданньіе вторьім аргументом</b></div>
      <div><b>8. NonNullable&lt;T&gt; вьібрасьівает все несуществующие типьі --- null & undefined</b></div>
      <div><b>9. ReturnType&lt;T&gt; создаем тип состоящий из возвращаемого функцией типа</b></div>
      <div><b>10. InstanceType&lt;T&gt; создаем тип состоящий из типа єксземляра функции конструктора</b></div>
    </>
  )
}

export default UtilityTS;
