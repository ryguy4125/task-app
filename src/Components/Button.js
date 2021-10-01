
const Button = ({ text, color, onClick }) => {
    return (
        <>
           <button 
            style={{backgroundColor: color}} 
            className='btn'
            onClick={ onClick }
            >
                { text }
            </button> 
        </>
    )
}

Button.defaultProps = {
    text: "Click!",
    color: "lightblue"
}

export default Button
