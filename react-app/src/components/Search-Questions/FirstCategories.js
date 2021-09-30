import { useState } from "react";

function FirstCategories({filters, setFilters, setFirstCat}){

    const [multiplayer, setMultipler] = useState(false)
    const [singleplayer, setSingleplayer] = useState(false)
    const [coop, setCoop] = useState(false)
    const [firstCatValidation, setFirstCatValidation] = useState(false)


    const categoryCheck = (id) => {
        if(+id === 1){
            if(multiplayer){
                setMultipler(false)
            }else{
                setMultipler(true)
            }
        }
        if(+id === 2){
            if(singleplayer){
                setSingleplayer(false)
            }else{
                setSingleplayer(true)
            }
        }
        if(+id === 9){
            if(coop){
                setCoop(false)
            }else{
                setCoop(true)
            }
        }
    }


    const catOneSubmit = () => {
        const filterCopy = filters
        if(!multiplayer && !coop && !singleplayer) setFirstCatValidation(true)
        else{
            if(multiplayer) filterCopy.category.push(1)
            if(singleplayer) filterCopy.category.push(2)
            if(coop) filterCopy.category.push(9)
            setFilters(filterCopy)
            setFirstCat(true)
        }
    }


    return(
            <div className='searchQuestions' id="firstCat">
                <h2 className="searchText">Which type of game are you looking for?</h2>
                <h4 className="searchText">You can pick multiple.</h4>
                <div className='checkboxDiv'>

                    <div className="categoryQuestion">
                        <input type="checkbox" value={1} name="multiplayer" onClick={e => categoryCheck(e.target.value)} className="checkBoxStyling"/>
                        <label htmlFor="multiplayer">Multiplayer</label>
                    </div>

                    <div className="categoryQuestion">
                        <input type="checkbox" value={2} name="singleplayer" onClick={e => categoryCheck(e.target.value)} className="checkBoxStyling"/>
                        <label htmlFor="singleplayer">Singleplayer</label>
                    </div>

                    <div className="categoryQuestion">
                        <input type="checkbox" value={9} name="coop" onClick={e => categoryCheck(e.target.value)} className="checkBoxStyling"/>
                        <label htmlFor="coop">Co-op</label>
                    </div>

                    <button onClick={catOneSubmit} className="startOverButton searchText">
                        Next
                        <i className="fas fa-caret-right rightArr"></i>
                    </button>

                </div>
                {firstCatValidation && <h4 className="searchText">Please pick at least one type of game.</h4>}
            </div>     
        )
}


export default FirstCategories