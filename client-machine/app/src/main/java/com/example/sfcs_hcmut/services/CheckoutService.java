package com.example.sfcs_hcmut.services;

import android.util.Log;

import com.example.sfcs_hcmut.api.PaymentRequest;
import com.example.sfcs_hcmut.api.PaymentResponse;
import com.example.sfcs_hcmut.common.enums.CheckoutStatus;
import com.github.nkzawa.emitter.Emitter;
import com.github.nkzawa.socketio.client.Socket;
import com.google.gson.Gson;

import org.json.JSONObject;

import javax.inject.Inject;

public class CheckoutService implements ICheckoutService {

    @Inject
    public CheckoutService() {
    }

    private CheckoutStatus status = CheckoutStatus.NEW;

    @Override
    public String sendOrder(int amount) {
        status = CheckoutStatus.PENDING;
        Socket socket = SocketSingleton.getInstance().getSocket();
        final Gson gson = new Gson();
        socket.on("send_bill", new Emitter.Listener() {
            @Override
            public void call(Object... args) {
                JSONObject obj = (JSONObject)args[0];
                final PaymentResponse response = gson.fromJson(String.valueOf(obj), PaymentResponse.class);
                Log.i("JSON", response.getMomoQrCode());
            }
        });
        socket.emit("send_order", gson.toJson(new PaymentRequest(Integer.toString(amount))));
        return "https://test-payment.momo.vn/pay/store/MOMOIQA420180417-storeid01?a=10000&b=B001221&s=601a7280711dd72bfae8c365801f5e257311a1ebd8779cf3bc4ac57c4002a978";
    }

    @Override
    public void waitForPaymentSuccess(final Runnable runable) {
        Socket socket = SocketSingleton.getInstance().getSocket();
        final Gson gson = new Gson();
        socket.on("payment_success", new Emitter.Listener() {
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
