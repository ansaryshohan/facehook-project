import React from "react";

export default function Field({ label, children, htmlFor, error }) {
  const id = htmlFor || getChildId(children);
  return (
    <div className="form-control">
      {label && <label className="auth-label" htmlFor={id}>{label}</label>}
      {children}
      {!!error && (
        <div className="text-red-600 text-lg font-medium">{error.message}</div>
      )}
    </div>
  );
}

function getChildId(child) {
  const children = React.Children.only(child);
  if ("id" in children.props) {
    return children.props.id;
  }
}
