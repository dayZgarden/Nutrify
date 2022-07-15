import React, {useState, useEffect} from "react";
import "../components/Tracking.css";
 
export default function Tracker() {
 
  const [food, setFood] = useState([]);
  const [modal, setModal] = useState(false)
 
  //  States
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carb, setCarb] = useState(0);
    const [fat, setFat] = useState(0);
    const [per, setPer] = useState(0);
    const [foods, setFoods] = useState('');
    const [servings, setServings] = useState(0);
    const [satFat, setsatFat] = useState(0);
    const [units, setUnits] = useState('');
    const [sugar, setSugar] = useState(0);
    const [potassium, setPotassium] = useState(0);
    const [fiber, setFiber] = useState(0);
    const [cholesterol, setCholesterol] = useState(0);

 
    function toggleModal() {
      setModal(!modal)
    }

    function userFood() {
        event.preventDefault();
        let quantity = document.getElementById('quantity').value;
        let food = document.getElementById('food').value;
        let serving = document.getElementById('serving-size').value;
        console.log(quantity)
        console.log(food)
        console.log(serving)
        setModal(!modal)
        let context = `${quantity} ${serving} of ${food}`
        fetchFood(context)
    }
 
    function fetchFood(context) {
    const url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
   
    let query = {
    "query": `${context}`,
    "timezone": "US/Eastern"
    }
   
    fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-app-id': 'cedc0df4',
        'x-app-key': '8cd70410a5057316ad553969de10884a',
        'x-remote-user-id': '0'
    },
    body: JSON.stringify(query)
})
  .then(response => response.json())
  .then(data => {
    const foodData = Object.values(data);
    const foodData1 = foodData[0];
    console.log({foodData})
    console.log({foodData1})
    setFood(foodData1)
    }
  )
}
 
console.log({food})

    useEffect(() => { 
      food.map((e) => {
        setCarb(e.nf_total_carbohydrate + carb)
        setProtein(e.nf_protein + protein)
        setFat(e.nf_total_fat + fat)
        setCalories(e.nf_calories + calories)
        setFoods(`${(e.food_name + foods).split(' ')}`)
        setServings(e.serving_qty + servings)
        setUnits(e.serving_unit + units)
        setsatFat(e.saturated_fat + satFat)
        setSugar(e.nf_sugars + sugar)
        setPotassium(e.nf_potassium + potassium)
        setFiber(e.nf_dietary_fiber + fiber)
        setCholesterol(e.nf_cholesterol + cholesterol)
      })
    }, [food])

    useEffect(() => {
      let x = ((calories / 3000)*100)
      setPer(x)
    }, [calories])
 
  return (
    <div className="tracker">
        {!modal && <div className="meals__container">
 
          <div className="meal__periods">
            <div className="meal__period breakfast">
              <h1 className="meal__period--title">Nutrition</h1>
              <div className="meal__period--info">
                <div className="meal__calories">
                    Calories: {calories.toFixed(0)}
                </div>
                <p className="meal__breakdown">
                  Foods: {foods}
                </p>
                <div className="meal__macros">
                    Protein: {protein? protein.toFixed(0) : '0'} grams
                    <br />
                    Fat: {fat? fat.toFixed(0) : '0'}  grams
                    <br />
                    Carbs: {carb? carb.toFixed(0) : '0'}  grams
                    <br />
                    Saturated Fat: {satFat? satFat.toFixed(0) : '0'}  grams
                    <br />
                    Sugar: {sugar? sugar.toFixed(0) : '0'}  grams
                    <br />
                    Potassium: {potassium? potassium.toFixed(0) : '0'}  grams
                    <br />
                    Fiber: {fiber? fiber.toFixed(0) : '0'}  grams
                    <br />
                    Cholesterol: {cholesterol? cholesterol.toFixed(0) : '0'}  grams
                    <br />
                </div>
                <div className="percentage">
                  {per.toFixed(0)}%
                </div>
              </div>
            </div>
            <button className="plus" onClick={toggleModal}>Add Food</button>
          </div>
        </div>}
        {
        modal &&
         <div className="modal">
          <form onSubmit={userFood}>
            <h1>this is my modal</h1>
            <input type="text" placeholder="Food:" id="food" className="food" required/>
            <select id="serving-size" required>
                <option disabled value="serving"></option>
                <option value="g">grams</option>
                <option value="wt-oz">ounces</option>
                <option value="cup">cups</option>
            </select>
            <input type="number" placeholder="Quantity" id="quantity" className="quantity" required />
            <button>Submit</button>
            <button onClick={toggleModal}>Close Modal</button>
          </form>
        </div>
        }
    </div>
  );
}
 
 

