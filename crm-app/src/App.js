
import React from 'react'
import { Router as RouterHistory } from 'react-router';
import { Provider } from 'react-redux';
import history from "@utils/history";
import store from "@/redux/store"

import { Button, Result } from 'antd';

import useNetwork from "@/hooks/useNetwork";

export default function App() {

  const {isOnline: isNetwork} = useNetwork()

  if(!isNetwork)
  return (
   <>

<Result
status="404" 
title="No Internet Connection"
subTitle="Check your Internet Connection or your network"
extra={
  <Button href="/" type="primary">
    Try Again
  </Button>
}
/>

   </>
  );
}
