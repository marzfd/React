function Button({ getDogPhoto }) {
  return (
    <button
      onClick={getDogPhoto}
    >
      Get a Dog !
    </button>
  )
}

export default Button;