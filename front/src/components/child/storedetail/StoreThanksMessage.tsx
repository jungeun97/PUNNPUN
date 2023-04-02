import { useRecoilState } from 'recoil';
import styled from 'styled-components';
// import { reviewState } from '../../../store/atoms';
import ReviewItem from '../../ui/ReviewItem';
import StoreBanner from './Storebanner';
import API from '../../../store/API';
import { useEffect, useState } from 'react';
import Loading from '../../ui/Loading';

type Props = {
  myStoreId: string | undefined;
};

type Review = {
  reviewId: number;
  reviewContent: string;
  keywords: {
    content: string;
    createdDateTime: string;
    lastModifiedDateTime: string;
    id: number;
  }[];
  childId: number;
  childName: string;
  childProfileUrl: string;
};

const StoreThanksMessage = ({ myStoreId }: Props) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [storeName, setStoreName] = useState();

  useEffect(() => {
    API.get(`reviews/stores/${myStoreId}`)
      .then((response) => {
        setReviews(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    API.get(`stores/${myStoreId}`)
      .then((response) => {
        setStoreName(response.data.storeName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <StoreBanner storeName={storeName} />
      <ReviewItem reviews={reviews} />
    </>
  );
};

export default StoreThanksMessage;
