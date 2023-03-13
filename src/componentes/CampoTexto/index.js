import "./CampoTexto.css";

//let valor = ''

const CampoTexto = (props) => {
  // essa sintax pega e desestrutura o array e pega a primeira posição do array e a segunda posição do array

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
