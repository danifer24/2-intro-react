import PropTypes from "prop-types";
import { Title } from "./components/Title";
import { UserDetails } from "./components/UserDetails";
import { Book } from "./components/Book";
export const HelloWorldApp = ({ user, id, title, book }) => {
  //   const name = "Pepe";

  console.log(title);

  return (
    <>
      <Title title={title} />
      <UserDetails user={user} id={id} />
      <Book book={book}/>
    </>
  );
};

HelloWorldApp.propTypes = {
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

HelloWorldApp.defaultProps = {
  title: "Hola Mundo por defecto!",
  book: "UML gota a gota",
};
