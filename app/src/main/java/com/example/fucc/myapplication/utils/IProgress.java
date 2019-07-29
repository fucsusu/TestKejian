package com.example.fucc.myapplication.utils;

/**
 * Created by fucc
 * Date: 2019-07-22 15:37
 * 文件解压
 */
public interface IProgress {
    void onProgress(int progress);

    void onError(String msg);

    void onDone();
}