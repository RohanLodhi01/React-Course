import React from "react";

const App = () => {
  function inputMessage(val) {
    console.log(val);
  }

  const onScrolling = (elem)=>{
    if(elem > 0){
      console.log('seedha scrolling')
    }else{
      console.log('ulta scrolling')
    }
  }
  return (
    <div>
      {/* <input
        onChange={function (elem) {
          // console.log(elem.target.value)

          inputMessage(elem.target.value)
        }}
        type="password"
        placeholder="Enter here"
      ></input> */}
      <div onWheel={(elem)=>{
        onScrolling(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  );
};

export default App;
