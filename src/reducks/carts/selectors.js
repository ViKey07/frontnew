import { createSelector } from "reselect";

const cartsSelector = (state) => state.carts;
const sizeSelector = (state) => state.size;

export const getCarts = createSelector([cartsSelector, sizeSelector], (state) => state.list);

export const getSubtotal = createSelector(
  [cartsSelector],
  (state) => state.subtotal
);
