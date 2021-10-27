import React from "react";
//
import Loader from "ui/components/loader";

const RentingsTable = ({ rentings, isLoadingRentings }) => {
  return (
    <table className="table table-striped" role="table">
      <thead>
        <tr>
          <th>Fecha alquiler</th>
          <th>Dias</th>
          <th>Modelo</th>
        </tr>
      </thead>
      <tbody>
        {!isLoadingRentings &&
          rentings.map((r) => {
            return (
              <tr key={r.id}>
                <td>{r.rentingDate.toLocaleString()}</td>
                <td>{r.days}</td>
                <td>
                  {r.model.type}{" "}
                  <span className="text-muted">{r.model.category}</span>
                </td>
              </tr>
            );
          })}

        {!isLoadingRentings && rentings.length === 0 && (
          <tr className="text-center">
            <td colSpan={3}>
              <b>Todavía no has alquilado ninguna bici, anímate!</b>
            </td>
          </tr>
        )}

        {isLoadingRentings && (
          <tr className="text-center">
            <td colSpan={3}>
              <Loader />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default RentingsTable;
