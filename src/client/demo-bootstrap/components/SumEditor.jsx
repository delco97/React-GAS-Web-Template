import React from 'react';
import { FormSum } from './FormSum';
// This is a wrapper for google.script.run that lets us use promises.
import server from '../../utils/server';

const { serverFunctions } = server;

export function SumEditor() {
  return (
    <div style={{ padding: '3px', overflowX: 'hidden' }}>
      <p>
        <b>☀️ Bootstrap demo!☀️</b>
      </p>
      <p>
        This is a sample app that uses the <code>react-bootstrap</code> library
        to help us build a simple React app.
      </p>
      <FormSum />
    </div>
  );
};

export default SumEditor;
