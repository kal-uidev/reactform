import React from 'react'

function FormData(props) {
    if(props.show){
    return (
       
              <div id="submitted-data">
        <h2>Submitted Form Data:</h2>
    {`{`}
    <ul id="form-output">
    {
        
    props.stateObj.map((i,index) =>{if(i[0] !== "showdata"){return <li key={index}>{i[0]} : {i[1]}</li>}})
    }
    </ul>
    {`}`}
    </div>

        
        )}else return null
}
export default FormData;