
import './static/addproperty.css'
// const [ob,setOb] = useState([])

export const Sell = () =>{
    const submitForm = async (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)
        console.log(payload)
        try{
            const response = await fetch("http://127.0.0.1:8000/api/property/",{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),            
            })
            if(response.ok){
                const data = await response.json()
                alert('Property added')
            }else{
                const errorData = await response.json()
                alert("Error",errorData)
            }
        }
        catch(error){
            console.error("Error",error)
        }
    }
    return (
        <>
    <div className='property-form'>
    <form onSubmit={submitForm}>
        <h1>Add Property</h1>
        <input type="text" name='propertyType' required/>
        <input type="text" name='propertyName' required/>
        <input type="text" name='propertyAddress' required/>
        <input type="number" name='propertyPricing' required/>
        <button type='submit'>Submit</button>

    </form>
    </div>
    </> 
    )
}
