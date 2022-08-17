import useForm from "./useForm"

function App() {
  const {values,errors,handleChange,handleSubmit} = useForm()

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>FirstName:</label>
        <input 
            onChange={handleChange} 
            value={values.firstName}
            name="firstName"
            type="text"/>
         {  errors.firstName && <p>{errors.firstName}</p>}
        <label>LastName:</label>
        <input 
            onChange={handleChange} 
            value={values.lastName}
            name="lastName"
            type="text"/>
        {  errors.firstName && <p>{errors.lastName}</p>}
        <label>Date of Birth:</label>
        <input 
            onChange={handleChange}  
            value={values.date}
            name="date"
            type="date"/>
        <button>
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
