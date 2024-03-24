import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Field, Form, FormSubtitle, FormTitle, ButtonSubmit, Textarea } from "./BookForm.styled";
import{addReservation} from '../../redux/operations';
import {useDispatch } from 'react-redux';



const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
      .required('Required'),
    email: Yup.string().email("Email must contait @").required('Required'),
    date: Yup.date("Date must be MM.DD.YYYY" ).required('Required'),
  });

   const BookForm = () => {

    const dispatch = useDispatch();

    return (
      <>
        <div>
          <Formik
            initialValues={{
              name: "",
              date: "",
              email: "",
              message: "",
            }}

            validationSchema = {SignupSchema}

            onSubmit={(values, actions) => {       
              dispatch(addReservation(values))     
              actions.resetForm();}
            }>


            <Form>

              <FormTitle>Book your campervan now</FormTitle>
              <FormSubtitle>
                Stay connected! We are always ready to help you.
              </FormSubtitle>

              <Field name="name" placeholder="Name" type="text"  required  />
  
              <Field name="email" placeholder="Email" type="email"  required  />
              <ErrorMessage name="email" />

              <Field
                name="date"
                placeholder="Booking date"
                required 
              />
              <ErrorMessage name="date" />

              <Textarea name="message" as="textarea" id="textarea" placeholder="Comment" />

              <ButtonSubmit type="submit">Send</ButtonSubmit>
              
            </Form>
          </Formik>
        </div>
      </>
    );
  };

  export default BookForm;

//   export const FormAddContact = ()=> {
//     const contacts = useSelector(selectContacts);
//     const dispatch = useDispatch();


    
//     const addContacts =(newContact)=> {
        
//       const newAddContact = contacts.some(contact=> newContact.name.toLowerCase().trim() === contact.name.toLowerCase());
    
//         if(newAddContact){
//           alert(`${newContact.name} is already in contacts`);
//           return;
//         } 
    
//         dispatch(addContact(newContact))
//     }
    
//         return (
//       <div>
//         <Formik
//           initialValues={{
//             name: '',
//             number: '',
//           }}
    
//           validationSchema = {SignupSchema}
    
//           onSubmit={(values, actions) => {
//             addContacts(values);
//             actions.resetForm();
//           }}
    
//         >
//           <FormStyle>
//                <FormLabel >Name
//                     <FieldStyle            
//                          type="text"
//                          name="name"
//                         //  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                          required />
//                     <ErrorMsg name="name" component="span"/>
//                 </FormLabel>
    
//                 <FormLabel >Number
//                     <FieldStyle            
//                          type="tel"
//                          name="number"
//                         //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                          required />
//                     <ErrorMsg name="number" component="span"/>
//                 </FormLabel>
            
//             <Button type="submit">Submit</Button>
//           </FormStyle>
//         </Formik>
//       </div>
//         )
//     }