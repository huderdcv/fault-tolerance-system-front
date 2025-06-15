export const AddUser = () => {
  return (
    <div class="home-content__subscribe">
      <form id="mc-form" class="group" novalidate="true">
        <input
          type="email"
          value=""
          name="usuario"
          class="usuario"
          id="mc-email"
          placeholder="Nombre de usuario"
          required=""
        />
        <input type="submit" name="subscribe" value="Agregar" />
        <label for="mc-email" class="subscribe-message"></label>
      </form>
    </div>
  );
};
