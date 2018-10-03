import React from 'react';

export default function FamilyChanger(props) {
  return (
    <select value={props.fontFamily} onChange={event => props.update(event.target.value)} className="dropDownContainer"  disabled={!props.allowEdit}>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}