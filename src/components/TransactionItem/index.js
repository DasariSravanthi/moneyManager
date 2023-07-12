// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {title, amount, type} = transactionDetails

  return (
    <li>
      <hr className="line" />
      <div className="history-item-container">
        <p className="item-content">{title}</p>
        <p className="item-content">{amount}</p>
        <p className="item-content">{type}</p>
        <button className="delete-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            data-testid="delete"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
