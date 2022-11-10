import React from 'react';
import './UploadPage.scss';
import Header from '../components/Header/Header';
import UploadSection from '../components/UploadSection/UploadSection';
import { useParams } from 'react-router-dom';

function UploadPage(props) {
  const params = useParams();

  return (
    <div className="upload-page-container">
      <Header />
      <UploadSection />
    </div>
  );
}

export default UploadPage;
