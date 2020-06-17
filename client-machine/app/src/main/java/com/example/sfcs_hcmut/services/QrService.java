package com.example.sfcs_hcmut.services;

import android.graphics.Bitmap;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.journeyapps.barcodescanner.BarcodeEncoder;

import javax.inject.Inject;

public class QrService implements IQrService {
    private BarcodeEncoder barcodeEncoder;

    @Inject
    public QrService() {
        barcodeEncoder = new BarcodeEncoder();
    }

    @Override
    public Bitmap getBitmap(String content) throws WriterException {
        return barcodeEncoder.encodeBitmap(content, BarcodeFormat.QR_CODE, 300, 300);
    }
}
