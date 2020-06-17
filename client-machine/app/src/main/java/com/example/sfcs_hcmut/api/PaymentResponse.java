package com.example.sfcs_hcmut.api;

public class PaymentResponse {
    public String getMomoQrCode() {
        return momoQrCode;
    }

    public void setMomoQrCode(String momoQrCode) {
        this.momoQrCode = momoQrCode;
    }

    private String momoQrCode;
}
