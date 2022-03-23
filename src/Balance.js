

function Balance({users, withdraw, deposit}){
  /*let newBalance = users.users[0].balance - withdraw.value + deposit.value;
  setUsers(newBalance);*/
     
    return (
      <>
      <h1>Balance</h1>
      <p> {users.users[0].balance} </p>
      </>
      
    )
  }
export default Balance;  

/*const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
  };*/