import PropTypes from "prop-types";
export const HelloWorld = ({ user, id, title, book }) => {
  //   const name = "Pepe";

  console.log(title);

  return (
    <>
      <h1>{title}</h1>
      <div>
        que tal {user.name} {user.lastname} con el id {id}
        <div>{book}</div>
      </div>
    </>
  );
}

HelloWorld.propTypes = {
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

HelloWorld.defaultProps = {
  title: 'Hola Mundo por defecto!',
  book: 'UML gota a gota',
}