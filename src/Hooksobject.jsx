import React, { useState } from "react";
export default function Hooksobject() {
  const [a, b] = useState("click me")
  let c = "#fffff"
  let change = () => {
    b("famid raza")
    b(c)
  }

  return (
    <>
      <button onClick={change}>{a}</button>
    </>
  )
}