import React from "react";
//
import { Modal } from "react-bootstrap";
import {
  faCreditCard,
  faMinus,
  faPlus,
  faSpinner,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
import Loader from "ui/components/loader";

const ModalNewRenting = ({ props }) => {
  return (
    <Modal
      show={props.showModalNewRenting}
      onHide={props.closeModalNewRenting}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>Alquilar y rodar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mt-4 mb-4">
          {props.isLoadingModalNewRentingForm && <Loader />}
          {!props.isLoadingModalNewRentingForm && (
            <>
              <div className="text-center mt-3">
                ¿Que modelo de bici quieres?
              </div>
              <div className="mt-3">
                {props.models.map((m) => {
                  let modelClassName = "btn me-2 mb-2";
                  if (props.selectedModel?.id === m.id) {
                    modelClassName += " btn-primary";
                  } else {
                    modelClassName += " btn-secondary";
                  }
                  return (
                    <button
                      key={m.id}
                      className={modelClassName}
                      onClick={() => props.setSelectedModel(m)}
                    >
                      {m.type} {m.category}
                    </button>
                  );
                })}
              </div>
              <div className="text-center mt-3">
                ¿Cuantos días vas a querer la bici?
              </div>
              <div className="text-center mt-3">
                <button
                  className="btn btn-secondary me-3"
                  disabled={props.isWaitingPayment || props.days <= 1}
                  onClick={() => props.setDays(props.days - 1)}
                >
                  <FontAwesomeIcon icon={faMinus} fixedWidth />
                </button>
                <b>{props.days}</b>
                <button
                  className="btn btn-secondary ms-3"
                  disabled={props.isWaitingPayment || props.days >= 5}
                  onClick={() => props.setDays(props.days + 1)}
                >
                  <FontAwesomeIcon icon={faPlus} fixedWidth />
                </button>
              </div>
              {props.days >= 5 && (
                <div className="alert alert-primary mt-3">
                  Si quieres alquilar para más días mandanos un correo a{" "}
                  <a href="mailto:info@inventado.com">info@inventado.com</a>
                </div>
              )}
            </>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="container">
          <div className="row d-flex flex-row-reverse ">
            <div className="col-4">
              <button
                className="btn btn-primary w-100"
                disabled={props.isPaymentDisabled}
                onClick={props.onPaymentComplete}
              >
                {!props.isWaitingPayment && (
                  <>
                    <FontAwesomeIcon
                      icon={faCreditCard}
                      fixedWidth
                      className="me-1"
                    />
                    Pagar
                  </>
                )}
                {props.isWaitingPayment && (
                  <FontAwesomeIcon icon={faSpinner} fixedWidth spin />
                )}
              </button>
            </div>
            <div className="col-4">
              <button
                className="btn btn-secondary w-100"
                onClick={props.closeModalNewRenting}
                disabled={props.isWaitingPayment}
              >
                <FontAwesomeIcon icon={faTimes} fixedWidth className="me-1" />
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalNewRenting;
