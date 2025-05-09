import { useState } from "react";

import "./table.css";
import React from "react";
import { Data } from "../../types";
import { capitalize } from "../../utils/utils";

export type TableProps = {
  rows: Data;
};
export const Table = ({ rows }: TableProps) => {
  const [sortedRows, setRows] = useState(rows);

  const formatEntry = (entry: string | number | boolean) => {
    if (typeof entry === "boolean") {
      return entry ? "✅" : "❌";
    }

    return entry;
  };

  //Filter controls
  const [order, setOrder] = useState("asc");
  const [sortKey, setSortKey] = useState(Object.keys(rows[0])[0]);

  const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
  
    if (value) {
      setRows([ ...rows.filter(row => {
        return Object.values(row)
          .join('')
          .toLowerCase()
          .includes(value)
      }) ])
    } else {
      setRows(rows)
    }
  }
  
  
  const sort = (value: keyof Data[0], order: string) => {
    const returnValue = order === 'desc' ? 1 : -1
  
    setSortKey(value)
    setRows([ ...sortedRows.sort((a, b) => {
      return a[value] > b[value]
        ? returnValue * -1
        : returnValue
    }) ])
  }


  const updateOrder = () => {
  const updatedOrder = order === 'asc' ? 'desc' : 'asc'

  setOrder(updatedOrder)
  sort(sortKey as keyof Data[0], updatedOrder)
}


  
  return (
    <>
      <div className="controls">
        <input type="text" placeholder="Filter items" onChange={filter} />
        <select onChange={(event) => sort()}>
          {Object.keys(rows[0]).map((entry, index) => (
            <option value={entry} key={index}>
              Order by {capitalize(entry)}
            </option>
          ))}
        </select>
        <button onClick={updateOrder}>Switch order ({order})</button>
      </div>
      <table>
        <thead>
          <tr>
            {Object.keys(rows[0]).map(
              (
                entry,
                index // return the keys of the object as a list of strings
              ) => (
                <th key={index}>{capitalize(entry)}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((entry, columnIndex) => (
                <td key={columnIndex}>{formatEntry(entry)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!sortedRows.length && (
      <h1>No results... Try expanding the search</h1>
    )}
    </>
  );
};
