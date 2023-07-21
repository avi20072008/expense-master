import React from "react";

interface Expense {
  id: number;
  desc: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  handleDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, handleDelete }: Props) => {
  // if(expenses.length === 0)
  //     return null;

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.desc}</td>
              <td>{exp.amount}</td>
              <td>{exp.category}</td>
              <td>
                <button
                  onClick={() => handleDelete(exp.id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
