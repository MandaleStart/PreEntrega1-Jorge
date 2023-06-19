const UserList = () => {
return (
    <div className="container mt-4">
      <h1>Tabla de Usuarios</h1>

  
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Documento de Identidad</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Fecha de Nacimiento</th>
            <th>Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
}
export default UserList;