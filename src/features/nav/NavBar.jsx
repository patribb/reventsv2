import { Button, Container, Menu } from "semantic-ui-react";

const NavBar = ({ setFormOpen }) => {
  return (
    <Menu inverted fixed="top">
      <Container>
          <Menu.Item header>
              <img src="/assets/logo2.png" alt="logo" style={{marginRight: '15px'}} />
              Re-vents
          </Menu.Item>
          <Menu.Item name='Eventos' />
          <Menu.Item>
              <Button onClick={()=> setFormOpen(true)} positive inverted content='Crear Evento' />
          </Menu.Item>
          <Menu.Item position="right">
              <Button basic inverted content='Iniciar Sesión' />
              <Button basic inverted content='Registro' style={{ marginLeft: '0.5em' }} />
          </Menu.Item>
      </Container>
    </Menu>
  )
}

export default NavBar;
