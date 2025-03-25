import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import { useContext } from 'react'
import { AppContext } from './hooks/Context'
import InputSearch from './components/InputSearch'

function App() {

  const [count, setCount] = useState(0)
  const [food, setFood] = useState([])
  const [drinks, setDrinks] = useState([])
  const {search} = useContext(AppContext)
  const [searchResults, setSearchResults] = useState([])
  
  useEffect(() => {
    async function getFood(){
      try {
          const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican")
          if (!response.ok) {
              throw new Error ("Sin respuesta")
          }
          const data = await response.json()
          setFood(data.meals)
      } catch (error) {
          console.error("Error al hacer la peticion");
          throw error
      }
      }
    getFood()
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const [foodResponse, drinksResponse] = await Promise.all([
          fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican"),
          fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        ])

        if (!foodResponse.ok || !drinksResponse.ok) {
          throw new Error("Sin respuesta")
        }

        const foodData = await foodResponse.json()
        const drinksData = await drinksResponse.json()

        setFood(foodData.meals)
        setDrinks(drinksData.drinks)
      } catch (error) {
        console.error("Error al hacer la petición:", error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    async function getSearchResults() {
      try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            if (!response.ok) {
              throw new Error ("Sin respuesta")
            }
            const data = await response.json()
            setSearchResults(data.meals)
      } catch (error) {
        console.error("Error al hacer la peticion");
        throw error
      }
    }
    if (search) {
      getSearchResults()
    }
    else{
      setSearchResults([])
    }
    
  }, [search])
  


  return (
    <section className='principal'>
      <h1>Vite + React</h1>
      <p>{count}</p>
      <button onClick={()=> setCount(count + 1)}>Sumar</button>
      <section className='search-section'>
        <div className='input-box'><InputSearch/></div>
        {searchResults.slice(0,6).map(element => <Card data={element}/>)}
      </section>
      <section className='food-section'>
      {food.map(element=> <Card data={element}/>)}
      </section>
      <section className='drink-section'>
      {drinks.slice(0,6).map(element=> <Card data={element}/>)}
      </section>
    </section>
  )
}

export default App
