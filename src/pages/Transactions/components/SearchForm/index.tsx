import { SearchFormContainer } from "./styles";

export function SearchForm(){
  return(
    <div>
      <SearchFormContainer>
        <input type="text" placeholder="Busque por transações" />

        <button type="submit">
          Buscar
        </button>
      </SearchFormContainer>
    </div>
  )
}