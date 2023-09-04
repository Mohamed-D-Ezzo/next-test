'use client'
import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import styles from './submit.module.css'



export default function FormsPage(){
    const [inputValue, setInputValue] = useState('')
    const [subMessage, setSubMessage] = useState('')
    return (
        <main className={styles.main}>
            <h1 className={styles.header}>Write your email for more information</h1>
            <TextField 
            data-test="submit-form"
            className={styles.input} 
            label="Email" 
            variant="filled" 
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            />
            <Button  data-test="submit-button" onClick={() => {
                if (inputValue && !inputValue.includes('.com') ){
                    setSubMessage(`Invalid email: ${inputValue}!`)
                } else if (inputValue.length){
                    setSubMessage(`Successfully subbed: ${inputValue}!`)
                } else {
                    setSubMessage('fail!')
                }
                setTimeout(() => {
                    setSubMessage('')
                    setInputValue('');
                }, 3000)
            }}>
                Submit
            </Button>
            {
                subMessage && <p>{subMessage}</p>
            }
        </main>
    )
}