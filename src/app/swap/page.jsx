import Card from "@/components/Card";
import Payment from "@/components/Payment";
import Battery from "@/components/Battery";
// import { useState } from "react";

let payment;
const Swap = () => {
  //const [show, setShow] = useState(false);
  const show = false;
  if(show){
    payment = <Payment />
  }
    return (
      <Card title={'Swap'}>
        <Battery id={'23455'} health={'4'} charge={'84'} price={'75'}/>
        <Battery id={'23455'} health={'4'} charge={'84'} price={'75'}/>
        {payment}

      </Card>
    );
  };
  
  export default Swap;
  