package com.example.sfcs_hcmut.services;

import android.util.Log;

import com.example.sfcs_hcmut.api.FoodResponse;
import com.example.sfcs_hcmut.api.IMenuAPI;
import com.example.sfcs_hcmut.api.IPayQr;
import com.example.sfcs_hcmut.api.PaymentRequest;
import com.example.sfcs_hcmut.api.PaymentResponse;
import com.example.sfcs_hcmut.common.enums.CheckoutStatus;
import com.example.sfcs_hcmut.models.CartItem;
import com.example.sfcs_hcmut.models.Food;
import com.github.nkzawa.emitter.Emitter;
import com.github.nkzawa.socketio.client.Socket;
import com.google.gson.Gson;

import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;

import javax.inject.Inject;

import retrofit2.Retrofit;

public class CheckoutService implements ICheckoutService {

    @Inject
    public CheckoutService() {
    }

    private CheckoutStatus status = CheckoutStatus.NEW;

    @Override
    public String sendOrder(ArrayList<CartItem> carts) throws IOException {
        status = CheckoutStatus.PENDING;
        Socket socket = SocketSingleton.getInstance().getSocket();
        final Gson gson = new Gson();
        socket.on("send_bill", new Emitter.Listener() {
            @Override
            public void call(Object... args) {
                JSONObject obj = (JSONObject)args[0];
                final PaymentResponse response = gson.fromJson(String.valueOf(obj), PaymentResponse.class);
                Log.i("JSON", response.getQrCode());
            }
        });
        Retrofit retrofit = RetrofitSingleton.getInstance().getClient();
        PaymentRequest req = new PaymentRequest();
        for (CartItem cartItem : carts) {
            PaymentRequest.CartItem cartJson = new PaymentRequest.CartItem();
            cartJson.getFood().setId(cartItem.getFood().getId());
            cartJson.setQuantity(cartItem.getQuantity());
            req.getCart().add(cartJson);
        }
        PaymentResponse res = retrofit.create(IPayQr.class).payQr(req).execute().body();
        return res.getQrCode();
    }

    @Override
    public void waitForPaymentSuccess(final Runnable runable) {
        Socket socket = SocketSingleton.getInstance().getSocket();
        final Gson gson = new Gson();
        socket.on("MOMO", new Emitter.Listener() {
            @Override
            public void call(Object... args) {
                if (status == CheckoutStatus.PENDING) {
                    status = CheckoutStatus.DONE;
                    runable.run();
                }
            }
        });
    }

    @Override
    public void newOrder() {
        status = CheckoutStatus.NEW;
    }

    @Override
    public CheckoutStatus getCheckoutStatus() {
        return status;
    }
}
