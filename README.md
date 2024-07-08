## Form Application

### Introduction

This React application is a simple sign-up form that demonstrates the use of state management, form validation, and animations. The application captures user input for fields such as firstname, lastname, email, password, username, and mobile number, and performs basic validation to ensure that no fields are left empty.

### Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Animate.css**: A CSS library for adding animations to web projects.
- **Tailwind CSS**: A utility-first CSS framework (assumed to be used based on the class names like `bg-gray-100`, `flex`, etc.).

### Application Structure

- **App Component**: The main component of the application, which contains the form and manages its state.

### Key Features

1. **State Management**: Utilizes React's `useState` hook to manage the form's state and error messages.
2. **Form Validation**: Checks for empty fields and updates the error messages accordingly.
3. **Animations**: Uses Animate.css to add a zoom-in animation effect to the form on load.

### File Structure

```
/src
  ├── App.js
  └── index.js
```

- **App.js**: Contains the main form component.
- **index.js**: The entry point of the React application.

### How to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Developer-Abhi-stack/Form-Validation.git
   cd https://github.com/Developer-Abhi-stack/Form-Validation
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Application**:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

### Code Explanation

#### App Component

The `App` component is the main component that handles the form functionality. Here’s a breakdown of its key parts:

1. **Initial State**:
   ```javascript
   const model = {
     firstname: "",
     lastname: "",
     email: "",
     password: "",
     username: "",
     mobile: "",
   };

   const errModel = {
     firstname: null,
     lastname: null,
     email: null,
     password: null,
     username: null,
     mobile: null,
   };
   ```

   These objects define the initial state for form fields and error messages.

2. **State Hooks**:
   ```javascript
   const [form, setForm] = useState(model);
   const [formError, setFormError] = useState(errModel);
   ```

   `useState` hooks are used to manage the state of form inputs and error messages.

3. **Validation Function**:
   ```javascript
   const validator = (key, value) => {
     if (!value.length) {
       setFormError({
         ...formError,
         [key]: `${key} value is required.`,
       });
     } else {
       setFormError({
         ...formError,
         [key]: null,
       });
     }
   };
   ```

   This function checks if the input field is empty and sets the corresponding error message.

4. **Form Change Handler**:
   ```javascript
   const getFormValue = (e) => {
     const input = e.target;
     const value = input.value;
     const key = input.name;
     setForm({
       ...form,
       [key]: value,
     });
     validator(key, value);
   };
   ```

   This function updates the form state and validates the input whenever a field's value changes.

5. **Form Submission Handler**:
   ```javascript
   const signUp = (e) => {
     e.preventDefault(); // Prevent the default form submission.
     console.log(form); // Log the form data to the console.
   };
   ```

   This function prevents the default form submission and logs the form data to the console.

6. **Render Method**:
   ```javascript
   return (
     <div className="bg-gray-100 flex justify-center items-center">
       <div className="w-[450px] p-5 bg-white rounded-lg shadow-lg animate__animated animate__zoomIn">
         <h1 className="text-center text-2xl font-bold mb-3">Sign Up Form</h1>
         <form className="flex flex-col gap-4" onSubmit={signUp}>
           {/* Form Fields */}
           {/* Submit Button */}
         </form>
       </div>
     </div>
   );
   ```

   The form is rendered with various input fields and validation messages. The outer `div` applies a zoom-in animation to the form.

### Conclusion

This React form application serves as a basic example of state management and form validation. It can be further enhanced by integrating with a backend service for user registration and adding more sophisticated validation rules.

Feel free to customize and extend this application as per your needs!

### License

This project is licensed under the MIT License. See LICENSE for details.


## Author

- [@Developer-Abhi-Stack](https://github.com/Developer-Abhi-stack)

