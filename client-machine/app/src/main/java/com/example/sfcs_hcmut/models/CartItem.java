package com.example.sfcs_hcmut.models;

public class CartItem {
    public Food food;

    public CartItem(Food food) {
        this.food = food;
        this.quantity = 1;
    }

    public int quantity;

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getMoney() {
        return food.getPrice() * quantity;
    }

    public Food getFood() {
        return food;
    }

    public void setFood(Food food) {
        this.food = food;
    }

    public int getQuantity() {
        return quantity;
    }

}
