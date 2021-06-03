function contain() {
  return (
    <div className="contains">
      <div className="step_flow">
        <div className="step1">
          <div className="step active">
            <span>1</span>
            {/* <i className="fas fa-check"></i> */}
          </div>
          <span>MIS DATOS</span>
        </div>
        <div className="step_line"></div>
        <div className="step2">
          <div className="step">
            <span>2</span>
            {/* <i className="fas fa-check"></i> */}
          </div>
          <span>PAGO</span>
        </div>
      </div>
      <div className="info">
        <div className="describe">
          <h1>Mis Datos</h1>
          <span>
            Revisa los datos y completa aquellas pendientes antes de continuar con el procesa.
          </span>
        </div>
        <div className="detail">
          <div className="forename">
            <span>Nombre</span>
            <input type="text" />
          </div>
          <div className="surname">
            <span>Apelidos</span>
            <input type="text" />
          </div>
        </div>
        <div className="action">
          <div className="btn-next">
            <span>Continuar</span>
            <i className="fas fa-arrow-circle-right"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contain