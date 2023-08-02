import './index.css'
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    activeTypeId: transactionTypeOptions[0].optionId,
    transactionList: [],
    totalBalance: '',
    totalIncome: '',
    totalExpenses: '',
  }

  givenTitle = event => {
    this.setState({title: event.target.value})
  }

  givenAmount = event => {
    this.setState({amount: event.target.value})
  }

  selectedType = event => {
    this.setState({activeTypeId: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()

    const {title, amount, activeTypeId} = this.state

    const transactionType = transactionTypeOptions.find(
      eachType => eachType.optionId === activeTypeId,
    )

    const type = transactionType.displayText

    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    let income = 0
    let expenses = 0

    if (type === 'Income') {
      income = amount
    } else {
      expenses = amount
    }

    console.log(income, expenses, income)

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      activeTypeId: transactionTypeOptions[0].optionId,
      totalBalance: prevState.totalBalance + (income - expenses),
      totalIncome: prevState.totalIncome + income,
      totalExpenses: prevState.totalExpenses + expenses,
    }))
  }

  render() {
    const {
      title,
      amount,
      activeTypeId,
      transactionList,
      totalBalance,
      totalIncome,
      totalExpenses,
    } = this.state
    const amountDetails = {totalBalance, totalIncome, totalExpenses}

    console.log(amountDetails)

    return (
      <div className="background">
        <div className="money-manager-card">
          <div className="header-card">
            <h1 className="heading">Hi, Richard</h1>
            <p className="paragraph">
              Welcome back to your{' '}
              <span className="span-element">Money Manager</span>
            </p>
          </div>
          <MoneyDetails amountDetails={amountDetails} />
          <div>
            <form className="form-container" onSubmit={this.addTransaction}>
              <h1 className="form-heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                placeholder="TITLE"
                id="title"
                value={title}
                onChange={this.givenTitle}
                className="input"
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="text"
                placeholder="AMOUNT"
                id="amount"
                value={amount}
                onChange={this.givenAmount}
                className="input"
              />
              <label htmlFor="type" className="label">
                TYPE
              </label>
              <select
                name="type"
                id="type"
                value={activeTypeId}
                onChange={this.selectedType}
                className="input"
              >
                {transactionTypeOptions.map(eachType => (
                  <option key={eachType.optionId} value={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <div className="history-list-container">
                <div className="history-list-heading-container">
                  <h1 className="list-heading">Title</h1>
                  <h1 className="list-heading">Amount</h1>
                  <h1 className="list-heading">Type</h1>
                </div>
                <ul className="history-item-container">
                  {transactionList.map(eachTransaction => (
                    <TransactionItem
                      transactionDetails={eachTransaction}
                      key={eachTransaction.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
