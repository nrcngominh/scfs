package com.example.sfcs_hcmut.services;

import android.graphics.Bitmap;

import com.google.zxing.WriterException;

public interface IQrService {
    Bitmap getBitmap(String content) throws WriterException;
}
