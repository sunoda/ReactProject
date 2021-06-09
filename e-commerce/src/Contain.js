import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { ReactComponent as Payment} from './img/payment.svg';
import { ReactComponent as Diploma} from './img/diploma.svg';

function Contain() {
  const formId = 'name';
  const [ forename, setForename ] = useState('');
  const [ surname, setSurname ] = useState('');
  const [ infoTitle, setInfoTitle ] = useState('');
  const [ infoText, setInfoText ] = useState('');
  const [ successMsg, setSuccessMsg ] = useState();

  const [ firstStep, setFirstStep ] = useState(true);
  const [ secondStep, setSecondStep ] = useState(false);
  const [ finalStep, setFinalStep ] = useState(false);

  const forenameHandler = (e) => {
    setForename(e.target.value)
  }
  const surnameHandler = (e) => {
    setSurname(e.target.value)
  }

  const initial = useCallback(() => {
    const initSet = () => {
      setInfoTitle('Mis Datos');
      setInfoText('Revisa los datos y completa aquellas pendientes antes de continuar con el procesa.')
      setFirstStep(true);
      setSecondStep(false)
      setFinalStep(false)
    }
    initSet();
  }, [])
  useEffect(() => {
      initial();
  }, [initial])

  const goFirst = () => {
    initial()
    setFirstStep(true)
    setSecondStep(false)
  }
  const goSecond = (e) => {
    e.preventDefault();
    
    setFirstStep(false)
    setSecondStep(true)
    setInfoTitle('Pago del product')
    setInfoText('Una vez efectuado el pago del producto, recibiras un email con los de detolles de la comprp.')
    axios.post('http://www.mocky.io/v2/5e3d41272d00003f7ed95c09', {forename, surname}).then(async (res) => {
      await setSuccessMsg(res.data)
    })
  }
  const goFinish = () => {
    setFirstStep(false)
    setSecondStep(false)
    setFinalStep(true)
    setInfoTitle(successMsg.title)
    setInfoText(successMsg.text)
  }

  return (
    <div className="contains">
      <div className="step_flow">
        <div className="step1">
          <div className={`step ${firstStep ? 'active ' : secondStep ? 'done ' : 'done'}`}>
            <span className={secondStep ? 'hide' : finalStep ? 'hide' : ''}>1</span>
            <i className={`fas fa-check ${firstStep ? 'hide' : secondStep ? '' : finalStep ? '' : 'hide'}`}></i>
          </div>
          <span>MIS DATOS</span>
        </div>
        <div className="step_line"></div>
        <div className="step2">
          <div className={`step ${firstStep ? '' : secondStep ? 'active ' : finalStep ? 'done' : ''}`}>
            <span className={finalStep ? 'hide' : ''}>2</span>
            <i className={`fas fa-check ${firstStep ? 'hide' : secondStep ? 'hide' : ''}`}></i>
          </div>
          <span>PAGO</span>
        </div>
      </div>
      <div className="info">
        <div className="describe">
          <Diploma className={finalStep ? '' : 'hide'}></Diploma>
          <h1>{infoTitle}</h1>
          <span>{infoText}</span>
        </div>
        <div className="detail">
          <form className={`input_name ${firstStep ? '' : 'hide'}`} id={formId} onSubmit={goSecond}>
            <div className="forename">
              <span>Nombre</span>
              <input type="text" value={forename} onChange={forenameHandler} required/>
            </div>
            <div className="surname">
              <span>Apelidos</span>
              <input type="text" value={surname} onChange={surnameHandler} required/>
            </div>
          </form>
          <div className={`credit_check ${secondStep ? '' : 'hide'}`}>
            <Payment className="payment"></Payment>
            <h1 className="payment_title">
                Tarjeta de credito
            </h1>
            <div className="payment_text">
              Se redirigira a una platforma de pago, Se trata de un proceso seguro. Puede que la validacion del pago tarde 24 horas en completarse.
            </div>
            <div className="icons">
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
            </div>
          </div>
        </div>
        <div className={`action ${firstStep ? 'first_step' : ''} ${secondStep ? 'second_step' : ''}`}>
          <button type="submit" form={formId} className={'btn_next first_step ' + (firstStep ? '' : 'hide')} >
              <span>Continuar</span>
              <i className="fas fa-arrow-circle-right"></i>
          </button>
          <div className={'btn_prev second_step ' + (secondStep ? '' : 'hide')} onClick={goFirst}>
            <i className="fas fa-arrow-circle-left"></i>
            <span>Anterior</span>
          </div>
          <div className={'btn_next second_step ' + (secondStep ? '' : 'hide')} onClick={goFinish}>
            <span>Pagar</span>
            <i className="fas fa-arrow-circle-right"></i>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contain