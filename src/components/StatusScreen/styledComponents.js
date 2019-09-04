import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { screenWidth } from '../../utils/deviceSize';

const MARGIN_TOP = Platform.OS === 'ios' ? 5 : 6;

export const StatusView = styled.View`
  align-items: center;
  margin-bottom: 24px;
  top: ${MARGIN_TOP}%;
`;

export const IconView = styled(LinearGradient)`
  height: 188px;
  width: 188px;
  border-radius: 95px;
  border-width: 10px;
  border-color: #ffffff;
  margin-top: 28px;
  align-items: center;
  justify-content: center;
  elevation: 5;
`;

export const ParagraphView = styled.View`
  margin-top: 48px;
  margin-bottom: 24px;
  align-items: center;
  height: 130px;
  justify-content: space-between;
`;

export const ResultsText = styled.Text`
  color: #393c50;
  font-weight: 600;
  font-size: 34px;
  text-align: center;
  line-height: 46px;
  letter-spacing: 1.16px;
`;

export const MessageOneText = styled.Text`
  color: #393c50;
  font-size: 22px;
`;

export const MessageTwoText = styled.Text`
  color: #45cd65;
  font-weight: 400;
  font-size: 22px;
  font-weight: bold;
  padding-top: 16px;
`;

export const ItemView = styled.View`
  flex-direction: row;
  align-items: center;
  height: 91;
  width: ${screenWidth * 0.9};
  padding: 20px;
  margin-top: 19px;
  margin-bottom: 19px;
  border-radius: 13px;
  background-color: #fafbfc;
  shadow-color: #d5d9e6;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.5;
  shadow-radius: 13;
  elevation: 1;
`;

export const ItemTextView = styled.View`
  margin-left: 100px;
  position: absolute;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #393c50;
`;

export const ItemMessage = styled.Text`
  font-size: 14;
  color: #393c50;
  margin-top: 16px;
`;

export const FaceHeight = 95;
export const FaceWidth = 95;
