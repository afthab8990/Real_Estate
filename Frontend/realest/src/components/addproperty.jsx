import './static/mainpage.css'
export const Sell = () =>{
    const submitForm = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)
        console.log(payload)
    }
    return (
    <>
    <form onSubmit={submitForm}>
        <h1>Add Property</h1>
        <input type="text" name='propertyType' required/>
        <input type="text" name='propertyName' required/>
        <input type="text" name='propertyAddress' required/>
        <input type="number" name='propertyPricing' required/>
        <button type='submit'>Submit</button>
    </form>
    </> 
    )
}