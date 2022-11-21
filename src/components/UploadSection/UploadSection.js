import React, { useState } from 'react';
import './UploadSection.scss';
import thumbnailPlaceholder from '../../assets/images/Upload-video-preview.jpg';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';
import PublishIcon from '../../assets/icons/publish.svg';
import TextAreaInput from '../TextAreaInput/TextAreaInput';
import UploadIcon from '../../assets/icons/upload.svg';

import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Uploader } from 'uploader';
import { UploadButton } from 'react-uploader';

function UploadSection(props) {
  const [inputDetails, setInputDetails] = useState({
    title: '',
    description: '',
    thumbnailUpload: '',
  });
  const [validTitleInput, setValidTitleInput] = useState('input-block__input');
  const [validDescInput, setValidDescInput] = useState(
    'text-area-block__input'
  );
  const navigate = useNavigate();

  const handleFormInput = (event) => {
    if (event.target.name === 'title') {
      setInputDetails({
        ...inputDetails,
        title: event.target.value,
      });
      if (event.target.value !== '') {
        setValidTitleInput('input-block__input');
      } else {
        setValidTitleInput('input-block__input input-block__input--invalid');
      }
    } else if (event.target.name === 'description') {
      setInputDetails({
        ...inputDetails,
        description: event.target.value,
      });
      if (event.target.value !== '') {
        setValidDescInput('text-area-block__input');
      } else {
        setValidDescInput(
          'text-area-block__input text-area-block__input--invalid'
        );
      }
    }
  };

  const handleInputError = () => {
    if (inputDetails.title === '') {
      setValidTitleInput('input-block__input input-block__input--invalid');
    }

    if (inputDetails.description === '') {
      setValidDescInput(
        'text-area-block__input text-area-block__input--invalid'
      );
    }
  };

  const invalidInputs = () =>
    toast.error('Please fill in all inputs', {
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: 'colored',
    });

  const missingThumbnail = () =>
    toast.error('Please upload a thumbnail', {
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: 'colored',
    });

  const uploadNewVideo = async (title, description, thumbnailUpload) => {
    const response = await axios.post('http://localhost:8080/videos', {
      title: title,
      description: description,
      thumbnailUpload: thumbnailUpload,
    });

    console.log(response);
  };

  const onSubmitInput = (e) => {
    e.preventDefault();
    handleInputError();

    if (
      inputDetails.title !== '' &&
      inputDetails.description !== '' &&
      inputDetails.thumbnailUpload !== ''
    ) {
      //add new video to endpoint
      uploadNewVideo(
        inputDetails.title,
        inputDetails.description,
        inputDetails.thumbnailUpload
      );

      setInputDetails({
        ...inputDetails,
        title: '',
        description: '',
      });

      const successFeedback = () => {
        toast.success('Video Uploaded!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: 'colored',
        });
      };
      successFeedback();

      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } else if (inputDetails.title === '' || inputDetails.description === '') {
      invalidInputs();
    } else if (inputDetails.thumbnailUpload === '') {
      missingThumbnail();
    }
  };

  const uploader = Uploader({
    apiKey: 'free',
  });
  return (
    <section className="upload-section">
      <form className="upload-section__container" onSubmit={onSubmitInput}>
        <div className="upload-section__header-holder">
          <h1 className="upload-section__header">Upload Video</h1>
        </div>
        <div className="upload-section__user-input-area">
          <div className="upload-section__thumbnail-side">
            <p className="upload-section__thumbnail-header">VIDEO THUMBNAIL</p>
            <img
              className="upload-section__thumbnail"
              src={
                inputDetails.thumbnailUpload
                  ? inputDetails.thumbnailUpload
                  : thumbnailPlaceholder
              }
              alt="thumbnail"
            />
          </div>
          <div className="upload-section__forms-side">
            <div className="upload-section__add-title">
              <InputForm
                placeholder={'Add a title to your video'}
                label={'TITLE YOUR VIDEO'}
                name={'title'}
                onChange={handleFormInput}
                inputClassName={validTitleInput}
                value={inputDetails.title}
              />
            </div>
            <div className="upload-section__add-description">
              <TextAreaInput
                placeholder={'Add a description to your video'}
                label={'ADD A VIDEO DESCRIPTION'}
                name={'description'}
                onChange={handleFormInput}
                inputClassName={validDescInput}
                value={inputDetails.description}
              />
            </div>
            <div className="upload-section__add-thumbnail">
              <p className="upload-section__upload-thumbnail-text">
                UPLOAD A THUMBNAIL
              </p>
              <UploadButton
                uploader={uploader}
                options={{ multi: true }}
                onComplete={(files) =>
                  setInputDetails({
                    ...inputDetails,
                    thumbnailUpload: files[0].fileUrl,
                  })
                }
              >
                {({ onClick }) => (
                  <Button icon={UploadIcon} text={'UPLOAD'} onClick={onClick} />
                )}
              </UploadButton>
            </div>
          </div>
        </div>
        <div className="upload-section__action-buttons">
          <div className="upload-section__publish-button">
            <Button icon={PublishIcon} text={'PUBLISH'} type={'submit'} />
          </div>
          <Link to={'/home'} className="upload-section__cancel-button-link">
            <p className="upload-section__cancel-button">Cancel</p>
          </Link>
          <ToastContainer />
        </div>
      </form>
    </section>
  );
}

export default UploadSection;
