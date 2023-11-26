import "./css/CodeFlexImgs.css";

const CodeFlexImgs = ({ id, src }: any) => {
  return (
    <div className="image-container" key={id}>
      <img src={src} alt="source" />
    </div>
  );
};

export default CodeFlexImgs;
