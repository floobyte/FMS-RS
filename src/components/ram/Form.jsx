

function Form() {
  return (
    <>
     <div>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='Enter your Name' required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder='Enter your Email' required />
      </form>
     </div>
    </>
  )
}

export default Form




form{
    width: 200px;
    border: 1px solid black;
    padding: 10px;
    justify-content: center;
}
input{
  width: 90%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid black;
}