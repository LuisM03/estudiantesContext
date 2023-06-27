import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
import MyModal from "../Modal/Modal";

export default function Title() {
  const { users, UpdateStatus, DeleteUser } = useContext(GlobalContext);
  return (
    <div>
      <h1>Estudiantes</h1>
      <table className="table table-bordered table-striped border w-100">
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Apellidos</td>
            <td>Sexo</td>
            <td>Grado</td>
            <td>Estado</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.sex}</td>
              <td>{user.grade}</td>
              <td>
                <button onClick={() => UpdateStatus(user.id)}>
                  {user.status ? "Activo" : "Inactivo"}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger bg-red px-4 py-2 rounded"
                  onClick={() => DeleteUser(user.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <MyModal />
    </div>
  );
}
