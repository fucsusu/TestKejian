package com.example.fucc.myapplication.view;

import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;

import com.tencent.smtt.sdk.WebView;

import java.util.Map;

/**
 * Created by fucc
 * Date: 2019-07-30 20:36
 */
public class MyWebView extends WebView {
    public MyWebView(Context context) {
        super(context);
    }

    public MyWebView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
    }

    public MyWebView(Context context, AttributeSet attributeSet, int i) {
        super(context, attributeSet, i);
    }

    public MyWebView(Context context, AttributeSet attributeSet, int i, boolean b) {
        super(context, attributeSet, i, b);
    }

    public MyWebView(Context context, AttributeSet attributeSet, int i, Map<String, Object> map, boolean b) {
        super(context, attributeSet, i, map, b);
    }

    @Override
    public void addView(View view) {
        super.addView(view);
        Log.e("aaaaaaaaa", "addView: " + view.getClass().getName());
    }

    @Override
    public void addView(View child, int index) {
        super.addView(child, index);
        Log.e("aaaaaaaaa", "addView: " + child.getClass().getName());

    }

    @Override
    public void addView(View child, int width, int height) {
        super.addView(child, width, height);
        Log.e("aaaaaaaaa", "addView: " + child.getClass().getName());
    }

    @Override
    public void addView(View child, ViewGroup.LayoutParams params) {
        super.addView(child, params);
        Log.e("aaaaaaaaa", "addView: " + child.getClass().getName());
    }

    @Override
    public void addView(View child, int index, ViewGroup.LayoutParams params) {
        super.addView(child, index, params);
        Log.e("aaaaaaaaa", "addView: " + child.getClass().getName());
    }

    @Override
    protected boolean addViewInLayout(View child, int index, ViewGroup.LayoutParams params) {
        Log.e("aaaaaaaaa", "addView: " + child.getClass().getName());
        return super.addViewInLayout(child, index, params);
    }

    @Override
    protected boolean addViewInLayout(View child, int index, ViewGroup.LayoutParams params, boolean preventRequestLayout) {
        Log.e("aaaaaaaaa", "addView: " + child.getClass().getName());
        return super.addViewInLayout(child, index, params, preventRequestLayout);
    }
}
