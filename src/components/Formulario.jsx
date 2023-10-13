import{ useState } from 'react';
import PropTypes from 'prop-types'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { errorAlert, successAlert } from './helpers/sweetalert.js'
import { v4 as uuidv4 } from 'uuid';

function Formulario({ onAgregarColaborador }) {
    const [getDispatch, setGetDispatch] = useState('');
    const [getClient, setGetClient] = useState('');
    const [getReference, setGetReference] = useState('');
    const [getBl, setGetBl] = useState('');
    const [getPort, setGetPort] = useState('');
    const [getPay, setGetPay] = useState('');
    const [getConcept, setGetConcept] = useState('');
    const [getObs, setGetObs] = useState('');

    const areFieldsEmpty = (...fields) => fields.some(field => field.trim() === ''); //funcion de soporte para validar campos vacios.

    const handleSubmit = (e) => {
        e.preventDefault();

        if (areFieldsEmpty(getDispatch, getClient, getReference, getBl, getPort,getPay,getConcept,getObs)) {
            errorAlert();
            return;

        } else {
            const nuevoColaborador = {
            // Generamos de forma aleatoria ID's para nuevos colaboradores.
                id:uuidv4(), 
                despacho: getDispatch,
                cliente: getClient,
                referencia:getReference,
                bl: getBl,
                puerto: getPort,
                pago: getPay,
                concepto: getConcept,
                observaciones: getObs
            };
            onAgregarColaborador(nuevoColaborador);
            successAlert();
            }
    };

return (
<>
    <Form
        className="w-100"
        onSubmit={ handleSubmit }
        >
        <h1 className='p-2'>Nuevo despacho</h1>
        <InputGroup className="p-2">
        <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-plus"></i>
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=> setGetDispatch(e.target.value)}
        placeholder="Despacho"
        aria-label="Despacho"
        aria-describedby="basic-addon1"
        type="text"
        />
        </InputGroup>

        <InputGroup className="p-2">
        <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-user"></i>
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=> setGetClient(e.target.value)}
        placeholder="Cliente"
        aria-label="Cliente"
        aria-describedby="basic-addon1"
        type="text"
        />
        </InputGroup>

        <InputGroup className="p-2">
        <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-circle-info"></i>      
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=>  setGetReference(e.target.value)}
        placeholder="Referencia"
        aria-label="Referencia"
        aria-describedby="basic-addon1"
        type="text"
        />
        </InputGroup>

        <InputGroup className="p-2">
        <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-ship"></i>        
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=> setGetBl(e.target.value)}
        placeholder="BL"
        aria-label="BL"
        aria-describedby="basic-addon1"
        type="text"
        />
        </InputGroup>

        <InputGroup className="p-2">
        <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-warehouse"></i>       
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=> setGetPort(e.target.value)}
        placeholder="Puerto"
        aria-label="Puerto"
        aria-describedby="basic-addon1"
        type="text"
        />
        </InputGroup>

        <InputGroup className="p-2">
        <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-money-check-dollar"></i>       
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=> setGetPay(e.target.value)} //!
        placeholder="Pago"
        aria-label="Pago"
        aria-describedby="basic-addon1"
        type="text"
        />
        </InputGroup>

        <InputGroup className="p-2">
        <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-file"></i>       
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=> setGetConcept(e.target.value)} //!
        placeholder="Concepto"
        aria-label="Concepto"
        aria-describedby="basic-addon1"
        type="text"
        />
        </InputGroup>

        <InputGroup className="p-2">
        <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-triangle-exclamation"></i>       
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=> setGetObs(e.target.value)} //!
        placeholder="Observaciones"
        aria-label="Observaciones"
        aria-describedby="basic-addon1"
        type="text"
        />
        </InputGroup>

        <Button
        variant="primary"
        type="submit"
        value="submit"
        className='p-2 mt-2'
        ><i className="fa-solid fa-user-plus px-2"></i>
        Agregar colaborador</Button>
    </Form>
    </>
    )}

Formulario.propTypes = {
    onAgregarColaborador: PropTypes.func.isRequired,
    handleError: PropTypes.func.isRequired
};

export default Formulario;