import "./InputSearch.css"
import { useContext } from "react"
import { AppContext } from "../hooks/Context"

export default function InputSearch() {

  const {search,setSearch} = useContext(AppContext)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <input type='search' placeholder='Buscar...' value={search} onChange={handleChange}/>
  )
}
