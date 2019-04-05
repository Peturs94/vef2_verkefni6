import React, { useState } from 'react';
import Form from '../form/form';
import Button from '../button/Button';

// Stakt verkefni á /:id
export default function todoDetail(props) {
const {id, todo} = props;
  return (
    <React.Fragment>
      <div>
        <Button children="Uppfæra"/>
        <Button children = "Eyða"/>
      </div>
    </React.Fragment>
  );
}
