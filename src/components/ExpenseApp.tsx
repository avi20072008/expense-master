import React from "react";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";

const ExpenseApp = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, desc: "aaa", amount: 10, category: "Utilities" },
    { id: 2, desc: "bbb", amount: 10, category: "Entertainment" },
    { id: 3, desc: "ccc", amount: 10, category: "Utilities" },
    { id: 4, desc: "ddd", amount: 10, category: "Grocery" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  function handleDelete(id: number) {
    console.log("delete", id);
    setExpenses(expenses.filter((e) => e.id !== id));
  }

  function OnSelectCategory(category: string) {
    console.log("category", category);
    setSelectedCategory(category);
  }

  return (
    <div className="mb-3">
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      ></ExpenseForm>
      <br />
      <ExpenseFilter OnSelectCategory={OnSelectCategory}></ExpenseFilter>
      <br />
      <ExpenseList
        expenses={visibleExpenses}
        handleDelete={handleDelete}
      ></ExpenseList>
    </div>
  );
};

export default ExpenseApp;
