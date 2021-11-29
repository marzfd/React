const Button = ({ setCount }) => {
    return  <button
              className="button"
              onClick = {() => setCount(num => num + 1)}
              >Add 1
            </button>
}

export default Button;