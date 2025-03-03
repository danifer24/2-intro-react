import PropTypes from "prop-types";
export const HelloWorld = ({ user, id, title = "Hola Mundo" }) => {
  //   const name = "Pepe";

  console.log(title);

  return (
    <>
      <h1>{title}</h1>
      <div>
        que tal {user.name} {user.lastname} con el id {id}
      </div>
    </>
  );
}

HelloWorld.propTypes = {
  title: PropTypes.boolean,
  user: PropTypes.object

}
