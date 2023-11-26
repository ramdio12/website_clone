// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";

type TitleProps = {
  name: string;
};

const BrowserTitle = ({ name }: TitleProps) => {
  return (
    <Helmet>
      <title>{name} Cagayan De Oro Learn@CodeLearn</title>
    </Helmet>
  );
};

export default BrowserTitle;
