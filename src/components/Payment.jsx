import Card from "@/components/Card";

const Payment = () => {
    return (
      <Card title={'Verify'}>
        <form>
        <div className="grid grid-cols-2 gap-8">
          <p>Current Battery ID</p>
          <p>17584</p>
          <p>Value in ICP</p>
          <p>5</p>

          <p>New Battery ID</p>
          <p>86454</p>
          <p>Value in ICP</p>
          <p>50</p>

          <p>Price payable</p>
          <p>46</p>
        </div>
        <button type="submit">Confirm</button>
        </form>
      </Card>
    );
  };
  
  export default Payment;
  