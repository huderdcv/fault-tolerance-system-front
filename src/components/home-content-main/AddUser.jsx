export const AddUser = () => {
  return (
    <div className="home-content__subscribe">
      <form id="mc-form" className="group" noValidate={true}>
        <input
          type="email"
          value=""
          name="usuario"
          className="usuario"
          id="mc-email"
          placeholder="Nombre de usuario"
          required=""
          readOnly
        />
        <input type="submit" name="subscribe" value="Agregar" />
        <label htmlFor="mc-email" className="subscribe-message"></label>
      </form>
    </div>
  );
};
