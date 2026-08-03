function Parent() {
  //primitive datatypes
  const str = "Hello world"; ///string
  const amount = 2000; //number
  const isOk = true; //boolean
  const notSet = null; //null

  return (
    <div>
      <h1> I am the parent component</h1>
      <Child1 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
      <Child2 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
      <Child3 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
    </div>
  );
}

// display props using prop keyword
function Child1(props) {
  return (
    <div>
      <h1>I am the child 1 component</h1>
      <ul>
        <li>
          Favourite string <b>{props.str}</b>
        </li>
        <li>
          Amount <b>{props.amountInNumber}</b>
        </li>
        <li>
          isOk <b>{props.isOk}</b>
        </li>
        <li>
          isOk <b>{String(props.isOk)}</b>{" "}
          {/*
            for booleans convert them to string before displaying
          */}
        </li>
        <li>
          Not set <b>{props.notSet}</b>
        </li>
      </ul>
    </div>
  );
}

// using destructuring
function Child2(props) {
  /*
    key:value
    const str=props.str
    const amountInNumber=props.amountInNumber
    const amount=props.amountInNumber
    key:number<>
    key:<string variable naming> "hi bass":34
    const {str,amountInNumber}=props
  */
  const { str, amountInNumber, isOk, notSet } = props;
  return (
    <div>
      <h1>I am the child 2 component</h1>
      <ul>
        <li>
          Favourite string <b>{str}</b>
        </li>
        <li>
          Amount <b>{amountInNumber}</b>
        </li>
        <li>
          isOk <b>{isOk}</b>
        </li>
        <li>
          isOk <b>{String(isOk)}</b>{" "}
          {/*
            for booleans convert them to string before displaying
          */}
        </li>
        <li>
          Not set <b>{notSet}</b>
        </li>
      </ul>
    </div>
  );
}

// display props using prop keyword
//direct destructuring
function Child3({ str, amountInNumber, isOk, notSet }) {
  //const { str, amountInNumber, isOk, notSet } = props;
  return (
    <div>
      <h1>I am the child 2 component</h1>
      <ul>
        <li>
          Favourite string <b>{str}</b>
        </li>
        <li>
          Amount <b>{amountInNumber}</b>
        </li>
        <li>
          isOk <b>{isOk}</b>
        </li>
        <li>
          isOk <b>{String(isOk)}</b>{" "}
          {/*
            for booleans convert them to string before displaying
          */}
        </li>
        <li>
          Not set <b>{notSet}</b>
        </li>
      </ul>
    </div>
  );
}

export default Parent;