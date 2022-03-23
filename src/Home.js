import Card from "./Card";

function Home({users}){
   
 return (
      <Card
        txtcolor="white"
        maxWidth= "25rem"
        header="#StandWithUkraine"
        title="Welcome to the bank"
        text="Please use navigation bar to pick your option"
        body={(<img src="bank.png" className="img-fluid" alt="Bank Logo"/>)}
      />    
    );  
  }

  export default Home;