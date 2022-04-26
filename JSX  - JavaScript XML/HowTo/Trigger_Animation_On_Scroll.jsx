//  [HowWorks]  If you have a element that is scrollable; 
//              has a maximun height and scrollbar enabled.
//              It will trigger something passed 100 pixels
//              offset of its parent.

//  [NOTES]     StickySection has a "position: sticky"
//              Block and StickySection have a "height:100vh"
//              IMPORTANT: The variable inside the function checkScroll
//                         has to be inside the function because of the
//                         component life-cycle rules.  If it is outside
//                         the variable it will be rendered as "undefined",
//                         the variable is trying to access a refence on render,
//                         so when is finally mounted the callback will take place
//                         on onScroll event.
//                         Life-Cycle: Rendering component -> Finish Render -> Mount Component
//                         The reference takes place on mount.

//  [REFS]      https://developer.mozilla.org/es/docs/Web/API/Element/scrollTop
//              https://developer.mozilla.org/es/docs/Web/CSS/position
//              https://es.reactjs.org/docs/state-and-lifecycle.html

function Example(){
  const target = useRef();
  const [isOffset, handleOffset] = useToggle(false);
  
  const checkScroll =({ pixels = 100 })=>{
      const ref = target.current?.scrollTop;
      !isOffset && ref > pixels && handleOffset();
      isOffset && ref < pixels && handleOffset();
  }
  
  return (
    <body>
      <main>
        <StickySection  onScroll={checkScroll} />
        <Block displayCondition={isOffset} />
      </main>
      <Footer/>
    <body/>
  )
}

const Block =({displayCondition})=> {
  const anim = displayCondition ? {transform: "translateX(0)"} : {transform: "translateX(-50%)"}
  return <div style={{height:"100vh", anim}} />
}
