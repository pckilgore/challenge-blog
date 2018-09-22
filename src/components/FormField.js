import React, { Fragment } from 'react'

import TextareaAutosize from 'react-autosize-textarea'

const Field = props =>
  props.type === 'textarea' ? (
    <Fragment>
      <label className="input-label" htmlFor={props.label}>
        {props.label}
      </label>
      <TextareaAutosize
        id={props.label}
        className="textarea-field"
        {...props}
      />
    </Fragment>
  ) : (
    <Fragment>
      <label className="input-label" htmlFor={props.label}>
        {props.label}
      </label>
      <input id={props.label} className="input-field" {...props} />
    </Fragment>
  )

export const FormField = props => (
  <div className="field">
    <div className="field-layout hover">
      <div className="flex-element">
        <Field {...props} />
      </div>
    </div>
  </div>
)

export default FormField
