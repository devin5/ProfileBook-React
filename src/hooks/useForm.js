import {useState} from "react"


export const useForm = () => {

const [form, setForm] = useState({})

const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
}

return [form, handleChange]
}