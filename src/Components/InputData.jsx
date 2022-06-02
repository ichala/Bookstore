import React from 'react';

function InputData() {
  return (
    <>
      <form>
        <input type="text" placeholder="title" name="title" id="title" />
        <input type="text" placeholder="author" name="author" id="author" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default InputData;
