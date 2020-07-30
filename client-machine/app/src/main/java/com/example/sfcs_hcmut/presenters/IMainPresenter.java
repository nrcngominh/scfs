package com.example.sfcs_hcmut.presenters;

import com.example.sfcs_hcmut.models.Food;
import com.example.sfcs_hcmut.views.IMainView;

public interface IMainPresenter {
    void setView(IMainView view);
    void addFoodToCart(int index);

    void getMenuFoods();

    void checkout();

    void selectItemInCart(int position);

    void increaseQuantityOfSelectedItem();

    void decreaseQuantityOfSelectedItem();

    void removeSelectedItem();

    void newOrder();
    void cancelOrder();
}
