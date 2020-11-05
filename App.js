import React, { useState } from "react";

import LoginScreen from "./app/screen/LoginScreen";

export default function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <LoginScreen />
  );
}
