// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {amountDetails} = props
  const {totalBalance, totalIncome, totalExpenses} = amountDetails

  return (
    <div className="money-details-card">
      <div className="type-card balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="type-img"
          alt="balance"
        />
        <div className="type-amount-card">
          <p className="type">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className="type-card income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="type-img"
          alt="income"
        />
        <div className="type-amount-card">
          <p className="type">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="type-card expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="type-img"
          alt="expenses"
        />
        <div className="type-amount-card">
          <p className="type">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
