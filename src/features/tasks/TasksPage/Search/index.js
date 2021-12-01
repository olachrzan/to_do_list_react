import { Input } from "../Input/styled";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import { searchQueryParamName } from "../searchQueryParamName";
import { Wrapper } from "./styled";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const OnInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    })
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={OnInputChange}
      />
    </Wrapper>
  )
};

export default Search;