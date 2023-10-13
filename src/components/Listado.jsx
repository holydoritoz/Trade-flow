import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


function Listado({ colaboradores, handleDelete }) {
    const btnStyle = {
    background: "none",
    border: "none",
    padding: "0",
    font: "inherit",
    color: "black",
    cursor: "pointer",
    outline: "inherit"
    };

    return (
<Container className='w-100'>
    <Table striped bordered hover>
        <thead>
        <tr className='text-center'>
            <th>Despacho</th>
            <th>Cliente</th>
            <th>Referencia</th>
            <th>BL</th>
            <th>Puerto</th>
            <th>Pago</th>
            <th>Concepto</th>
            <th>Observaciones</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        {colaboradores.map((colaborador, index) => (
            <tr key={colaborador.id}>
            <td>{colaborador.despacho}</td>
            <td>{colaborador.cliente}</td>
            <td>{colaborador.referencia}</td>
            <td>{colaborador.bl}</td>
            <td>{colaborador.forwarder}</td>
            <td>{colaborador.pago}</td>
            <td>{colaborador.concepto}</td>
            <td>{colaborador.observaciones}</td>

            <td className='text-center'>
                <button
                onClick={() => handleDelete(index)}
                style={btnStyle}
                >
                <i className="fa-solid fa-trash-can"></i>
                </button>
            </td>
            </tr>
        ))}
        </tbody>
    </Table>
</Container>
    );
}

Listado.propTypes = {
    colaboradores: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
        correo: PropTypes.string.isRequired,
        edad: PropTypes.number.isRequired,
        cargo: PropTypes.string.isRequired,
        telefono: PropTypes.string.isRequired
    })
    ).isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default Listado;