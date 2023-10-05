import React from 'react';
import Header from '../Header/Header';
import Input from '../Input/Input';
import Tr from '../Tr/Tr';
import { useSelector } from 'react-redux';

const Home = () => {
  const items=useSelector(state=>state.items)

  
  return (
    <div>
      <Header></Header>
      <section>
        {/* <!-- Input Data --> */}
        <Input></Input>
        {/* <!-- Preview Data --> */}
        <div className="table-container">
          <table className="booking-table">
            <thead className="bg-gray-100/50">
              <tr className="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th className="text-center">Journey Date</th>
                <th className="text-center">Guests</th>
                <th className="text-center">Class</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
              {/* <!-- Row 1 --> */}
              {items?.map((item,index)=><Tr key={index} item={item}></Tr>)}

            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Home;