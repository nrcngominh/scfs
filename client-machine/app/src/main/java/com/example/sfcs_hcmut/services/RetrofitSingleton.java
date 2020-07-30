package com.example.sfcs_hcmut.services;

import com.example.sfcs_hcmut.common.Config;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitSingleton {
    private static class SingletonHolder {
        public static RetrofitSingleton instance = new RetrofitSingleton();
    }

    private Retrofit retrofit;
    private RetrofitSingleton() {
        retrofit = new Retrofit.Builder()
                .baseUrl(Config.SERVER_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
    }
    public static RetrofitSingleton getInstance() {
        return SingletonHolder.instance;
    }
    public Retrofit getClient () {
        return retrofit;
    }
}
