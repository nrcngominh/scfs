package com.example.sfcs_hcmut.api;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface IPayQr {
    @POST("api/customer/pay/qr-machine")
    Call<PaymentResponse> payQr(@Body PaymentRequest request);
}

