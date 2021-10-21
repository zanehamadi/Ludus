

function SecondCategories({filters, setFilters,setSecondCat, categories}){

    
    const catTrack = new Set()
    const catTrackFunc = (id) => {

        if(catTrack.has(+id)) catTrack.delete(+id)
        else{
            catTrack.add(+id)
        }
    }

    const secondCatSubmit = () => {

        const copyFilters = filters
        const secondCats = Array.from(catTrack)

        secondCats.forEach(cat => {
            copyFilters.category.push(+cat)
        })

        setFilters(copyFilters)
        setSecondCat(true)
    }




    return(
        <div className="searchQuestions" id="secondCat">
            
            <h2 className="searchText">
                More Categories
            </h2>
            <div className="skipButton" onClick={() => setSecondCat(true)}>This section is optional, you can click here if you would like to skip.</div>

            {categories.map(category => 
                    <div className="categoryQuestion " key={category.id}>
                        <input className="checkBoxStyling" type="checkbox" name={category.name} value={category.id} onClick={e => catTrackFunc(e.target.value)}/>
                        <label htmlFor={category.name}>{category.name}</label>
                    </div>
            )}

            <button onClick={secondCatSubmit} className="searchText secondCatNext startOverButton">
                Next
                <i className="fas fa-caret-right rightArr"></i>
            </button>

        </div>
    )


}

export default SecondCategories