import {useRoute} from '@react-navigation/native';
import React from 'react';
import {AppTransparentModalRouteProp} from 'utils/types';
import {ImagePickerModal} from './imagePicker.modal';

export const AppTransparentModal = () => {
  const {params} = useRoute<AppTransparentModalRouteProp>();
  const {type} = params;

  switch (type) {
    case 'ImagePicker': {
      return <ImagePickerModal />;
    }
    default:
      return null;
  }
};
