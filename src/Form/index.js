import "./style.css";

const Form = () => (
   <form className="form">
      <input className="form__input" placeholder="Co jest do zrobienia?" />
      <input className="form__button" type="submit" value="Dodaj zadanie" />
   </form>
);

export default Form;