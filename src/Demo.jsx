const Demo =()=>
{
    const a=10, b=20;
    const islogin = true; 

    const styles = {
        color:"red"
    }
    return (
        <div>
            <p>a+b is {a+b}</p>
            <p style={styles}> {islogin && <h1>Welcome back!</h1>} </p>
        </div>
    )
}
export default Demo
