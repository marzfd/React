import { useState } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';

function DogGallery() {

  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogPhotos([...dogPhotos, data.message]);
      })
      .catch(error => console.log(error))
  };

  return (
    <div>
      <Button getDogPhoto={getDogPhoto}/>
      {
        dogPhotos.length > 0 ?
          <div className='gallery'>
            {dogPhotos.map((dogPhoto, index) =>
              <DogPhoto key={index} dogPhoto={dogPhoto}/>
            )}
          </div>
        :
          <h4><em>Get your first dog by clicking the button !</em></h4>
      }
    </div>
  )
}

export default DogGallery;