import { Fragment } from "react";
export const HelloWorld = ({user, id}) => {
//   const name = "Pepe";

  return (
    <Fragment>
      <h1>Hola Mundo</h1>
      <div>que tal {user} con el id {id}</div>
    </Fragment>
  );
}
