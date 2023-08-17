import React, { useState, useEffect } from "react";
import "../components/NutritionLabel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Tracker() {
  const location = useLocation();
  const goal = parseInt(location.state.id);

  const [food, setFood] = useState([]);
  const [modal, setModal] = useState(false);

  //  States
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carb, setCarb] = useState(0);
  const [fat, setFat] = useState(0);
  const [per, setPer] = useState(0);
  const [foods, setFoods] = useState([]);
  const [satFat, setsatFat] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [potassium, setPotassium] = useState(0);
  const [fiber, setFiber] = useState(0);
  const [cholesterol, setCholesterol] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [fatCalories, setFatCalories] = useState(0);

  // DV States
  const [proteinDV, setProteinDV] = useState(0);
  const [fatDV, setFatDV] = useState(0);
  const [carbDV, setCarbDV] = useState(0);
  const [sodiumDV, setSodiumDV] = useState(0);
  const [fiberDV, setFiberDV] = useState(0);
  const [sugarDV, setSugarDV] = useState(0);
  const [satDV, setSatDV] = useState(0);
  const [cholesterolDV, setCholesterolDV] = useState(0);
  const [potassiumDV, setPotassiumDV] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState("");

  function toggleModal() {
    setModal(!modal);
  }

  function userFood() {
    event.preventDefault();
    let quantity = document.getElementById("quantity").value;
    let food = document.getElementById("food").value;
    let serving = document.getElementById("serving-size").value;
    setModal(!modal);
    let context = `${quantity} ${serving} of ${food}`;
    fetchFood(context);
  }

  function fetchFood(context) {
    const url = "https://trackapi.nutritionix.com/v2/natural/nutrients";

    let query = {
      query: `${context}`,
      timezone: "US/Eastern",
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": "cedc0df4",
        "x-app-key": "8cd70410a5057316ad553969de10884a",
        "x-remote-user-id": "0",
      },
      body: JSON.stringify(query),
    })
      .then((response) => response.json())
      .then((data) => {
        const foodData = Object.values(data);
        const foodData1 = foodData[0];
        setFood(foodData1);
      });
  }

  console.log({ food });

  useEffect(() => {
    food.map((e) => {
      setCarb(e.nf_total_carbohydrate + carb);
      setProtein(e.nf_protein + protein);
      setFat(e.nf_total_fat + fat);
      setCalories(e.nf_calories + calories);
      setsatFat(e.nf_saturated_fat + satFat);
      setSugar(e.nf_sugars + sugar);
      setPotassium(e.nf_potassium + potassium);
      setFiber(e.nf_dietary_fiber + fiber);
      setCholesterol(e.nf_cholesterol + cholesterol);
      setSodium(e.nf_sodium + sodium);
      setBackgroundImage(e.photo.thumb)
    });
    setFoods(prevFoods => [...prevFoods, food]);
    console.log(foods)
  }, [food]);

  useEffect(() => {
    let cal = (calories / goal) * 100;
    setPer(cal);

    let fatCal = 9 * fat;
    setFatCalories(fatCal);

    setProteinDV((protein / 50) * 100);
    setFatDV((fat / 78) * 100);
    setCarbDV((carb / 300) * 100);
    setFiberDV((fiber / 28) * 100);
    setSugarDV((sugar / 50) * 100);
    setSatDV((satFat / 20) * 100);
    setCholesterolDV((cholesterol / 300) * 100);
    setPotassiumDV((potassium / 4700) * 100);
    setSodiumDV((sodium / 2300) * 100);
  }, [calories, fat]);

  return (
    <>
      <Nav />
      <div className="overflow-hidden  py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto  grid max-w-2xl grid-cols-1 relative gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {!modal && (
              <div className="bg-white absolute top-0 right-0 p-4 rounded-full font-extrabold text-[1.2rem] ">
                {per ? per.toFixed(0) : "0"}%
              </div>
            )}
            {!modal && (
              <div className="flex-col flex ">
                <section className="m-0 translate-x-[-10%] scale-[.8] performance-facts">
                  <header className="performance-facts__header">
                    <h1 className="performance-facts__title">
                      Nutrition Facts
                    </h1>
                    <p className="calorie__goal">
                      Your Calorie Goal: {goal ? goal : "0"}
                    </p>
                  </header>
                  <table className="performance-facts__table">
                    <thead>
                      <tr>
                        <th colspan="3" className="small-info">
                          Amount Per Serving
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th colspan="2">
                          <b>Calories: </b>
                          {calories.toFixed(0)}
                        </th>
                        <td>
                          Calories from Fat:{" "}
                          {fatCalories ? fatCalories.toFixed(0) : "0"}
                        </td>
                      </tr>
                      <tr className="thick-row">
                        <td colspan="3" className="small-info">
                          <b>% Daily Value*</b>
                        </td>
                      </tr>
                      <tr>
                        <th colspan="2">
                          <b>Total Fat: </b>
                          {fat ? fat.toFixed(0) : "0"}g
                        </th>
                        <td>
                          <b>{fatDV ? fatDV.toFixed(0) : "0"}%</b>
                        </td>
                      </tr>
                      <tr>
                        <td className="blank-cell"></td>
                        <th>
                          Saturated Fat: {satFat ? satFat.toFixed(0) : "0"}g
                        </th>
                        <td>
                          <b>{satDV ? satDV.toFixed(0) : "0"}%</b>
                        </td>
                      </tr>
                      <tr>
                        <td className="blank-cell"></td>
                        <th>Trans Fat: 0g</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th colspan="2">
                          <b>Cholesterol: </b>
                          {cholesterol ? cholesterol.toFixed(0) : "0"}mg
                        </th>
                        <td>
                          <b>
                            {cholesterolDV ? cholesterolDV.toFixed(0) : "0"}%
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <th colspan="2">
                          <b>Sodium: </b>
                          {sodium ? sodium.toFixed(0) : "0"}mg
                        </th>
                        <td>
                          <b>{sodiumDV ? sodiumDV.toFixed(0) : "0"}%</b>
                        </td>
                      </tr>
                      <tr>
                        <th colspan="2">
                          <b>Total Carbohydrate: </b>
                          {carb ? carb.toFixed(0) : "0"}g
                        </th>
                        <td>
                          <b>{carbDV ? carbDV.toFixed(0) : "0"}%</b>
                        </td>
                      </tr>
                      <tr>
                        <td className="blank-cell"></td>
                        <th>
                          Dietary Fiber: {fiber ? fiber.toFixed(0) : "0"}g
                        </th>
                        <td>
                          <b>{fiberDV ? fiberDV.toFixed(0) : "0"}%</b>
                        </td>
                      </tr>
                      <tr>
                        <td className="blank-cell"></td>
                        <th>Sugars: {sugar ? sugar.toFixed(0) : "0"}g</th>
                        <td>
                          <b>{sugarDV ? sugarDV.toFixed(0) : "0"}%</b>
                        </td>
                      </tr>
                      <tr className="thick-end">
                        <th colspan="2">
                          <b>Protein: </b>
                          {protein ? protein.toFixed(0) : "0"}g
                        </th>
                        <td>
                          <b>{proteinDV ? proteinDV.toFixed(0) : "0"}%</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="performance-facts__table--grid">
                    <tbody>
                      <tr>
                        <td colspan="2">
                          Potassium:{" "}
                          {potassiumDV ? potassiumDV.toFixed(0) : "0"}%
                        </td>
                        <td>Vitamin C: 0%</td>
                      </tr>
                      <tr className="thin-end">
                        <td colspan="2">Calcium: 10%</td>
                        <td>Iron: 6%</td>
                      </tr>
                    </tbody>
                  </table>

                  <p className="small-info">
                    * Percent Daily Values are based on a 2,000 calorie diet.
                    Your daily values may be higher or lower depending on your
                    calorie needs:
                  </p>

                  <table className="performance-facts__table--small small-info">
                    <thead>
                      <tr>
                        <td colspan="2"></td>
                        <th>Calories:</th>
                        <th>2,000</th>
                        <th>2,500</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th colspan="2">Total Fat</th>
                        <td>Less than</td>
                        <td>65g</td>
                        <td>80g</td>
                      </tr>
                      <tr>
                        <td className="blank-cell"></td>
                        <th>Saturated Fat</th>
                        <td>Less than</td>
                        <td>20g</td>
                        <td>25g</td>
                      </tr>
                      <tr>
                        <th colspan="2">Cholesterol</th>
                        <td>Less than</td>
                        <td>300mg</td>
                        <td>300 mg</td>
                      </tr>
                      <tr>
                        <th colspan="2">Sodium</th>
                        <td>Less than</td>
                        <td>2,400mg</td>
                        <td>2,400mg</td>
                      </tr>
                      <tr>
                        <th colspan="3">Total Carbohydrate</th>
                        <td>300g</td>
                        <td>375g</td>
                      </tr>
                      <tr>
                        <td className="blank-cell"></td>
                        <th colspan="2">Dietary Fiber</th>
                        <td>25g</td>
                        <td>30g</td>
                      </tr>
                    </tbody>
                  </table>

                  <p className="small-info">Calories per gram:</p>
                  <p className="small-info text-center">
                    Fat 9 &bull; Carbohydrate 4 &bull; Protein 4
                  </p>
                </section>

                {!modal && (
                  <button
                    className="z-[1] hover:bg-indigo-500 transition-all duration-300 -mt-4 relative px-3 py-2 text-lg bg-[#308a7b] text-white rounded-md max-w-[30%]"
                    onClick={toggleModal}
                  >
                    Add Food
                  </button>
                )}
              </div>
            )}

            <div className="flex-col flex">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Your Food Diary</h1>
                <p className="text-sm">
                  Here you can see all the food you've added to your diary.
                </p>
                <div className="flex flex-wrap">
                  {foods?.map(({f}) => (
                    <div className="card w-[25%]">
                      <div className="card__content">
                        <p className="card__text">{f?.food_name}</p>
                        <img className="" src={f?.photo?.thumb} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {modal && (
            <div className="modal text-black bg-white shadow-2xl w-full">
              <form className="modal__form" onSubmit={userFood}>
                <h1 className="modal__title tracking-none font-bold text-2xl">
                  Add Food to Your Diary
                </h1>
                <input
                  className="border-2 border-black"
                  type="text"
                  placeholder="Food"
                  id="food"
                  required
                />
                <select
                  className="border-2 border-black"
                  id="serving-size"
                  required
                >
                  <option selected="true" disabled value="serving">
                    Serving Size
                  </option>
                  <option value="g">grams</option>
                  <option value="wt-oz">ounces</option>
                  <option value="cup">cups</option>
                </select>
                <input
                  type="number"
                  placeholder="Quantity"
                  id="quantity"
                  required
                />
                <button className="z-[1] hover:bg-indigo-500 transition-all duration-300 relative px-6 py-4 text-lg bg-[#308a7b] text-white rounded-md">
                  Submit
                </button>
                <button onClick={toggleModal} className="close">
                  <FontAwesomeIcon icon={faTimes} className="fa-times" />
                </button>
              </form>
            </div>
          )}
        </div>
        /
      </div>

      <Footer />
    </>
  );
}
