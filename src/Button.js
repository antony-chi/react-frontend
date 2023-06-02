import PropTypes from "prop-types";

export function Button({ text, name = 'User' }) {
  console.log(text)
/*   if(!text){
    console.error('el text es requerido')
  } */
  return <button>
    {text}- {name}
  </button>;
}

//---tipo de dato esperado, te manda una advertencia en consola
Button.propTypes = {
    text: PropTypes.string.isRequired
}
//---forma de agregar un valor de props por defecto
/* Button.defaultProps = {
    name: 'Some User'
} */