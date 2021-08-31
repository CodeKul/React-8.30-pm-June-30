import React from "react";

export default function HOCExample() {
  return (
    <div>
      <Button>Click here</Button>

      <LabelHOC>Hello welcome to HOC example</LabelHOC>
    </div>
  );
}

// const Button = (props) => <button>{props.children}</button>

const Button = HOC((props) => <button>{props.children}</button>);

// const Label = (props) => <label>{props.children}</label>

const Label = HOC((props) => <label>{props.children}</label>);

const LabelHOC = HOC(Label);

const HOC = (InnerComponent) => {
  return <InnerComponent {...props} />;
};
