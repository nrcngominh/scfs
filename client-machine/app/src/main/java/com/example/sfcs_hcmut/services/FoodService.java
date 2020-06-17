package com.example.sfcs_hcmut.services;

import com.example.sfcs_hcmut.models.Food;
import com.example.sfcs_hcmut.api.IMenuAPI;
import com.example.sfcs_hcmut.api.MenuResponse;

import java.io.IOException;
import java.util.ArrayList;

import javax.inject.Inject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
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
            ArrayList<MenuResponse.FoodResponse> res = retrofit.create(IMenuAPI.class).getMenu()
                    .execute().body().getFoods();
            firstTime = false;
            foods = new ArrayList<>();
            for (MenuResponse.FoodResponse foodRes : res) {
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
