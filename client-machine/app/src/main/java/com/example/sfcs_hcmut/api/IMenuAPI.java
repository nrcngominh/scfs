package com.example.sfcs_hcmut.api;

import retrofit2.Call;
import retrofit2.http.GET;

public interface IMenuAPI {
    @GET("api/food")
    Call<MenuResponse> getMenu();
}
