export default function CreateForm({cookieInfoHandler}){
function formHandler(event){
    event.preventDefault()
    const formInfo = {
        location:event.target.location.value,
        hour_sales: [10, 20, 30, 30, 40, 50, 60, 70, 80, 90, 100, 20, 30, 45]

    }
    cookieInfoHandler(formInfo)

 }


 return (

    <form className="m-8 p-4 bg-green-300  rounded-md" onSubmit={(e)=>formHandler(e)}>
        <h2 className ="text-center text-xl">Create Cookie Stand </h2>
        <div className="flex items-stretch">
        <label className=" m-3"for="location">Location</label>
        <input name="location"className= " bg-gray-100 m-3 w-2/3" />
        </div>
        <div className="flex items-stretch">
        <label className=" m-3" for="mincustperhour">Min customers per hour</label>
        <input name="mincustperhour"/>
        <label className=" m-3" for="maxcustperhour">Max customers per hour</label>
        <input name="maxcustperhour"/>
        <label className=" m-3" for="averagecooki">Average cookies per sale</label>
        <input name="averagecooki"/>
        <button className="px-2 p-1 m-4 bg-green-500 text-black-50" >Create</button>
        </div>
    </form>
    
 )
}