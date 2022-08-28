import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Label, Error } from './ContactForm.styled';
import { Btn } from 'components/App/App.styled';
import { Box } from '../Box';

const Input = styled(Field)`
  width: 100%;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  :hover,
  :focus {
    outline: ${p => p.theme.borders.bold};
    outline-color: ${p => p.theme.colors.heading};
  }
`;

const errorName =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const errorNumber =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
const regularName =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
// const regularNumber =
//   /+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().required('input is required').matches(regularName, {
    message: errorName,
  }),
  number: yup
    .string()
    .required('input is required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message: errorNumber,
      }
    ),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <Box mb={4} display="flex" flexDirection="column">
          <Label htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              // value={this.state.name}
              // onChange={this.handleInputChange}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
            />
            <ErrorMessage
              name="name"
              render={msg => <Error>{errorName}</Error>}
            />
          </Label>
          <Label htmlFor="number">
            Number
            <Input
              type="tel"
              name="number"
              // value={this.state.number}
              // onChange={this.handleInputChange}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              // required
            />
            <ErrorMessage
              name="number"
              render={msg => <Error>{errorNumber}</Error>}
            />
          </Label>
        </Box>
        <Btn type="submit">Add contact</Btn>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
