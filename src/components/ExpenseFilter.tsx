import React from "react";

interface Props {
  OnSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ OnSelectCategory }: Props) => {
  return (
    <>
      <select
        className="form-select"
        onChange={(e) => OnSelectCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Grocery">Grocery</option>
      </select>
    </>
  );
};

export default ExpenseFilter;
