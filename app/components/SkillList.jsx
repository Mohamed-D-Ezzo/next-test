'use client'
import { Button, TextField } from "@mui/material"
import { useReducer, useState } from "react"

function skillReducer(state, action){
    console.log({state,action})
    if (action.type === 'ADD'){
        return [...state, action.payload]
    }
    if (action.type === 'REMOVE'){
        return state.filter((skill) => skill.id !== action.payload.id)
    }
    if (action.type === 'CLEAR'){
        return []
    }
    return []
}

export default function SkillList(){
    const [skills, dispatch] = useReducer(skillReducer, [])
    const [inputValue, setInputValue] = useState('')

    console.log({skills})

    const title = skills.length > 0 ? 'Skills' : 'Add Some Skills'

    function deleteSkills(skill){
        dispatch({type: 'REMOVE', payload: skill})
    }

    function clearSkills(){
        dispatch({type: 'CLEAR'})
    }

    function addSkills(){
        if (!inputValue) return
        dispatch({type: 'ADD', payload: {text: inputValue, id: Math.random()}})
        setInputValue('')
    }

    return (
        <div style={{margin: '20px'}}>
            <h3 data-test="skill-list-title" style={{margin: '20px 0px'}}>{title}</h3>
            <div>
            <TextField 
            label="Add Skills" 
            variant="filled" 
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            style={{backgroundColor: 'white'}}
            data-test="skill-input"
            />
            </div>
            <Button data-test="add-skill-button" onClick={addSkills}>
                Add Skills
            </Button>
            <ul data-test="skill-list" style={{color: 'white', listStyleType: 'none'}}>
                {
                    skills.length > 0 && (
                        skills.map((g) => {
                           return ( 
                           <li key={g.id}>
                                <span>
                                {g.text}
                                </span>
                                <Button onClick={() => deleteSkills(g)}>
                                    X
                                </Button> 
                            </li>
                        )})
                    )
                }
            </ul>
            {
                skills.length > 0 && <Button data-test="clear-list" onClick={clearSkills}>Clear</Button>
            }
        </div>
    )
}