package com.example.fucc.myapplication.view;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Path;
import android.graphics.RectF;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.util.Log;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.Space;

/**
 * Created by fucc
 * Date: 2019-07-22 11:09
 */
public class MyLoadImage extends android.support.v7.widget.AppCompatImageView {

    public int maxSize = 0;
    private float mRadius = 18;
    private Path mClipPath = new Path();
    private RectF mRect = new RectF();

    public MyLoadImage(Context context) {
        super(context);
    }

    public MyLoadImage(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public MyLoadImage(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        int size = MeasureSpec.getSize(widthMeasureSpec);
        Log.e("aaaaaa", "onMeasure: "+size );
        if (maxSize < size) {
            maxSize = size;
        }
    }

    @Override
    protected void onDraw(Canvas canvas) {
        mRect.set(0, 0, this.getWidth()/2, this.getHeight());
        mClipPath.reset(); // remember to reset path
        mClipPath.addRoundRect(mRect, mRadius, mRadius, Path.Direction.CW);
        canvas.clipPath(mClipPath);
        super.onDraw(canvas);
    }
}
