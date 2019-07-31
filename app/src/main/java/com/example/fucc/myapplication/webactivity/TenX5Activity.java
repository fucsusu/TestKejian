package com.example.fucc.myapplication.webactivity;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.view.WindowManager;
import android.widget.TextView;
import android.widget.Toast;

import com.example.fucc.myapplication.R;
import com.tencent.smtt.sdk.ValueCallback;
import com.tencent.smtt.sdk.WebChromeClient;
import com.tencent.smtt.sdk.WebSettings;
import com.tencent.smtt.sdk.WebView;

public class TenX5Activity extends AppCompatActivity {

    public WebView tenX5;
    private int kejianID = 1;
    private int pagenum = 1;
    public TextView kejianmsg;
    public View load;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN |
                WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        setContentView(R.layout.activity_ten_x5);
        tenX5 = findViewById(R.id.tenx5_webview);

        kejianmsg = findViewById(R.id.kejian_message);
        load = findViewById(R.id.load_btn);

        initWebView();
       // tenX5.loadUrl("file:///android_asset/Lesson1/preview.html");
        tenX5.loadUrl("file:///android_asset/LessonTest/index.html");

        // tenX5.loadUrl("file://mnt/sdcard/Android/data/com.example.fucc.myapplication/files/2/2.html");

        //tenX5.loadUrl(getFileUrl());
        showPage();
    }

    //跳转页数
    @SuppressLint("NewApi")
    private void toPage(int page) {
        tenX5.evaluateJavascript("javascript:ToPage(" + page + ")", new ValueCallback<String>() {
            @Override
            public void onReceiveValue(String s) {

            }
        });
    }

    private String getFileUrl() {
        return "http://coursefiles.oss-cn-beijing.aliyuncs.com/Hgogotalk/Courseware/L1/Lesson" + kejianID + "/preview.html";
    }


    public void btnClick(View view) {
        switch (view.getId()) {
            case R.id.class_change:
                kejianID++;
                pagenum = 1;
                load.setVisibility(View.VISIBLE);
                tenX5.loadUrl(getFileUrl());
                break;
            case R.id.class_next:
                pagenum++;
                toPage(pagenum);
                break;
            case R.id.class_before:
                pagenum--;
                if (pagenum < 1)
                    pagenum = 1;
                toPage(pagenum);
                break;
            case R.id.class_rest:
                kejianID = 1;
                pagenum = 1;
                tenX5.loadUrl(getFileUrl());
                break;
            case R.id.load_btn:
                Toast.makeText(this, "加载中。。。。", Toast.LENGTH_SHORT).show();
                break;
        }
        showPage();
    }

    private void showPage() {
        kejianmsg.setText("课件编号：" + kejianID + "\n课件页码：" + pagenum);
    }


    private void initWebView() {
        WebSettings settings = tenX5.getSettings();
        settings.setSupportZoom(false); //支持缩放，默认为true。是下面那个的前提。
        settings.setBuiltInZoomControls(false); //设置内置的缩放控件。若为false，则该WebView不可缩放
        settings.setDisplayZoomControls(false); //隐藏原生的缩放控件
        settings.setBlockNetworkImage(false);//解决图片不显示
        settings.setLoadsImagesAutomatically(true); //支持自动加载图片
        settings.setDefaultTextEncodingName("utf-8");//设置编码格式
        settings.setUseWideViewPort(true);
        settings.setLoadWithOverviewMode(true);
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setAllowUniversalAccessFromFileURLs(true);
        settings.setAllowFileAccess(true);
        settings.setSupportZoom(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setJavaScriptCanOpenWindowsAutomatically(true);

        settings.setDomStorageEnabled(true);// 必须保留，否则无法播放优酷视频，其他的OK
        //监听网页的加载进度
        tenX5.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                if (newProgress == 100) {
                    load.setVisibility(View.GONE);
                }
            }
        });
    }

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    public void onResume() {
        super.onResume();
        tenX5.onResume();
        tenX5.getSettings().setJavaScriptEnabled(true);
    }

    @Override
    public void onPause() {
        super.onPause();
        tenX5.onPause();
        tenX5.getSettings().setLightTouchEnabled(false);
    }

    //销毁 放置内存泄漏
    @Override
    public void onDestroy() {
        if (this.tenX5 != null) {
            tenX5.destroy();
        }
        super.onDestroy();
    }
}
