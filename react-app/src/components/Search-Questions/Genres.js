import {searchRequest} from '../../store/games'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react"

function Genres({filters, setFilters, setCheckGenres, genres, setResults, setResultsLoaded}){

    const dispatch = useDispatch()
    const [validation, setValidation] = useState(false)
    const [genreTrack, setGenreTrack] = useState(new Set())
    const genreTrackFunc = (id) => {
        let genreTrackCopy = new Set(Array.from(genreTrack)) 
        if(genreTrackCopy.has(+id)) genreTrackCopy.delete(+id)
        else{
            genreTrackCopy.add(+id)
        }
        setGenreTrack(genreTrackCopy)
    }

    const genreSubmit = async () => {

        const copyFilters = filters
        const genreTrackArr = Array.from(genreTrack)


        if(genreTrackArr.length < 2) setValidation(true)
        else{
            setValidation(false)
            genreTrackArr.forEach(id => {
                copyFilters.genre.push(id)
            })
            setFilters(copyFilters)
            setCheckGenres(true)
            await dispatch(searchRequest(filters))
            setResultsLoaded(true)
        }

    }


    return(
        <div className="genreSelection">
            {console.log(filters)}
            <h2 className="searchText">Genres</h2>
            <h4 className="searchText">Please pick a minimum of two</h4>
            {validation && <h4 className="searchText">Please enter atleast two genres.</h4>}

            {genres.map(genre => 

                <div className="genreQuestion" key={genre.id}>
                            <input type="checkbox" name={genre.name} value={genre.id} onClick={e => genreTrackFunc(e.target.value)} className="checkBoxStyling"/>
                            <label htmlFor={genre.name}>{genre.name}</label>
                </div>

            )}
            <button className="startOverButton" onClick={genreSubmit}>
                View Results
                <i className="fas fa-caret-right rightArr"></i>
            </button>
        </div>
    )
}

export default Genres


