package com.example.sfcs_hcmut.api;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;

public class PaymentRequest {
    public ArrayList<CartItem> getCart() {
        return cart;
    }

    public void setCart(ArrayList<CartItem> cart) {
        this.cart = cart;
    }

    private ArrayList<CartItem> cart;


    public PaymentRequest() {
        cart = new ArrayList<CartItem>();
    }

    public static class CartItem {
        public CartItem() {
            this.food = new FoodItem();
        }

        private FoodItem food;
        private int quantity;

        public int getQuantity() {
            return quantity;
        }

        public void setQuantity(int quantity) {
            this.quantity = quantity;
        }

        public FoodItem getFood() {
            return food;
        }

        public void setFood(FoodItem food) {
            this.food = food;
        }

        public static class FoodItem {
            public String getId() {
                return id;
            }
            public void setId(String id) {
                this.id = id;
            }

            @SerializedName("_id")
            private String id;
        }
    }
}
