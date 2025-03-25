import "./Card.css"
import 'animate.css';

export default function Card({data}) {
  return (
    <div className='animate__animated animate__bounceInRight card-box' id={data.idMeal || data.idDrink}>
        <img src={data.strMealThumb || data.strDrinkThumb}></img>
        <p>{data.strMeal || data.strDrink}</p>
    </div>
  )
}
