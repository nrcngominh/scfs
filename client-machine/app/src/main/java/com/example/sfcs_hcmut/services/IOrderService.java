package com.example.sfcs_hcmut.services;

import com.example.sfcs_hcmut.models.CartItem;
import com.example.sfcs_hcmut.models.Food;

import java.util.ArrayList;

public interface IOrderService {
    ArrayList<CartItem> getItems();

    int getTotalMoney();

    CartItem getSelectedItem();

    void setSelectedItemIndex(int position);

    void addItemToCart(Food food);

    void increaseQuantityOfSelectedItem();

    void decreaseQuantityOfSelectedItem();

    void removeSelectedItem();

    void newOrder();
}
