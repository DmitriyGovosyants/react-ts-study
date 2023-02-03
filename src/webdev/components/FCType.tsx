import { FC } from "react";

const Title: FC<{ title: string, children: any }> = ({ title, children }) => <h1>{title}{children}</h1>;

type TitleProps = {
  title: string,
  test?: string,
};

const Title2 = ({ title, test = 'test' }: TitleProps) => <h1>{title}</h1>;
const App = () => <Title2 title="p"/>

export default Title;