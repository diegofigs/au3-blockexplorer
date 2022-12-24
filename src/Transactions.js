export function Transactions(props) {
  const { transactions } = props;
  return (
    <div>
      {transactions &&
        transactions.map((tx, i) => {
          return (
            <div key={`tx-${i}`}>
              <h4>Hash: {tx.hash}</h4>
              <p>From: {tx.from}</p>
              <p>To: {tx.to}</p>
              <br />
            </div>
          );
        })}
    </div>
  );
}
