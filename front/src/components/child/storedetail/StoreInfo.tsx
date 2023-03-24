import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Map from '../../../common/Map';
import useGeolocation from '../../../common/useGeolocation';
import { storeState } from '../../../store/atoms';

import StoreBanner from './Storebanner';

const StoreInfo = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const stores = useRecoilValue(storeState);
  const currentStore = stores.find((s) => s.storeId === Number(storeId));
  const location = useGeolocation();
  const { latitude = 0, longitude = 0 } =
    typeof location === 'object' ? location : {};

  return (
    <>
      <StoreBanner />
      <h2>가게 정보</h2>
      {currentStore ? (
        <Map
          latitude={currentStore.latitude}
          longitude={currentStore.longitude}
          stores={[currentStore]} // 수정된 부분
        />
      ) : (
        <Map latitude={latitude} longitude={longitude} stores={[]} />
      )}
    </>
  );
};

export default StoreInfo;