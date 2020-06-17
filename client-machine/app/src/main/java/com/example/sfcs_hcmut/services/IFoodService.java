package com.example.sfcs_hcmut.services;

import com.example.sfcs_hcmut.models.Food;

import java.io.IOException;
import java.util.ArrayList;

public interface IFoodService {
    void fetchFoodList() throws IOException;
    ArrayList<Food> getMenu();
}
