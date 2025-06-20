import React, { useCallback, useEffect, useState } from "react";
//
import Bike from "features/bike";
//
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RentingsTable from "ui/components/rentingsTable";
import ModalNewRenting from "ui/components/modalNewRenting";
import useIsMounted from "ismounted";

const RentingPage = () => {
  const isMounted = useIsMounted();

  // modal

  const [showModalNewRenting, setShowModalNewRentingModalNewRenting] =
    useState(false);

  const closeModalNewRenting = () =>
    setShowModalNewRentingModalNewRenting(false);

  const openModalNewRenting = () => {
    setDays(1);
    setSelectedModel(null);
    setShowModalNewRentingModalNewRenting(true);
  };

  // modal form

  const getAllModels = useCallback(async () => {
    setIsLoadingModalNewRentingForm(true);
    const responseModels = await Bike.getAllModels();
    if (isMounted.current) {
      setModels(responseModels);
      setIsLoadingModalNewRentingForm(false);
    }
  }, [isMounted]);

  const [isLoadingModalNewRentingForm, setIsLoadingModalNewRentingForm] =
    useState(true);

  const [models, setModels] = useState([]);

  const [selectedModel, setSelectedModel] = useState(null);

  // modal payment

  const [isWaitingPayment, setIsWaitingPayment] = useState(false);

  const [days, setDays] = useState(1);

  const isPaymentDisabled = !selectedModel || isWaitingPayment;

  const onPaymentComplete = () => {
    setIsWaitingPayment(true);

    var newRentingDto = {
      days,
      rentingDate: new Date(),
      model: selectedModel,
    };

    Bike.addRenting(newRentingDto).then((response) => {
      setIsWaitingPayment(false);
      getAllRentings();
      closeModalNewRenting();
    });
  };

  // modal props

  const modalNewRentingProps = {
    showModalNewRenting,
    closeModalNewRenting,
    isLoadingModalNewRentingForm,
    models,
    selectedModel,
    setSelectedModel,
    isWaitingPayment,
    days,
    setDays,
    onPaymentComplete,
    isPaymentDisabled,
  };

  // rentings

  const [isLoadingRentings, setIsLoadingRentings] = useState(true);

  const [rentings, setRentings] = useState([]);

  const getAllRentings = useCallback(async () => {
    setIsLoadingRentings(true);
    const responseRentings = await Bike.getAllRentings();
    if (isMounted.current) {
      setRentings(responseRentings);
      setIsLoadingRentings(false);
    }
  }, [isMounted]);

  // on startup get all rentings and all bike models

  useEffect(() => {
    // getAllRentings();
    getAllModels();
  }, [getAllModels]);

  useEffect(() => {
    getAllRentings();
  }, [getAllRentings]);

  return (
    <section>
      <ModalNewRenting props={modalNewRentingProps} />
      <h1 className="text-center mb-5">Alquiler</h1>{" "}
      <button className="btn btn-primary" onClick={openModalNewRenting}>
        <FontAwesomeIcon icon={faBicycle} fixedWidth className="me-1" />
        Alquilar
      </button>
      <div className="mt-4 mb-4">
        <RentingsTable
          rentings={rentings}
          isLoadingRentings={isLoadingRentings}
        />
      </div>
    </section>
  );
};

export default RentingPage;
