/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { removeItemFromCart } from '../../../redux/cartActions';

import { RemoveIcon, BoldTextBis } from './styledComponents';
import {
  CircleView,
  ItemViewBis,
  ItemTextView,
  ItemText,
  ItemMessage,
} from '../../../common/styledComponents';

import { Medicine } from '../../../../assets/Icons';

const CartItemView = ({ item, removeItem }) => (
  <ItemViewBis>
    <CircleView>
      <Medicine />
    </CircleView>
    <ItemTextView>
      <ItemText>{item.itemName}</ItemText>
      <ItemMessage>
        <BoldTextBis>Quantity:</BoldTextBis> {item.quantity}
      </ItemMessage>
    </ItemTextView>
    <TouchableOpacity onPress={() => removeItem(item)}>
      <RemoveIcon />
    </TouchableOpacity>
  </ItemViewBis>
);

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(CartItemView);
