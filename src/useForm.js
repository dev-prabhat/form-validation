import { useState } from "react"
import {omit} from "lodash"

const useFrom = () => {
    const [values, setValues] = useState({firstName:"",lastName:"",date:""})
    const [entries, setEntries] = useState([])
    const [errors, setErrors] = useState({})

    const validate = (event,name,value) => {
       switch(name){
        case"firstName":
           if(value.length <= 4){
            setErrors(errors => ({...errors,firstName:"FirstName atleast of 4 letters"}))
           }else{
             let newError = omit(errors,"firstName")
             setErrors(newError)
           }
           break;
        case "lastName":
            if(value.length <= 3) setErrors(errors => ({...errors,lastName:"LastName atleast of 3 letters"}))
            else{
                let newError = omit(errors,"lastName")
                setErrors(newError)
            }
            break;
           default:
       }
    }

    const handleChange = (e) => {

        let name = e.target.name
        let val = e.target.value
        validate(e,name,val)

        setValues(values => ({...values,[name]:val}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            setEntries(prev => [...prev,values]);
            setValues({firstName:"",lastName:"",date:""})
        }
        else alert("There is an Error")
    }

    console.log(entries)
    return{
       values,errors,handleChange,handleSubmit
    }
}

export default useFrom