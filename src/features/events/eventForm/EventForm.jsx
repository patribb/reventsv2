import { Button, Form, Header, Segment } from "semantic-ui-react";

const EventForm = ({ setFormOpen }) => {
  return (
    <Segment clearing>
      <Header color='grey' content='Crear nuevo Evento' />
      <Form>
          <Form.Field>
              <input type="text" placeholder="Título de evento" />
          </Form.Field>
          <Form.Field>
              <input type="text" placeholder="Categoría" />
          </Form.Field>
          <Form.Field>
              <input type="text" placeholder="Descripción" />
          </Form.Field>
          <Form.Field>
              <input type="text" placeholder="Ciudad" />
          </Form.Field>
          <Form.Field>
              <input type="text" placeholder="Lugar" />
          </Form.Field>
          <Form.Field>
              <input type="date" placeholder="Fecha" />
          </Form.Field>
          <Button type='submit' floated='right' color="teal" content='Enviar' />
          <Button onClick={()=> setFormOpen(false)} type='submit' color='youtube' floated='right' content='X Cancelar' />
          </Form>
    </Segment>
  )
}

export default EventForm;
