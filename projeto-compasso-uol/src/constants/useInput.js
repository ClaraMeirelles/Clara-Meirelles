import { useState } from "react"

export const useInput = () => {
    const [inputValue, setInputValue] = useState('')
    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }
    
    return [inputValue, onChangeInput, setInputValue]
}