package com.example.fucc.myapplication;

import android.app.Application;
import android.util.Log;

import com.tencent.smtt.sdk.QbSdk;

/**
 * Created by fucc
 * Date: 2019-07-18 11:56
 */
public class MyApp extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
//        //非wifi情况下，主动下载x5内核
//        QbSdk.setDownloadWithoutWifi(true);
//        //搜集本地tbs内核信息并上报服务器，服务器返回结果决定使用哪个内核。
//        QbSdk.PreInitCallback cb = new QbSdk.PreInitCallback() {
//            @Override
//            public void onViewInitFinished(boolean arg0) {
//                //x5內核初始化完成的回调，为true表示x5内核加载成功，否则表示x5内核加载失败，会自动切换到系统内核。
//                Log.e("TAG", "onViewInitFinished: "+arg0 );
//            }
//
//            @Override
//            public void onCoreInitFinished() {
//
//            }
//        };
//        //x5内核初始化接口
//        QbSdk.initX5Environment(getApplicationContext(), cb);
    }
}
