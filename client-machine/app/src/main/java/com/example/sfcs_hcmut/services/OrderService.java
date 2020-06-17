package com.example.sfcs_hcmut.services;

import com.example.sfcs_hcmut.models.CartItem;
import com.example.sfcs_hcmut.models.Food;

import java.util.ArrayList;

import javax.inject.Inject;

public class OrderService implements IOrderService {
    @Inject
    public OrderService() {
    }

    public ArrayList<CartItem> getItems() {
        return items;
    }

    private int selectedItemIndex = -1;



    @Override
    public void setSelectedItemIndex(int position) {
        selectedItemIndex = position;
    }

    @Override
    public int getTotalMoney() {
        int sum = 0;
        for (CartItem item : items) {
            sum += item.getMoney();
        }
        return sum;
    }

    @Override
    public CartItem getSelectedItem() {
        if (selectedItemIndex >= 0 && selectedItemIndex < items.size()) {
            return items.get(selectedItemIndex);
        }
        return null;
    }

    @Override
    public void increaseQuantityOfSelectedItem() {
        if (selectedItemIndex == -1) {
            return;
        }
        CartItem current = items.get(selectedItemIndex);
        current.setQuantity(current.getQuantity() + 1);
    }

    @Override
    public void decreaseQuantityOfSelectedItem() {
        if (selectedItemIndex == -1) {
            return;
        }
        CartItem current = items.get(selectedItemIndex);
        int quantity = current.getQuantity();
        if (quantity > 1) {
            current.setQuantity(quantity - 1);
        }
    }

    @Override
    public void removeSelectedItem() {
        if (selectedItemIndex == -1) {
            return;
        }
        items.remove(selectedItemIndex);
        if (selectedItemIndex == items.size()) {
            selectedItemIndex--;
        }
    }

    @Override
    public void newOrder() {
        selectedItemIndex = -1;
        items.clear();
    }

    static ArrayList<CartItem> items = new ArrayList<>();

    @Override
    public void addItemToCart(Food food) {
        boolean exists = false;
        synchronized (items) {
            CartItem addedItem = null;
            for (CartItem item : items) {
                if (item.food.getId() == food.getId()) {
                    exists = true;
                    addedItem = item;
                    item.setQuantity(item.getQuantity() + 1);
                }
            }
            if (!exists) {
                addedItem = new CartItem(food);
                items.add(addedItem);
            }
            selectedItemIndex = items.indexOf(addedItem);
        }
    }
}
