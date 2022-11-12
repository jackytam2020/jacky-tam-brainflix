import React from 'react';
import './UploadSection.scss';
import Thumbnail from '../../assets/images/Upload-video-preview.jpg';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';
import PublishIcon from '../../assets/icons/publish.svg';
import TextAreaInput from '../TextAreaInput/TextAreaInput';

import { Link } from 'react-router-dom';

function UploadSection(props) {
  return (
    <section className="upload-section">
      <form className="upload-section__container">
        <div className="upload-section__header-holder">
          <h1 className="upload-section__header">Upload Video</h1>
        </div>
        <div className="upload-section__user-input-area">
          <div className="upload-section__thumbnail-side">
            <p className="upload-section__thumbnail-header">VIDEO THUMBNAIL</p>
            <img
              className="upload-section__thumbnail"
              src={Thumbnail}
              alt="thumbnail"
            />
          </div>
          <div className="upload-section__forms-side">
            <div className="upload-section__add-title">
              <InputForm
                placeholder={'Add a title to your video'}
                label={'TITLE YOUR VIDEO'}
              />
            </div>
            <div className="upload-section__add-description">
              <TextAreaInput
                placeholder={'Add a description to your video'}
                label={'ADD A VIDEO DESCRIPTION'}
              />
            </div>
          </div>
        </div>
        <div className="upload-section__action-buttons">
          <div className="upload-section__publish-button">
            <Link to={'/home'}>
              <Button icon={PublishIcon} text={'PUBLISH'} />
            </Link>
          </div>
          <Link to={'/home'} className="upload-section__cancel-button-link">
            <p className="upload-section__cancel-button">Cancel</p>
          </Link>
        </div>
      </form>
    </section>
  );
}

export default UploadSection;
