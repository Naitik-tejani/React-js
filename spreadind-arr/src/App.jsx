


function App() {
  
let obj = {
  name: "raj",
  age: 30,
  study:"bca",
  mark:[
    {name:30},{name:40},{name:50}
  ]
}

// console.log(obj);

  return (
    <>
     
     <h1>hello </h1>

      <h2>name:-{obj.name}</h2>
      <h2>age:-{obj.age}</h2>
      <h2>study:-{obj.study}</h2>
     
     <div>
     { obj.mark.map=((mark,index)=>{
       console.log('mark.name')
      })}
     </div>
    </>
  )
}

export default App
