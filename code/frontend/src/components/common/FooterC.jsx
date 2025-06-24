import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function FooterC() {
  return (
    <MDBFooter style={{height: '112px', marginTop: '101px'}} bgColor='dark' className='text-center text-lg-left'>
      <div className='text-center p-3'>
        <p className='text-light'>
          ComplaintCare
        </p>
        <p className='text-light'>&copy;mpremkumar426@gmail.com<br></br> {new Date().getFullYear()}</p>
      </div>
    </MDBFooter>
  );
}
