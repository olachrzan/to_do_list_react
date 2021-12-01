import { useHistory, useLocation } from "react-router";

export const useQueryParameter = (key) => {
  const location = useLocation();
  return (new URLSearchParams(location.search)).get(key)
};

export const useReplaceQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return ({ key, value }) => {
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
  }
};