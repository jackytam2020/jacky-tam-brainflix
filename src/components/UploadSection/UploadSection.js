import React, {useState, useEffect} from 'react';
import './UploadSection.scss';
import Thumbnail from '../../assets/images/Upload-video-preview.jpg';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';
import PublishIcon from '../../assets/icons/publish.svg';
import TextAreaInput from '../TextAreaInput/TextAreaInput';

import { Link, useNavigate } from 'react-router-dom';

function UploadSection(props) {
  const [inputDetails, setInputDetails] = useState({
    title:'',
    description:''
  })
  const [validTitleInput, setValidTitleInput] = useState('input-block__input')
  const [validDescInput, setValidDescInput] = useState('text-area-block__input')
  const navigate = useNavigate();

  const handleFormInput = (event) => {
   
    if(event.target.name === 'title'){
      setInputDetails(
        {
          ...inputDetails,
          title:event.target.value
        }
      )
      if(event.target.value !== ''){
        setValidTitleInput('input-block__input')
      }
      else{
        setValidTitleInput('input-block__input input-block__input--invalid')
      }
    }
    else if(event.target.name === 'description'){
      setInputDetails(
        {
          ...inputDetails,
          description:event.target.value
        }
      )
      if(event.target.value !== ''){
        setValidDescInput('text-area-block__input')
      }
      else{
        setValidDescInput('text-area-block__input text-area-block__input--invalid')
      }
    }
  }

  const handleInputError = () => {
    if(inputDetails.title === '') {
      setValidTitleInput('input-block__input input-block__input--invalid')
    }

    if(inputDetails.description === '') {
      setValidDescInput('text-area-block__input text-area-block__input--invalid')
    }
  }

  const onSubmitInput = () => {
    handleInputError()
 
    if(inputDetails.title !== '' && inputDetails.description !== ''){
      setTimeout(() => {
        navigate('/home')
      },2000)
    }
    else {
      navigate('/Upload')
    }
  }
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
                name={'title'}
                onChange={handleFormInput}
                inputClassName={validTitleInput}
              />
            </div>
            <div className="upload-section__add-description">
              <TextAreaInput
                placeholder={'Add a description to your video'}
                label={'ADD A VIDEO DESCRIPTION'}
                name={'description'}
                onChange={handleFormInput}
                inputClassName={validDescInput}
              />
            </div>
          </div>
        </div>
        <div className="upload-section__action-buttons">
          <div className="upload-section__publish-button">
            <Button icon={PublishIcon} text={'PUBLISH'} onSubmit={onSubmitInput}/>
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
