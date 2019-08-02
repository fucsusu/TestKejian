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
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.EditText;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.example.fucc.myapplication.R;
import com.example.fucc.myapplication.utils.AppUtils;
import com.example.fucc.myapplication.utils.CoursewareDownLoadUtil;
import com.example.fucc.myapplication.utils.DelectFileUtil;


import java.io.File;

public class TestActivity extends AppCompatActivity {

    public WebView webView;
    private int kejianID = 1;
    private int pagenum = 0;
    public TextView kejianmsg;
    public View load;
    public EditText editText;
    public WebSettings webSettings;
    private RelativeLayout rootview;

    @SuppressLint("NewApi")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN |
                WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        AppUtils.hideVirtualKeyView(this);
        setContentView(R.layout.activity_test);

        webView = findViewById(R.id.webview);
        kejianmsg = findViewById(R.id.kejian_message);
        editText = findViewById(R.id.class_pptid);
        load = findViewById(R.id.load_btn);
        rootview = findViewById(R.id.class_root);
        initWebView();
        // webView.loadUrl("file:///android_asset/LessonTest/index.html");

        //webView.loadUrl("file:///mnt/sdcard/Android/data/com.example.fucc.myapplication/files/Lesson1/preview.html");
        webView.loadUrl(getFileUrl());

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
    @SuppressLint({"NewApi", "JavascriptInterface"})
    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN)
    private void initWebView() {
        //加上下面这段代码可以使网页中的链接不以浏览器的方式打开
        webView.setWebViewClient(new WebViewClient());

        webView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);//滚动条风格，为0指滚动条不占用空间，直接覆盖在网页上
        //得到webview设置
        webSettings = webView.getSettings();
        //允许使用javascript
        webSettings.setJavaScriptEnabled(true);
        //设置加载网页时暂不加载图片
        webSettings.setBlockNetworkImage(false);
        //设置webview推荐使用的窗口，使html界面自适应屏幕
        webSettings.setUseWideViewPort(true);
        //缩放至屏幕的大小
        webSettings.setLoadWithOverviewMode(true);
        webSettings.setAllowFileAccessFromFileURLs(true);
        webSettings.setAllowUniversalAccessFromFileURLs(true);
        //设置可以访问文件加载本地html
        webSettings.setAllowFileAccess(true);
        //设置支持缩放
        webSettings.setSupportZoom(true);
        //设置图片加载
        webSettings.setLoadsImagesAutomatically(true);
        //设置是否需要手势去播放视频
        webSettings.setMediaPlaybackRequiresUserGesture(true);
        webSettings.setJavaScriptCanOpenWindowsAutomatically(true);
        webSettings.setPluginState(WebSettings.PluginState.ON);
        webSettings.setDomStorageEnabled(true);// 必须保留，否则无法播放优酷视频，其他的OK
        //设置不缓存
        webSettings.setAppCacheEnabled(false);
        webSettings.setCacheMode(WebSettings.LOAD_NO_CACHE);
        //设置渲染优先级
        webSettings.setRenderPriority(WebSettings.RenderPriority.HIGH);

        webSettings.setDefaultTextEncodingName("utf-8");//设置编码格式

        webView.addJavascriptInterface(this, "androidApi");

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            webView.setLayerType(View.LAYER_TYPE_HARDWARE, null);
        } else {
            webView.setLayerType(View.LAYER_TYPE_SOFTWARE, null);
        }

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                load.setVisibility(View.GONE);
            }
        });


        webView.setWebChromeClient(new WebChromeClient() {
            /**
             * 显示自定义视图，无此方法视频不能播放
             */
            @Override
            public void onShowCustomView(View view, CustomViewCallback callback) {
                super.onShowCustomView(view, callback);
            }
        });
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) {
            AppUtils.fullScreenImmersive(getWindow());
        }
    }
}
