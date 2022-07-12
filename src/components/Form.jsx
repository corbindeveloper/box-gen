import React, {useState} from 'react';
import '.././App.css';

const Form = ()=> {
    // Creating a state variable for each of the items in the form
    let [name, setName]  = useState("");
    let [age, setAge]  = useState("");
    let [tagColor, setTagColor]  = useState("");
    let [imgUrl, setImgUrl]  = useState("");

    // Array called listOfPets where we can store every pet
    let [listOfColors, setListOfColors] = useState([]);

    const submitHandler = (e)=> {
        e.preventDefault(); // This will prevent the form submission from reloading
        console.log("Form Submitted!", name, age, tagColor, imgUrl)

        // Put the pet information into an object
        let petObj = {tagColor}

        // Update the list of pets using the setter
        // To be a copy of what it is already in the array (...)
        // Plus the most recent petObj
        setListOfColors([...listOfColors, petObj])
    }


    return (
        <>
            <h3>Fill in this form below</h3>
            <form className="form" onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Color:</label>
                    <input type="text" className="input" onChange={(e)=>setTagColor(e.target.value)}/>
                </div>
                <input type="submit" value="Add Color" className="submit"/>
            </form>
            <hr/>
            <div className="row">
                {
                    listOfColors.map((color, idx)=>{
                        return (
                            <div className="box" style={{backgroundColor: color.tagColor, display: "block"}}>
                                <p className="clear">.</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Form;