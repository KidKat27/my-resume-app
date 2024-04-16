// Popup.js
import React from 'react';
import './popup.scss';

const Popup = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="popup-overlay font-poppins" onClick={onClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold">Viewing on a mobile device?!</h2>
            <p className='text-xl pt-4'>The site is functionally responsive however for a better experience please view on a larger screen.</p>
            <button className='mt-10 p-1 rounded-3xl right-0 bg-slate-600' onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;