package com.example.sfcs_hcmut.services;

import com.example.sfcs_hcmut.common.Config;
import com.example.sfcs_hcmut.models.Food;
import com.example.sfcs_hcmut.api.IMenuAPI;
import com.example.sfcs_hcmut.api.FoodResponse;

import java.io.IOException;
import java.util.ArrayList;

import javax.inject.Inject;

import retrofit2.Retrofit;

public class FoodService implements IFoodService {

    private ArrayList<Food> foods;
    private boolean firstTime = true;

    @Inject
    public FoodService() {
        foods = new ArrayList<>();
    }

    @Override
    public void fetchFoodList() throws IOException {
        if (firstTime) {
            Retrofit retrofit = RetrofitSingleton.getInstance().getClient();
            ArrayList<FoodResponse> res = retrofit.create(IMenuAPI.class).getMenu()
                    .execute().body();
            firstTime = false;
            foods = new ArrayList<>();
            for (FoodResponse foodRes : res) {
                foods.add(new Food(foodRes.getId(), foodRes.getName(),
                        foodRes.getPrice(), foodRes.getImgUrl()));
            }
        }
    }

    @Override
    public ArrayList<Food> getMenu() {
        return foods;
    }
}
