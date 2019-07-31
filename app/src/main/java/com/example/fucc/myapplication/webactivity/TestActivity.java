package com.example.fucc.myapplication.webactivity;

import android.annotation.SuppressLint;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.support.annotation.RequiresApi;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.view.WindowManager;
import android.widget.EditText;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.example.fucc.myapplication.R;
import com.example.fucc.myapplication.utils.CoursewareDownLoadUtil;
import com.example.fucc.myapplication.utils.DelectFileUtil;
import com.example.fucc.myapplication.view.MyWebView;
import com.tencent.smtt.export.external.interfaces.IX5WebChromeClient;
import com.tencent.smtt.sdk.ValueCallback;
import com.tencent.smtt.sdk.WebChromeClient;
import com.tencent.smtt.sdk.WebSettings;
import com.tencent.smtt.sdk.WebView;
import com.tencent.smtt.sdk.WebViewClient;

import java.io.File;

public class TestActivity extends AppCompatActivity {

    public MyWebView webView;
    private int kejianID = 1;
    private int pagenum = 0;
    public TextView kejianmsg;
    public View load;
    public EditText editText;
    private RelativeLayout rootview;

    @SuppressLint("NewApi")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN |
                WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        setContentView(R.layout.activity_test);

        webView = findViewById(R.id.webview);
        kejianmsg = findViewById(R.id.kejian_message);
        editText = findViewById(R.id.class_pptid);
        load = findViewById(R.id.load_btn);
        rootview = findViewById(R.id.class_root);
        initWebView();
        webView.loadUrl("file:///android_asset/LessonTest/index.html");

        //webView.loadUrl("file:///mnt/sdcard/Android/data/com.example.fucc.myapplication/files/Lesson1/preview.html");
        //webView.loadUrl(getFileUrl());

        //webView.loadUrl("http://h.gogo-talk.com/2.html");
        showPage();
    }

    //跳转页数
    @SuppressLint("NewApi")
    private void toPage(int page) {
        webView.evaluateJavascript("javascript:ToPage(" + page + ")", new ValueCallback<String>() {
            @Override
            public void onReceiveValue(String value) {
                Log.i("TAG", value);
            }
        });
    }

    private String getFileUrl() {
        return "http://coursefiles.oss-cn-beijing.aliyuncs.com/Hgogotalk/Courseware/L1/Lesson" + kejianID + "/preview.html";
    }


    @SuppressLint("NewApi")
    public void btnClick(View view) {
        switch (view.getId()) {
            case R.id.class_change:
                int i = Integer.parseInt(editText.getText().toString());
                if (kejianID == i) {
                    kejianID++;
                    editText.setText(kejianID + "");
                } else {
                    kejianID = i;
                }
                pagenum = 0;
                load.setVisibility(View.VISIBLE);
                webView.loadUrl(getFileUrl());
                break;
            case R.id.class_next:
                pagenum++;
                toPage(pagenum);
                break;
            case R.id.class_before:
                pagenum--;
                if (pagenum < 0)
                    pagenum = 0;
                toPage(pagenum);
                break;
            case R.id.load_btn:
                Toast.makeText(this, "加载中。。。。", Toast.LENGTH_SHORT).show();
                break;
            case R.id.class_answer:
                webView.evaluateJavascript("javascript:exec()", new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String value) {
                        Log.i("TAG", value);
                    }
                });
                break;
            case R.id.class_loacal:
                kejianID = Integer.parseInt(editText.getText().toString());
                pagenum = 0;
                CoursewareDownLoadUtil.getCoursewareUtil().downloadCourseware(TestActivity.this,
                        "http://coursefiles.oss-cn-beijing.aliyuncs.com/Hgogotalk/CourseZip/L1/L1Lesson" + kejianID + ".zip", rootview, "aasbbbaaacc" + kejianID, new CoursewareDownLoadUtil.CoursewareDownFinsh() {
                            @Override
                            public void finsh(String filePath) {
                                Log.e("TAG", "finsh: " + filePath);
                                if (!TextUtils.isEmpty(filePath)) {
                                    webView.loadUrl("file://" + filePath + File.separator + "preview.html");
                                } else {
                                    Toast.makeText(TestActivity.this, "下载失败", Toast.LENGTH_SHORT).show();
                                }
                                showPage();
                            }
                        });
                break;
            case R.id.class_clean:
                File[] files = new File(getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS).getAbsolutePath()).listFiles();
                for (int j = 0; j < files.length; j++) {
                    DelectFileUtil.DeleteFolder(files[j]);
                }
                break;
        }
        showPage();
    }


    private void showPage() {
        kejianmsg.setText("课件编号：" + kejianID + "\n课件页码：" + pagenum);
    }


    /**
     * 加载webview
     */
    @SuppressLint("NewApi")
    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN)
    private void initWebView() {
        //加载assets目录下的html
        //加上下面这段代码可以使网页中的链接不以浏览器的方式打开
        webView.setWebViewClient(new WebViewClient());
        webView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);//滚动条风格，为0指滚动条不占用空间，直接覆盖在网页上
        //得到webview设置
        WebSettings webSettings = webView.getSettings();
        //允许使用javascript
        webSettings.setJavaScriptEnabled(true);
        webSettings.setUseWideViewPort(true);
        webSettings.setLoadWithOverviewMode(true);
        webSettings.setAllowFileAccessFromFileURLs(true);
        webSettings.setAllowUniversalAccessFromFileURLs(true);
        webSettings.setAllowFileAccess(true);
        webSettings.setSupportZoom(true);
        webSettings.setMediaPlaybackRequiresUserGesture(false);
        webSettings.setJavaScriptCanOpenWindowsAutomatically(true);
        webSettings.setPluginState(WebSettings.PluginState.ON);
        webSettings.setDomStorageEnabled(true);// 必须保留，否则无法播放优酷视频，其他的OK

        webView.setWebViewClient(new WebViewClient() {
            /**
             * 当前网页的链接仍在webView中跳转
             */
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                view.loadUrl(url);
                return true;
            }


            /**
             * 页面载入完成回调
             */
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                view.loadUrl("javascript:try{autoplay();}catch(e){}");
                load.setVisibility(View.INVISIBLE);
            }

        });


        webView.setWebChromeClient(new WebChromeClient() {
            /**
             * 显示自定义视图，无此方法视频不能播放
             */
            @Override
            public void onShowCustomView(View view, IX5WebChromeClient.CustomViewCallback callback) {
                super.onShowCustomView(view, callback);
            }
        });
    }
}
