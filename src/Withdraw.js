//I tried updating balance in balance (using setUsers in App.js and bringing it over but still not updating)


import React from 'react'
import Card from "./Card";





function Withdraw({ users, setUsers}){
   const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState(true);
    const [withdraw, setWithdraw] = React.useState('');

    let userBalance = users.users[0].balance;
    
    let currentBalance = `Account Balance $ ${userBalance} `;

    
  
  
    function handleCreate(){
     
      if (!validate(withdraw, userBalance)) return;
      let newBalance = users.users[0].balance - withdraw;
      setUsers((prevUsers) => {
        const user = prevUsers.users.pop();
        return {users: [{...user, balance: newBalance}]};
      })
      
      setShow(false);
    }  

    function clearForm(){
    setWithdraw('');
      setShow(true);
      
    }

    // WHY WONT THIS SWITCH??????

    function validate(withdraw, newBalance){
     console.log(withdraw);
      if(Number.isNaN(parseInt(withdraw, 10))){
       
        alert('Error: Invalid entry. Please enter a numeric value')
        return false;
      } 

        else if (withdraw > newBalance) {
          setStatus(false );
          setShow(false);
          alert('Error: insufficient funds');
        return false;
        
        }
        setStatus(true);
        return true;
        
        
    }
  
      function goBack(){
       setShow(true);
      
      }
  
    

    let body;
    if (show) {
        body = (
          <>
          <h2 id="balance">{currentBalance}</h2>
           Withdraw Amount<br/>
           <input type="input" className="form-control" id="withdraw" placeholder="Withdraw Amount " value={withdraw} onChange={e => setWithdraw(e.target.value)}/><br/>
          
          
           <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={withdraw<1}>Withdraw</button>
           
           </>   
        )
    } else {
      if (status) {
        body = (
          <>
                  <h5>Success</h5>
                  <button type="submit" className="btn btn-light"  onClick={clearForm}>Add another withdrawal</button>
                  </> 
        )
      } else {
        body = (
          <>
          <h5>Transaction Failed</h5>
          <button type="submit" className="btn btn-light"  onClick={goBack}>Try another withdrawl amount</button>
          </>
        )
      }
    } 
  
   /* Transaction failed not linking back to withdrawal. The clearForm function for Success is set to true and withdrawl its set to false
   is that the issue? I tried changing validate result to (!false) but that didn't work. I also tried setting a new visible/ setVisible variable to use in validate
   (so it doesn't interfere with success) but that did not work. Last thing I tried was setting onClick to {!clearform}. No dice!!!
   Also tried inverting validate function and calling that as my onclick*/
    return (
      <Card
        bgcolor="primary"
        header="Withdraw"
        status={status}
        maxWidth= "25rem"
        body={body  
                
              
                
              }
      />
    )
  }
  

  export default Withdraw;