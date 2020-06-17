package com.example.sfcs_hcmut.api;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;

public class MenuResponse {
    private ArrayList<FoodResponse> foods;

    public ArrayList<FoodResponse> getFoods() {
        return foods;
    }

    public void setFoods(ArrayList<FoodResponse> foods) {
        this.foods = foods;
    }

    public class FoodResponse {
        private String name;
        private int price;
        @SerializedName("_id")
        private String id;
        @SerializedName("img")
        private String imgUrl;

        public String getImgUrl() {
            return imgUrl;
        }

        public void setImgUrl(String imgUrl) {
            this.imgUrl = imgUrl;
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getPrice() {
            return price;
        }

        public void setPrice(int price) {
            this.price = price;
        }
    }
}
