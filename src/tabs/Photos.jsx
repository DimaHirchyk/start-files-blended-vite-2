import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import { useEffect, useState } from 'react';
import { getPhotos } from '../apiService/photos';
import Loader from '../components/Loader/Loader';
import Button from '../components/Button/Button';

const Photos = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchArticles() {
      setIsLoading(true);
      try {
        const data = await getPhotos(query, page);
        console.log(data);
        setImages(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArticles();
  }, [query, page]);

  const getQuery = inputValue => {
    setQuery(inputValue);
    setPage(1);
  };

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={getQuery} />
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {isLoading ? <Loader /> : <PhotosGallery images={images} />}
      <Button />
    </>
  );
};

export default Photos;
