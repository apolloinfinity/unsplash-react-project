import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  // 1. callback function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };
  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;

/**
 * 1. Call back function must be provide in order for data to be passed from child to parent.
 *
 * a. Treat it like a normal event.
 * b. pass an event handler down.
 * c. call handler when something interesting happens.
 *
 * This is the standard that is everytime if not using a state management system like Redux.
 */

/** Handling Text Inputs
 * 1. Create a new piece of state.
 * 2. Create and event handler to watch for the 'onChange' event
 * 3. When the 'onChange' event fires, get the value from the input
 * 4. Take the value from the input and use it to update your state.
 * 5. Pass your state to the input as the value prop.
 *
 */
