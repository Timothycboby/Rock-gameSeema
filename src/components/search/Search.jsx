import React from "react";
import { Input } from "antd";

const { Search } = Input;

const App = () => (
  <>
    <div className="w-64">
      <Search placeholder="input search loading default" loading />
    </div>
  </>
);

export default App;
