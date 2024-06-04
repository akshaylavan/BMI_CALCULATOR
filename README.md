# BMI Calculator

This is a simple BMI (Body Mass Index) Calculator built with React. It allows users to input their height (in cm) and weight (in kg) to calculate their BMI and provides a status based on the BMI value (e.g., Underweight, Normal Weight, Overweight, or Obese).

## Features

- User can input height and weight.
- Validates input to ensure height and weight are numeric.
- Calculates BMI based on the input values.
- Displays BMI value and corresponding weight status.
- Clear button to reset the inputs and results.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/akshaylavan/BMI_CALCULATOR.git
   cd BMI_CALCULATOR
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Input your height and weight to calculate your BMI.

## Code Overview

### `Bmi` Component

The `Bmi` component handles the entire functionality of the BMI Calculator.

- **State Variables:**
  - `height` - Stores the user's input for height.
  - `weight` - Stores the user's input for weight.
  - `bmi` - Stores the calculated BMI value.
  - `status` - Stores the BMI status based on the calculated BMI.
  - `errorMessage` - Stores any error messages for invalid input.

- **Functions:**
  - `calculateBmi` - Validates the inputs, calculates the BMI, determines the BMI status, and updates the state variables.
  - `clear` - Resets all state variables to their initial values.

### Styling

The component uses Tailwind CSS for styling. Make sure Tailwind CSS is properly configured in your project.

## Screenshots

![BMI Calculator Screenshot](./BMIphoto/screenshot.jpg)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README further to suit your project's needs. If you have any questions or need further assistance, please don't hesitate to reach out. Happy coding!
