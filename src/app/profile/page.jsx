import Card from "@/components/Card";

const lab = "font-bold";

const Profile = () => {
  return (
    <Card title={"Profile"}>
      <div className="grid grid-cols-2 gap-8">
        <p className={lab}>UserId</p>
        <p>8384</p>
        <p className={lab}>Password</p>
        <p>password@123</p>
        <p className={lab}>Wallet address</p>
        <p>0x000000</p>
        <p className={lab}>Phone number</p>
        <p>1234567890</p>
        <p className={lab}>Vehicle Number</p>
        <p>27383</p>
        <p className={lab}>Address</p>
        <p>saraswathi hostel,IIT Madras</p>
      </div>
    </Card>
  );
  // return (
  //   <div className="flex flex-col justify-center items-center h-screen text-xl">
  //     <div className="bg-green-300 p-36 rounded-2xl">
  //       <h2 className="text-center font-extrabold text-3xl pb-16">Profile</h2>
  //       <div className="flex">
  //         <div className="p-4 m-4">
  //           <p className="font-bold">User ID:</p>
  //         </div>
  //         <div className="p-4 m-4">
  //           <p>Name</p>
  //         </div>
  //       </div>
  //       <div className="flex">
  //         <div className="p-4 m-4">
  //           <p className="font-bold">User ID:</p>
  //         </div>
  //         <div className="p-4 m-4">
  //           <p>Name</p>
  //         </div>
  //       </div>
  //       <div className="flex">
  //         <div className="p-4 m-4">
  //           <p className="font-bold">User ID:</p>
  //         </div>
  //         <div className="p-4 m-4">
  //           <p>Name</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Profile;
