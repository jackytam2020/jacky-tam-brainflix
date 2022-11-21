import React from 'react';
import './UploadPage.scss';
import Header from '../components/Header/Header';
import UploadSection from '../components/UploadSection/UploadSection';

function UploadPage(props) {
  return (
    <div className="upload-page-container">
      <Header />
      <UploadSection />
    </div>
  );
}

export default UploadPage;
