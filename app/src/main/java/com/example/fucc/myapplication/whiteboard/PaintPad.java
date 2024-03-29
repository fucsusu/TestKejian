package com.example.fucc.myapplication.whiteboard;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Region;
import android.graphics.Region.Op;
import android.text.Layout.Alignment;
import android.text.StaticLayout;
import android.text.TextPaint;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;

import com.example.fucc.myapplication.utils.ColorUtils;

import java.util.ArrayList;
import java.util.List;


public class PaintPad extends View {

    //画笔数据
    private TL_PadAction m_tl_CurrentPadAction = null;
    //画笔类型
    private TL_PadAction.factoryType m_nActionMode = null;
    //画笔空心还是实心
    private boolean m_bActionfill;
    //画笔宽度
    private int m_nPenWidth = 10;
    //画笔颜色
    private int m_nPenColor = 0xff5AC9FA;
    //实际画布 至 当前view画布偏移
    private RectF m_rcOriginBK = new RectF();
    //当前view宽
    private int m_nOldWidth = -1;
    //当前view高
    private int m_nOldHeight = -1;
    //显示画布大小
    private RectF m_rcBK = new RectF();
    //文字
    private RectF m_orgRcBK = null;

    private static final int ActionBorder = 15;

    //工具类型
    private ToolsType mToolsType = ToolsType.pen;

    //笔类型
    private ToolsPenType mToolsPenType = ToolsPenType.fountainPen;
    //笔颜色
    private int mToolsPenColor = 0xff5AC9FA;
    //笔宽度
    private int mToolsPenProgress = 10;

    //文字颜色颜色
    private int mToolsFontColor = 0xff5AC9FA;
    //文字大小
    private int mToolsFontSize = 30;

    //形状
    private ToolsFormType mToolsFormType = ToolsFormType.hollow_circle;
    //颜色
    private int mToolsFormColor = 0xff5AC9FA;
    //宽度
    private int mToolsFormWidth = 10;
    //橡皮宽高
    private int mToolsEraserWidth = 10;

    //存放画笔数据
    public List<TL_PadAction> padActions = new ArrayList<>();

    public PaintPad(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    {
        setLayerType(View.LAYER_TYPE_SOFTWARE, null);
    }

    @Override
    public void onDraw(Canvas cvs) {
        if (this.isInEditMode()) return;
        if (PaintBk(cvs)) {
            PaintActions(cvs);
        }
    }

    Paint linePaint = new Paint();

    //画板创建
    boolean PaintBk(Canvas cvs) {
        //是顶层绘制 只需要透明绘制层
        linePaint.setColor(Color.TRANSPARENT);
        cvs.drawRect(m_rcBK, linePaint);
        return true;
    }

    /**
     * 绘制图形前数据梳理
     *
     * @param cvs
     */
    void PaintActions(Canvas cvs) {
        //是底层数据只在收到数据重绘
        for (int i = 0; i < padActions.size(); i++) {
            PaintPadAction(padActions.get(i), cvs);
        }

        if (m_tl_CurrentPadAction != null) {
            PaintPadAction(m_tl_CurrentPadAction, cvs);
        }
    }

    /***
     *    绘制图形
     * @param tl_pa
     * @param cvs
     */
    void PaintPadAction(TL_PadAction tl_pa, Canvas cvs) {
        switch (tl_pa.nActionMode) {
            case ft_line: {   //线
                if (UnWhithXYLine(tl_pa) == null) break;
                Paint linePaint = new Paint();
                linePaint.setColor(tl_pa.nPenColor);
                //现在放大为当前控件放大，而不是画布放大（放大镜模式）所以不需要放大后去乘画笔的放大系数
                linePaint.setStrokeWidth(tl_pa.nPenWidth / penWidthRatio()/** dbZoomScale*/);
                linePaint.setStrokeCap(Paint.Cap.ROUND);
                linePaint.setAntiAlias(true);
                PointF ptStart = null, ptstop = null;
                if (tl_pa.alActionPoint.size() == 2) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.alActionPoint.get(1));
                } else if (tl_pa.alActionPoint.size() == 1) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.ptSizingEnd);
                }

                if (ptStart == null || ptstop == null) {
                    break;
                }

                cvs.drawLine(ptStart.x, ptStart.y, ptstop.x, ptstop.y, linePaint);
            }
            break;
            case ft_markerPen: {   //标记
                Paint linePaint = new Paint();
                linePaint.setAntiAlias(true);
                linePaint.setStyle(Paint.Style.STROKE);
                linePaint.setStrokeCap(Paint.Cap.ROUND);
                linePaint.setStrokeJoin(Paint.Join.ROUND);
                linePaint.setColor(tl_pa.nPenColor);
                linePaint.setStrokeWidth(tl_pa.nPenWidth / penWidthRatio());

                //转化成统一高度下的百分比
                tl_pa.alActionPoint.clear();
                for (int i = 0; i < tl_pa.points.size(); i++) {
                    tl_pa.alActionPoint.add(UnWhithXYLinePath(tl_pa.points.get(i)));
                }
                int nSize = tl_pa.alActionPoint.size();
                if (nSize <= 2) {
                    PointF pointF = unRelativePoint(tl_pa.alActionPoint.get(0));
                    cvs.drawPoint(pointF.x, pointF.y, linePaint);
                    break;
                }
                cvs.drawPath(getMarkPenPath(tl_pa), linePaint);
            }
            break;
            case ft_Eraser: {  //橡皮擦
                Paint linePaint = new Paint();
                linePaint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.CLEAR));
                linePaint.setAntiAlias(true);
                linePaint.setStyle(Paint.Style.STROKE);
                linePaint.setStrokeJoin(Paint.Join.ROUND);
                linePaint.setStrokeCap(Paint.Cap.ROUND);
                linePaint.setStrokeWidth(tl_pa.nPenWidth / penWidthRatio() /** dbZoomScale*/);
                tl_pa.alActionPoint.clear();
                for (int i = 0; i < tl_pa.points.size(); i++) {
                    tl_pa.alActionPoint.add(UnWhithXYLinePath(tl_pa.points.get(i)));
                }
                int nSize = tl_pa.alActionPoint.size();
                if (nSize <= 2) {
                    PointF pointF = unRelativePoint(tl_pa.alActionPoint.get(0));
                    cvs.drawPoint(pointF.x, pointF.y, linePaint);
                    break;
                }
                cvs.drawPath(getMarkPenPath(tl_pa), linePaint);
            }
            break;
            case ft_Ellipse: {    //椭圆
                if (UnWhithXYLine(tl_pa) == null) break;
                Paint linePaint = new Paint();
                linePaint.setColor(tl_pa.nPenColor);
                linePaint.setStrokeWidth(tl_pa.nPenWidth / penWidthRatio() /** dbZoomScale*/);
                linePaint.setAntiAlias(true);
                if (!tl_pa.bIsFill) linePaint.setStyle(Paint.Style.STROKE);
                PointF ptStart = null, ptstop = null;
                if (tl_pa.alActionPoint.size() == 2) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.alActionPoint.get(1));
                } else if (tl_pa.alActionPoint.size() == 1) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.ptSizingEnd);
                }

                if (ptStart == null || ptstop == null) {
                    break;
                }

                if (ptStart.x == ptstop.x && ptStart.y == ptstop.y) {
                    linePaint.setStyle(Paint.Style.STROKE);
                    linePaint.setStrokeCap(Paint.Cap.ROUND);
                    cvs.drawPoint(ptStart.x, ptStart.y, linePaint);
                } else {
                    RectF ovalrect = new RectF();
                    ovalrect.left = Math.min(ptStart.x, ptstop.x);
                    ovalrect.top = Math.min(ptStart.y, ptstop.y);
                    ovalrect.right = Math.max(ptStart.x, ptstop.x);
                    ovalrect.bottom = Math.max(ptStart.y, ptstop.y);
                    cvs.drawOval(ovalrect, linePaint);
                    if (tl_pa.bIsFill) {
                        linePaint.setStyle(Paint.Style.STROKE);
                        cvs.drawOval(ovalrect, linePaint);
                    }
                }

                PointF sendPf = new PointF();
                sendPf.x = ptstop.x;
                sendPf.y = ptStart.y;
            }
            break;
            case ft_Rectangle: {   //矩形
                if (UnWhithXYLine(tl_pa) == null) break;
                Paint linePaint = new Paint();
                linePaint.setColor(tl_pa.nPenColor);
                linePaint.setStrokeWidth(tl_pa.nPenWidth / penWidthRatio() /** dbZoomScale*/);
                linePaint.setAntiAlias(true);
                if (!tl_pa.bIsFill) linePaint.setStyle(Paint.Style.STROKE);//

                PointF ptStart = null, ptstop = null;
                if (tl_pa.alActionPoint.size() == 2) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.alActionPoint.get(1));
                } else if (tl_pa.alActionPoint.size() == 1) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.ptSizingEnd);
                }

                if (ptStart == null || ptstop == null) {
                    break;
                }

                RectF ovalrect = new RectF();
                ovalrect.left = Math.min(ptStart.x, ptstop.x);
                ovalrect.top = Math.min(ptStart.y, ptstop.y);
                ovalrect.right = Math.max(ptStart.x, ptstop.x);
                ovalrect.bottom = Math.max(ptStart.y, ptstop.y);
                if (ovalrect.top == ovalrect.bottom || ovalrect.left == ovalrect.right) {
                    cvs.drawLine(ovalrect.left, ovalrect.top, ovalrect.right, ovalrect.bottom, linePaint);
                } else {
                    cvs.drawRect(ovalrect, linePaint);
                }
                if (tl_pa.bIsFill) {
                    linePaint.setStyle(Paint.Style.STROKE);
                    cvs.drawRect(ovalrect, linePaint);
                }

                PointF sendPf = new PointF();
                sendPf.x = ptstop.x;
                sendPf.y = ptStart.y;
            }
            break;
            case ft_Text: {   //文本
                if (UnWhithXYText(tl_pa) == null) break;
                TextPaint textPaint = new TextPaint();
                textPaint.setColor(tl_pa.nPenColor);
                textPaint.setTextSize(tl_pa.nPenWidth / penWidthRatio() /** dbZoomScale*/);
                PointF ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                cvs.save();
                if (ptStart == null) {
                    break;
                }

                StaticLayout layout; //闂佽法鍠愰弸濠氬箯閻戣姤鏅搁柡鍌樺�栫�氾拷
                if (cvs.getWidth() > ptStart.x) {
                    layout = new StaticLayout(tl_pa.sText, textPaint, (int) (cvs.getWidth() - ptStart.x), Alignment.ALIGN_NORMAL, 1.0F, 0.0F, true);
                } else {
                    layout = new StaticLayout(tl_pa.sText, textPaint, cvs.getWidth(), Alignment.ALIGN_NORMAL, 1.0F, 0.0F, true); //闂佽法鍠愰弸濠氬箯閻戣姤鏅搁柡鍌樺�栫�氾拷
                }
                cvs.translate(ptStart.x, ptStart.y);
                layout.draw(cvs);
                cvs.restore();
            }
            break;
            case ft_arrowLine: {   //箭头
                if (UnWhithXYLine(tl_pa) == null) break;

                PointF ptStart = null, ptstop = null;
                if (tl_pa.alActionPoint.size() == 2) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.alActionPoint.get(1));
                } else if (tl_pa.alActionPoint.size() == 1) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.ptSizingEnd);
                }

                if (ptStart == null || ptstop == null) {
                    break;
                }

                getArrowPath(cvs, ptStart, ptstop, tl_pa.nPenColor, tl_pa.nPenWidth);
            }
            break;
            default:
                break;
        }
    }

    /**
     * 计算画笔宽度比值
     */
    private float penWidthRatio() {
        float hight = 960 * 1.0f;
        float width = hight / m_nOldHeight * m_nOldWidth;
        return width / m_rcBK.width();
    }

    /**
     * 转换为当前view绘制区域坐标点 三端统一高度为960 如果是默认16：9 其他以获取宽高为主
     * 钢笔和橡皮擦转换方法
     *
     * @param pointF
     * @return
     */
    private PointF UnWhithXYLinePath(PointF pointF) {
        double hight = 960 * 1.0;
        double width = hight / m_nOldHeight * m_nOldWidth;
        PointF a1 = new PointF();
        a1.x = (float) (pointF.x / width);
        a1.y = (float) (pointF.y / hight);
        return a1;
    }

    /**
     * 除钢笔 橡皮擦 其他画笔转换方法
     *
     * @param tl_pa
     * @return
     */
    private String UnWhithXYLine(TL_PadAction tl_pa) {
        if (tl_pa.points.size() == 0) return null;
        tl_pa.alActionPoint.clear();
        double hight = 960 * 1.0;
        double width = hight / m_nOldHeight * m_nOldWidth;

        PointF ptStart = new PointF(), ptstop = new PointF();
        if (tl_pa.points.size() == 2) {
            ptStart = tl_pa.points.get(0);
            ptstop = tl_pa.points.get(1);
        } else if (tl_pa.points.size() == 1) {
            ptStart = tl_pa.points.get(0);
            if (tl_pa.ptSizingEndPointf == null) {
                return null;
            }
            ptstop = tl_pa.ptSizingEndPointf;
        }

        if (tl_pa.nActionMode == TL_PadAction.factoryType.ft_Rectangle || tl_pa.nActionMode == TL_PadAction.factoryType.ft_Ellipse) {
            PointF a1 = new PointF(), a2 = new PointF();
            a1.x = (float) (ptStart.x / width);
            a1.y = (float) (ptStart.y / hight);

            a2.x = (float) ((ptstop.x + ptStart.x) / width);
            a2.y = (float) ((ptstop.y + ptStart.y) / hight);


            tl_pa.alActionPoint.add(a1);
            tl_pa.alActionPoint.add(a2);
        } else if (tl_pa.nActionMode == TL_PadAction.factoryType.ft_Text) {
            PointF a1 = new PointF();
            a1.x = (float) (ptStart.x / width);
            a1.y = (float) (ptStart.y / hight);

            tl_pa.alActionPoint.add(a1);
        } else {
            PointF a1 = new PointF(), a2 = new PointF();
            a1.x = (float) (ptStart.x / width);
            a1.y = (float) (ptStart.y / hight);

            a2.x = (float) (ptstop.x / width);
            a2.y = (float) (ptstop.y / hight);


            tl_pa.alActionPoint.add(a1);
            tl_pa.alActionPoint.add(a2);
        }
        return "success";
    }

    private String UnWhithXYText(TL_PadAction tl_pa) {
        if (tl_pa.points.size() == 0) return null;
        tl_pa.alActionPoint.clear();
        double hight = 960 * 1.0;
        double width = hight / m_nOldHeight * m_nOldWidth;
        PointF ptStart = new PointF();
        if (tl_pa.points.size() == 1) {
            ptStart = tl_pa.points.get(0);
        }
        if (tl_pa.nActionMode == TL_PadAction.factoryType.ft_Text) {
            PointF a1 = new PointF();
            a1.x = (float) (ptStart.x / width);
            a1.y = (float) (ptStart.y / hight);
            tl_pa.alActionPoint.add(a1);
        }
        return "success";
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        int nAction = event.getAction();
        boolean bhandle = true;
        switch (nAction) {
            case MotionEvent.ACTION_DOWN:
                bhandle = OnTouchDown(event);
                break;
            case MotionEvent.ACTION_UP:
                bhandle = OnTouchUp(event);
                break;
            case MotionEvent.ACTION_MOVE: {
                bhandle = OnTouchMove(event);
                if (bhandle) {
                    getParent().requestDisallowInterceptTouchEvent(true);
                }
                break;
            }
        }
        if (bhandle) {
            getParent().requestDisallowInterceptTouchEvent(true);
            return true;
        }
        return super.onTouchEvent(event);
    }


    public boolean OnTouchDown(MotionEvent event) {

        //无画笔类型
        if (mToolsType == ToolsType.defaule) {
            return true;
        }
        //笔
        else if (mToolsType == ToolsType.pen) {
            if (mToolsPenType == ToolsPenType.fountainPen) {
                m_nActionMode = TL_PadAction.factoryType.ft_markerPen;
                m_bActionfill = true;
            } else if (mToolsPenType == ToolsPenType.nitePen) {
                m_nActionMode = TL_PadAction.factoryType.ft_markerPen;
                m_bActionfill = false;
            } else if (mToolsPenType == ToolsPenType.line) {
                m_nActionMode = TL_PadAction.factoryType.ft_line;
                m_bActionfill = true;
            } else if (mToolsPenType == ToolsPenType.arrows) {
                m_nActionMode = TL_PadAction.factoryType.ft_arrowLine;
                m_bActionfill = true;
            }
            m_nPenWidth = mToolsPenProgress;
            m_nPenColor = mToolsPenColor;
        }
        //形状
        else if (mToolsType == ToolsType.font) {
            m_nActionMode = TL_PadAction.factoryType.ft_Text;
            m_bActionfill = true;
            m_nPenWidth = mToolsFontSize;
            m_nPenColor = mToolsFontColor;
        } else if (mToolsType == ToolsType.form) {
            if (mToolsFormType == ToolsFormType.hollow_rectangle) {
                m_nActionMode = TL_PadAction.factoryType.ft_Rectangle;
                m_bActionfill = false;
            } else if (mToolsFormType == ToolsFormType.solid_rectangle) {
                m_nActionMode = TL_PadAction.factoryType.ft_Rectangle;
                m_bActionfill = true;
            } else if (mToolsFormType == ToolsFormType.hollow_circle) {
                m_nActionMode = TL_PadAction.factoryType.ft_Ellipse;
                m_bActionfill = false;
            } else if (mToolsFormType == ToolsFormType.solid_circle) {
                m_nActionMode = TL_PadAction.factoryType.ft_Ellipse;
                m_bActionfill = true;
            }
            m_nPenWidth = mToolsFormWidth;
            m_nPenColor = mToolsFormColor;
        }
        //橡皮擦
        else if (mToolsType == ToolsType.eraser) {
            m_nActionMode = TL_PadAction.factoryType.ft_Eraser;
            m_bActionfill = true;
            m_nPenWidth = mToolsEraserWidth;
        }

        if (m_nActionMode == null) return true;

        float downX = event.getX();
        float downY = event.getY();
        switch (m_nActionMode) {
            case ft_markerPen:
            case ft_arrowLine:
            case ft_line:
            case ft_Rectangle:
            case ft_Ellipse:
            case ft_Eraser: {
                if (m_tl_CurrentPadAction == null) {
                    m_tl_CurrentPadAction = new TL_PadAction();
                    m_tl_CurrentPadAction.sID = m_tl_CurrentPadAction.hashCode() + "";
                    m_tl_CurrentPadAction.nActionMode = m_nActionMode;

                    //0: default  1: 小白板  2 ： 视频标注
                    m_tl_CurrentPadAction.boardType = 0;
                    //注：现在放大为当前控件放大，而不是画布放大（放大镜模式）所以不需要放大后去乘画笔的放大系数
                    double penwidth = m_nPenWidth * 1.0 * 60 / 100 * penWidthRatio();
                    m_tl_CurrentPadAction.nPenWidth = (int) penwidth;
                    if (m_nActionMode == TL_PadAction.factoryType.ft_markerPen && !m_bActionfill) {
                        Integer[] rgb = ColorUtils.RGB(m_nPenColor);
                        String argb = ColorUtils.toHexArgb(80, rgb[0], rgb[1], rgb[2]);
                        m_tl_CurrentPadAction.nPenColor = Color.parseColor(argb);
                    } else {
                        m_tl_CurrentPadAction.nPenColor = m_nPenColor;
                    }

                    m_tl_CurrentPadAction.bIsFill = m_bActionfill;
                    m_tl_CurrentPadAction.isDraw = true;
                    m_tl_CurrentPadAction.mClear = 0;

                    m_tl_CurrentPadAction.alActionPoint.add(relativePoint(new PointF(downX, downY)));
                    WhithXY(m_tl_CurrentPadAction, relativePoint(new PointF(downX, downY)));
                    if (m_nActionMode == TL_PadAction.factoryType.ft_markerPen || m_nActionMode == TL_PadAction.factoryType.ft_Eraser) {
                        m_tl_CurrentPadAction.LinePath = new Path();
                        m_tl_CurrentPadAction.LinePath.moveTo(downX, downY);
                    }
                }
            }
            break;
            case ft_Text: {
                insertText(downX, downY);
            }
            break;
            default:
                break;
        }
        return true;
    }

    public boolean OnTouchMove(MotionEvent event) {
        if (m_nActionMode == null) return true;

        if (mToolsType != ToolsType.defaule) {
            float moveX = event.getX();
            float moveY = event.getY();
            switch (m_nActionMode) {
                case ft_arrowLine:
                case ft_line:
                case ft_Rectangle:
                case ft_Ellipse: {
                    if (m_tl_CurrentPadAction != null) {
                        m_tl_CurrentPadAction.ptSizingEnd = relativePoint(new PointF(moveX, moveY));
                        WhithXYPointF(m_tl_CurrentPadAction, relativePoint(new PointF(moveX, moveY)));
                        this.invalidate();
                    }
                }
                break;
                case ft_Eraser:
                case ft_markerPen: {
                    if (m_tl_CurrentPadAction != null) {
                        m_tl_CurrentPadAction.alActionPoint.add(relativePoint(new PointF(moveX, moveY)));
                        WhithXY(m_tl_CurrentPadAction, relativePoint(new PointF(moveX, moveY)));
                        this.invalidate();
                    }
                }
                break;
                default:
                    break;

            }
        }
        return true;
    }

    public boolean OnTouchUp(MotionEvent event) {
        if (m_nActionMode == null) return true;
        float upX = event.getX();
        float upY = event.getY();
        switch (m_nActionMode) {
            case ft_markerPen:
            case ft_arrowLine:
            case ft_line:
            case ft_Rectangle:
            case ft_Ellipse:
            case ft_Eraser: {
                if (m_tl_CurrentPadAction != null) {
                    m_tl_CurrentPadAction.alActionPoint.add(relativePoint(new PointF(upX, upY)));
                    WhithXY(m_tl_CurrentPadAction, relativePoint(new PointF(upX, upY)));
                    padActions.add(m_tl_CurrentPadAction);
                    m_tl_CurrentPadAction = null;
                    this.invalidate();
                }
            }
            break;
            default:
                break;
        }
        return true;
    }

    public boolean equalRect(RectF rc1, RectF rc2) {
        if (rc1.left == rc2.left && rc1.top == rc2.top &&
                rc1.right == rc2.right && rc1.bottom == rc2.bottom) {
            return true;
        }
        return false;
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);

    }

    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        super.onSizeChanged(w, h, oldw, oldh);
        m_nOldWidth = w;
        m_nOldHeight = h;
        m_rcBK.left = m_nOldWidth;
        m_rcBK.bottom = m_nOldHeight;
    }

    /**
     * 计算
     *
     * @param tl_pa
     */
    public void calculateActionsRect(TL_PadAction tl_pa) {
        switch (tl_pa.nActionMode) {
            case ft_line: {
                if (UnWhithXYLine(tl_pa) == null) break;
                PointF ptStart = null, ptstop = null;
                if (tl_pa.alActionPoint.size() == 2) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.alActionPoint.get(1));
                    //                    WhithXY(tl_pa,tl_pa.alActionPoint.get(0),tl_pa.alActionPoint.get(1));
                } else if (tl_pa.alActionPoint.size() == 1) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.ptSizingEnd);
                    //                    WhithXY(tl_pa,tl_pa.alActionPoint.get(0),tl_pa.ptSizingEnd);
                }
                if (ptStart == null || ptstop == null) break;

                Path hotPath = new Path();
                getShotlineHotPath(hotPath, ptStart, ptstop);

                tl_pa.HotRegion = new Region();

                Rect rcBK = new Rect((int) m_rcBK.left, (int) m_rcBK.top, (int) m_rcBK.right, (int) m_rcBK.bottom);
                tl_pa.HotRegion.setPath(hotPath, new Region(rcBK));

                tl_pa.CoverArea = tl_pa.HotRegion.getBounds();
            }
            break;
            case ft_markerPen: {
                if (tl_pa.points.size() <= 2) {
                    break;
                }
                tl_pa.alActionPoint.clear();
                for (int i = 0; i < tl_pa.points.size(); i++) {
                    tl_pa.alActionPoint.add(UnWhithXYLinePath(tl_pa.points.get(i)));
                }
                int nSize = tl_pa.alActionPoint.size();
                if (nSize <= 2) {

                    break;
                }
                tl_pa.HotRegion = new Region();
                Rect rcBK = new Rect((int) m_rcBK.left, (int) m_rcBK.top, (int) m_rcBK.right, (int) m_rcBK.bottom);
                for (int j = 0; j < nSize - 1; j++) {
                    PointF pt1 = tl_pa.alActionPoint.get(j);
                    PointF pt2 = tl_pa.alActionPoint.get(j + 1);
                    PointF ptStart = unRelativePoint(pt1);
                    PointF ptstop = unRelativePoint(pt2);

                    Path hotPath = new Path();
                    getShotlineHotPath(hotPath, ptStart, ptstop);
                    //                    WhithXY(tl_pa,pt1,pt2);
                    Region part = new Region();
                    part.setPath(hotPath, new Region(rcBK));

                    tl_pa.HotRegion.op(part, Op.UNION);
                }
                tl_pa.CoverArea = tl_pa.HotRegion.getBounds();
            }
            break;
            case ft_Eraser: {
                if (tl_pa.points.size() <= 2) {
                    break;
                }
                tl_pa.alActionPoint.clear();
                for (int i = 0; i < tl_pa.points.size(); i++) {
                    tl_pa.alActionPoint.add(UnWhithXYLinePath(tl_pa.points.get(i)));
                }
                int nSize = tl_pa.alActionPoint.size();
                if (nSize <= 2) {

                    break;
                }
                tl_pa.HotRegion = new Region();
                Rect rcBK = new Rect((int) m_rcBK.left, (int) m_rcBK.top, (int) m_rcBK.right, (int) m_rcBK.bottom);
                for (int j = 0; j < nSize - 1; j++) {
                    PointF pt1 = tl_pa.alActionPoint.get(j);
                    PointF pt2 = tl_pa.alActionPoint.get(j + 1);
                    PointF ptStart = unRelativePoint(pt1);
                    PointF ptstop = unRelativePoint(pt2);

                    Path hotPath = new Path();
                    getShotlineHotPath(hotPath, ptStart, ptstop);
                    //                    WhithXY(tl_pa,pt1,pt2);
                    Region part = new Region();
                    part.setPath(hotPath, new Region(rcBK));

                    tl_pa.HotRegion.op(part, Op.UNION);
                }
                tl_pa.CoverArea = tl_pa.HotRegion.getBounds();
            }
            break;
            case ft_Ellipse: {
                if (UnWhithXYLine(tl_pa) == null) break;
                PointF ptStart = null, ptstop = null;
                if (tl_pa.alActionPoint.size() == 2) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.alActionPoint.get(1));
                    //                    WhithXY(tl_pa,tl_pa.alActionPoint.get(0),tl_pa.alActionPoint.get(1));
                } else if (tl_pa.alActionPoint.size() == 1) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.ptSizingEnd);
                    //                    WhithXY(tl_pa,tl_pa.alActionPoint.get(0),tl_pa.ptSizingEnd);
                }
                if (ptStart == null || ptstop == null) break;

                Path hotPathout = new Path();

                RectF ovalrectout = new RectF();

                ovalrectout.left = Math.min(ptStart.x, ptstop.x) - ActionBorder;
                ovalrectout.top = Math.min(ptStart.y, ptstop.y) - ActionBorder;
                ovalrectout.right = Math.max(ptStart.x, ptstop.x) + ActionBorder;
                ovalrectout.bottom = Math.max(ptStart.y, ptstop.y) + ActionBorder;

                hotPathout.addOval(ovalrectout, Path.Direction.CCW);

                tl_pa.HotRegion = new Region();

                Rect rcBK = new Rect((int) m_rcBK.left, (int) m_rcBK.top, (int) m_rcBK.right, (int) m_rcBK.bottom);
                tl_pa.HotRegion.setPath(hotPathout, new Region(rcBK));
                //tl_pa.HotRegion.setPath(hotPathout,  new Region(new Rect(0,0,(int) m_rcBK.width(),(int) m_rcBK.height()) ));

                if (!tl_pa.bIsFill) {
                    if (Math.abs(ptStart.x - ptstop.x) > 10 && Math.abs(ptStart.y - ptstop.y) > 10) {
                        Path hotPathin = new Path();

                        RectF ovalrectin = new RectF();

                        ovalrectin.left = Math.min(ptStart.x, ptstop.x) + ActionBorder;
                        ovalrectin.top = Math.min(ptStart.y, ptstop.y) + ActionBorder;
                        ovalrectin.right = Math.max(ptStart.x, ptstop.x) - ActionBorder;
                        ovalrectin.bottom = Math.max(ptStart.y, ptstop.y) - ActionBorder;

                        hotPathin.addOval(ovalrectin, Path.Direction.CCW);
                        Region part = new Region();
                        //part.setPath(hotPathin, new Region(new Rect(0,0,this.getWidth(),this.getHeight()) ));
                        //Rect rcBK = new Rect((int)m_rcBK.left,(int)m_rcBK.top,(int) m_rcBK.right,(int) m_rcBK.bottom);
                        part.setPath(hotPathin, new Region(rcBK));
                        tl_pa.HotRegion.op(part, Op.DIFFERENCE);
                    }
                }

                tl_pa.CoverArea = tl_pa.HotRegion.getBounds();
            }
            break;

            case ft_Rectangle: {
                if (UnWhithXYLine(tl_pa) == null) break;
                PointF ptStart = null, ptstop = null;
                if (tl_pa.alActionPoint.size() == 2) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.alActionPoint.get(1));
                    //                    WhithXY(tl_pa,tl_pa.alActionPoint.get(0),tl_pa.alActionPoint.get(1));
                } else if (tl_pa.alActionPoint.size() == 1) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.ptSizingEnd);
                    //                    WhithXY(tl_pa,tl_pa.alActionPoint.get(0),tl_pa.ptSizingEnd);
                }
                if (ptStart == null || ptstop == null) break;

                Path hotPathout = new Path();

                RectF rectout = new RectF();

                rectout.left = Math.min(ptStart.x, ptstop.x) - ActionBorder;
                rectout.top = Math.min(ptStart.y, ptstop.y) - ActionBorder;
                rectout.right = Math.max(ptStart.x, ptstop.x) + ActionBorder;
                rectout.bottom = Math.max(ptStart.y, ptstop.y) + ActionBorder;

                hotPathout.addRect(rectout, Path.Direction.CCW);

                tl_pa.HotRegion = new Region();
                Rect rcBK = new Rect((int) m_rcBK.left, (int) m_rcBK.top, (int) m_rcBK.right, (int) m_rcBK.bottom);
                tl_pa.HotRegion.setPath(hotPathout, new Region(rcBK));
                //tl_pa.HotRegion.setPath(hotPathout,  new Region(new Rect(0,0,(int) m_rcBK.width(),(int) m_rcBK.height()) ));

                if (!tl_pa.bIsFill) {
                    if (Math.abs(ptStart.x - ptstop.x) > 10 && Math.abs(ptStart.y - ptstop.y) > 10) {
                        Path hotPathin = new Path();

                        RectF rectin = new RectF();

                        rectin.left = Math.min(ptStart.x, ptstop.x) + ActionBorder;
                        rectin.top = Math.min(ptStart.y, ptstop.y) + ActionBorder;
                        rectin.right = Math.max(ptStart.x, ptstop.x) - ActionBorder;
                        rectin.bottom = Math.max(ptStart.y, ptstop.y) - ActionBorder;

                        hotPathin.addRect(rectin, Path.Direction.CCW);
                        Region part = new Region();
                        part.setPath(hotPathin, new Region(rcBK));

                        tl_pa.HotRegion.op(part, Op.DIFFERENCE);
                    }
                }
                tl_pa.CoverArea = tl_pa.HotRegion.getBounds();
            }
            break;

            case ft_Text: {
                if (UnWhithXYText(tl_pa) == null) break;
                TextPaint textPaint = new TextPaint();
                textPaint.setColor(tl_pa.nPenColor);
                textPaint.setTextSize(20.0F);
                PointF ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                //                WhithXY(tl_pa,tl_pa.alActionPoint.get(0),tl_pa.alActionPoint.get(0));

                int widthMax = 0;
                StaticLayout layout = new StaticLayout(tl_pa.sText, textPaint, (int) (m_rcBK.right - ptStart.x), Alignment.ALIGN_NORMAL, 1.0F, 0.0F, false);

                for (int i = 0; i < layout.getLineCount(); i++) {//layout.getLineCount()
                    int nWidth = (int) layout.getLineWidth(i);
                    widthMax = Math.max(nWidth, widthMax);
                }
                Rect rcReg = new Rect();
                rcReg.left = (int) ptStart.x;
                rcReg.top = (int) ptStart.y;
                rcReg.right = rcReg.left + widthMax;
                rcReg.bottom = rcReg.top + layout.getHeight();
                tl_pa.HotRegion = new Region();
                tl_pa.HotRegion.set(rcReg);

                tl_pa.CoverArea = tl_pa.HotRegion.getBounds();
            }
            break;
            case ft_arrowLine: {
                if (UnWhithXYLine(tl_pa) == null) break;
                PointF ptStart = null, ptstop = null;
                if (tl_pa.alActionPoint.size() == 2) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.alActionPoint.get(1));
                    //                    WhithXY(tl_pa,tl_pa.alActionPoint.get(0),tl_pa.alActionPoint.get(1));
                } else if (tl_pa.alActionPoint.size() == 1) {
                    ptStart = unRelativePoint(tl_pa.alActionPoint.get(0));
                    ptstop = unRelativePoint(tl_pa.ptSizingEnd);
                    //                    WhithXY(tl_pa,tl_pa.alActionPoint.get(0),tl_pa.ptSizingEnd);
                }
                if (ptStart == null || ptstop == null) break;

                Path hotPath = new Path();
                getShotlineHotPath(hotPath, ptStart, ptstop);

                tl_pa.HotRegion = new Region();
                Rect rcBK = new Rect((int) m_rcBK.left, (int) m_rcBK.top, (int) m_rcBK.right, (int) m_rcBK.bottom);
                tl_pa.HotRegion.setPath(hotPath, new Region(rcBK));

                tl_pa.CoverArea = tl_pa.HotRegion.getBounds();
            }
            break;
            default:
                break;
        }
    }

    /**
     * 文字输入pop
     *
     * @param x
     * @param y
     */
    public void insertText(final float x, final float y) {

        m_orgRcBK = new RectF(m_rcBK);

        //TODO 输入文字
    }

    /**
     * 文字输入
     *
     * @param strtext
     * @param x
     * @param y
     */
    public void onInsertText(String strtext, float x, float y) {
        m_tl_CurrentPadAction = new TL_PadAction();

        m_tl_CurrentPadAction.sID = m_tl_CurrentPadAction.hashCode() + "";
        m_tl_CurrentPadAction.boardType = 0;
        m_tl_CurrentPadAction.nActionMode = TL_PadAction.factoryType.ft_Text;
        double penwidth = m_nPenWidth * 1.0 * 60 / 100 * penWidthRatio();
        m_tl_CurrentPadAction.nPenWidth = (int) penwidth;
        m_tl_CurrentPadAction.nPenColor = m_nPenColor;
        m_tl_CurrentPadAction.bIsFill = m_bActionfill;
        m_tl_CurrentPadAction.alActionPoint = new ArrayList<PointF>();
        m_tl_CurrentPadAction.alActionPoint.add(relativePoint(new PointF(x, y)));
        WhithXY(m_tl_CurrentPadAction, relativePoint(new PointF(x, y)));
        m_tl_CurrentPadAction.sText = strtext;
        calculateActionsRect(m_tl_CurrentPadAction);
        this.invalidate();
        m_tl_CurrentPadAction = null;
    }

    /**
     * 画笔路径 暂存 可删除
     *
     * @param path
     * @param aF
     * @param bF
     */
    public void getShotlineHotPath(Path path, PointF aF, PointF bF) {

        float hotWidth = ActionBorder;

        PointF a, b;
        if (aF.x >= bF.x) {
            a = bF;
            b = aF;
        } else {
            a = aF;
            b = bF;
        }

        float fLine = (float) Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
        float widthoff = 0;
        float heightoff = 0;
        if (fLine != 0) {
            widthoff = hotWidth * Math.abs(a.y - b.y) / fLine;
            heightoff = hotWidth * Math.abs(a.x - b.x) / fLine;
        }

        PointF aX = new PointF(), aY = new PointF(), bX = new PointF(), bY = new PointF();

        if (a.y <= b.y) {
            aX.x = a.x - widthoff;
            aY.x = a.x + widthoff;

            bX.x = b.x - widthoff;
            bY.x = b.x + widthoff;
        } else {
            aX.x = a.x + widthoff;
            aY.x = a.x - widthoff;

            bX.x = b.x + widthoff;
            bY.x = b.x - widthoff;
        }

        if (a.x <= b.x) {
            aX.y = a.y + heightoff;
            aY.y = a.y - heightoff;

            bX.y = b.y + heightoff;
            bY.y = b.y - heightoff;
        } else {
            aX.y = a.y + heightoff;
            aY.y = a.y - heightoff;

            bX.y = b.y + heightoff;
            bY.y = b.y - heightoff;
        }
        //        path.moveTo(aX.x, aX.y);
        //        path.lineTo(aY.x, aY.y);
        //        path.lineTo(bY.x, bY.y);
        //        path.lineTo(bX.x, bX.y);

        //lines.quadTo(x ,y,(ptf.x + x) / 2, (ptf.y + y) / 2);
        path.moveTo(aX.x, aX.y);
        path.quadTo(aX.x, aX.y, (aX.x + aY.x) / 2, (aX.y + aY.y) / 2);
        path.quadTo(aY.x, aY.y, (bX.x + aY.x) / 2, (bX.y + aY.y) / 2);
        path.quadTo(bX.x, bY.y, (bY.x + bX.x) / 2, (bY.y + bX.y) / 2);

        ////        path.lineTo(aY.x, aY.y);
        //        path.lineTo(bY.x, bY.y);
        //        path.lineTo(bX.x, bX.y);
        path.close();
    }
    ////////////////////////////////////////

    /**
     * 箭头 三角形 x 轴长度
     * (pH + H) / (pX + X) = pH / pX  --> X = (pH + H) * pX / pH - pX
     * <p>
     * 箭头 三角形 y 轴长度
     * (pH + H) / (pY + Y) = pH / pY  --> Y = (pH + H) * pY / pH - pY
     */
    public void getArrowPath(Canvas cvs, PointF aF, PointF bF, int penColor, int width) {
        final float normalarrowsize = width / penWidthRatio() /** dbZoomScale*/;

        // 底边的一半
        double L = normalarrowsize;
        // 箭头高度
        double H = L * 4.5 / 3;
        int x3 = 0;
        int y3 = 0;
        int x4 = 0;
        int y4 = 0;
        // 箭头角度
        double awrad = Math.atan(L / H);
        // 箭头的长度
        double arraow_len = Math.sqrt(L * L + H * H);

        //计算箭头三角形顶点的位置
        double pH = Math.sqrt((bF.x - aF.x) * (bF.x - aF.x) + (bF.y - aF.y) * (bF.y - aF.y));
        double x = (H + pH) * (bF.x - aF.x) / pH - (bF.x - aF.x);
        double y = (H + pH) * (bF.y - aF.y) / pH - (bF.y - aF.y);
        //箭头三角形顶点坐标
        float endX = (float) (bF.x + x);
        float endY = (float) (bF.y + y);

        double[] arrXY_1 = rotateVec(endX - aF.x, endY - aF.y, awrad, true, arraow_len);
        double[] arrXY_2 = rotateVec(endX - aF.x, endY - aF.y, -awrad, true, arraow_len);
        double x_3 = endX - arrXY_1[0]; // (3,y3)是第一端点
        double y_3 = endY - arrXY_1[1];
        double x_4 = endX - arrXY_2[0]; // (x4,y4)是第二端点
        double y_4 = endY - arrXY_2[1];
        Double X3 = new Double(x_3);
        x3 = X3.intValue();
        Double Y3 = new Double(y_3);
        y3 = Y3.intValue();
        Double X4 = new Double(x_4);
        x4 = X4.intValue();
        Double Y4 = new Double(y_4);
        y4 = Y4.intValue();

        // 画线
        Paint linePaint = new Paint();
        linePaint.setColor(penColor);
        linePaint.setAntiAlias(true);
        linePaint.setStrokeCap(Paint.Cap.ROUND);
        linePaint.setStrokeWidth(normalarrowsize);
        cvs.drawLine(aF.x, aF.y, bF.x, bF.y, linePaint);

        //画三角形
        Path triangle = new Path();
        triangle.moveTo(endX, endY);
        triangle.lineTo(x3, y3);
        triangle.lineTo(x4, y4);
        triangle.close();

        Paint trianglePaint = new Paint();
        trianglePaint.setColor(penColor);
        trianglePaint.setAntiAlias(true);

        cvs.drawPath(triangle, trianglePaint);

    }

    // 计算
    public double[] rotateVec(double px, double py, double ang, boolean isChLen, double newLen) {
        double mathstr[] = new double[2];
        // 矢量旋转函数，参数含义分别是x分量、y分量、旋转角、是否改变长度、新长度
        double vx = px * Math.cos(ang) - py * Math.sin(ang);
        double vy = px * Math.sin(ang) + py * Math.cos(ang);

        if (isChLen) {
            double d = Math.sqrt(vx * vx + vy * vy);
            vx = vx / d * newLen;
            vy = vy / d * newLen;
            mathstr[0] = vx;
            mathstr[1] = vy;
        }
        return mathstr;
    }

    /**
     * 画笔数据坐标转三端统一坐标
     *
     * @param tl_pa
     * @param ptStart
     */
    private void WhithXY(TL_PadAction tl_pa, PointF ptStart) {
        double hight;
        double width;
        hight = 960 * 1.0;
        width = hight / m_nOldHeight * m_nOldWidth;

        if (tl_pa.nActionMode == TL_PadAction.factoryType.ft_Rectangle || tl_pa.nActionMode == TL_PadAction.factoryType.ft_Ellipse) {
            if (tl_pa.points.size() != 0) {
                PointF a1 = new PointF(), a2 = new PointF();

                a1.x = (float) (width * (tl_pa.points.get(0).x / width));
                a1.y = (float) (hight * (tl_pa.points.get(0).y / hight));

                a2.x = (float) (width * ptStart.x) - a1.x;
                a2.y = (float) (hight * ptStart.y) - a1.y;

                tl_pa.points.add(a2);
            } else {
                PointF a1 = new PointF();
                a1.x = (float) (width * ptStart.x);
                a1.y = (float) (hight * ptStart.y);
                tl_pa.points.add(a1);
            }

        } else if (tl_pa.nActionMode == TL_PadAction.factoryType.ft_Text) {
            PointF a1 = new PointF();
            a1.x = (float) (width * ptStart.x);
            a1.y = (float) (hight * ptStart.y);
            tl_pa.points.add(a1);
        } else {
            PointF a1 = new PointF(), a2 = new PointF();
            a1.x = (float) (width * ptStart.x);
            a1.y = (float) (hight * ptStart.y);

            tl_pa.points.add(a1);
        }
    }

    /**
     * 同上 以两点坐标为主的转换
     *
     * @param tl_pa
     * @param ptStart
     */
    private void WhithXYPointF(TL_PadAction tl_pa, PointF ptStart) {
        double hight;
        double width;
        hight = 960 * 1.0;
        width = hight / m_nOldHeight * m_nOldWidth;

        if (tl_pa.nActionMode == TL_PadAction.factoryType.ft_Rectangle || tl_pa.nActionMode == TL_PadAction.factoryType.ft_Ellipse) {
            PointF a1 = new PointF(), a2 = new PointF();

            a1.x = (float) (width * (tl_pa.points.get(0).x / width));
            a1.y = (float) (hight * (tl_pa.points.get(0).y / hight));

            a2.x = (float) (width * ptStart.x) - a1.x;
            a2.y = (float) (hight * ptStart.y) - a1.y;

            tl_pa.ptSizingEndPointf = a2;
        } else if (tl_pa.nActionMode == TL_PadAction.factoryType.ft_Text) {
            PointF a1 = new PointF();
            a1.x = (float) (width * ptStart.x);
            a1.y = (float) (hight * ptStart.y);
            tl_pa.ptSizingEndPointf = a1;
        } else {
            PointF a1 = new PointF();
            a1.x = (float) (width * ptStart.x);
            a1.y = (float) (hight * ptStart.y);

            tl_pa.ptSizingEndPointf = a1;
        }
    }

    /**
     * 计算当前坐标在区域内坐标比值
     *
     * @param point
     * @return
     */
    public PointF relativePoint(PointF point) {
        PointF real = new PointF();
        //是否是文字输入坐标
        if (this.m_orgRcBK != null) {
            real.x = (point.x - m_orgRcBK.left) / m_orgRcBK.width();
            real.y = (point.y - m_orgRcBK.top) / m_orgRcBK.height();
            m_orgRcBK = null;
        } else {
            real.x = (point.x - m_rcBK.left) / m_rcBK.width();
            real.y = (point.y - m_rcBK.top) / m_rcBK.height();
        }
        return real;
    }

    public PointF unRelativePoint(PointF point) {
        PointF real = new PointF();
        if (point != null) {
            real.x = m_rcBK.left + m_rcBK.width() * point.x;//(0.0,168.0,480.0,648.0)
            real.y = m_rcBK.top + m_rcBK.height() * point.y;//(0,168)
        }
        return real;
    }

    /**
     * 钢笔 橡皮  以多点为主的画笔 转换
     *
     * @param tl_pa
     * @return
     */
    public Path getMarkPenPath(TL_PadAction tl_pa) {
        if (tl_pa.nActionMode == TL_PadAction.factoryType.ft_markerPen || tl_pa.nActionMode == TL_PadAction.factoryType.ft_Eraser) {
            Path lines = new Path();
            float x = 0, y = 0;
            for (int i = 0; i < tl_pa.alActionPoint.size(); i++) {
                PointF ptf = unRelativePoint(tl_pa.alActionPoint.get(i));

                if (i == 0) {
                    lines.moveTo(ptf.x, ptf.y);
                    x = ptf.x;
                    y = ptf.y;
                } else {
//                                        lines.lineTo(ptf.x, ptf.y);
                    lines.quadTo(x, y, (ptf.x + x) / 2, (ptf.y + y) / 2);
                    x = ptf.x;
                    y = ptf.y;
                }
            }
            return lines;
        }
        return null;
    }

    /**
     * 是那种类型
     *
     * @param type
     */
    public void setToolsType(ToolsType type) {
        this.mToolsType = type;
    }

    /**
     * 画笔类型
     *
     * @param mToolsPenType
     */
    public void setmToolsPenType(ToolsPenType mToolsPenType) {
        this.mToolsPenType = mToolsPenType;
    }

    /**
     * 画笔颜色
     *
     * @param mToolsPenColor
     */
    public void setmToolsPenColor(int mToolsPenColor) {
        this.mToolsPenColor = mToolsPenColor;
    }

    /**
     * 画笔大小
     *
     * @param mToolsPenProgress
     */
    public void setmToolsPenProgress(int mToolsPenProgress) {
        this.mToolsPenProgress = mToolsPenProgress;
    }

    /**
     * 文字颜色
     *
     * @param mToolsFontColor
     */
    public void setmToolsFontColor(int mToolsFontColor) {
        this.mToolsFontColor = mToolsFontColor;
    }

    /**
     * 文字大小
     *
     * @param mToolsFontSize
     */
    public void setmToolsFontSize(int mToolsFontSize) {
        this.mToolsFontSize = mToolsFontSize;
    }

    /**
     * 形状类型
     *
     * @param mToolsFormType
     */
    public void setmToolsFormType(ToolsFormType mToolsFormType) {
        this.mToolsFormType = mToolsFormType;
    }

    /**
     * 形状颜色
     *
     * @param mToolsFormColor
     */
    public void setmToolsFormColor(int mToolsFormColor) {
        this.mToolsFormColor = mToolsFormColor;
    }

    /**
     * 形状宽度
     *
     * @param mToolsFormWidth
     */
    public void setmToolsFormWidth(int mToolsFormWidth) {
        this.mToolsFormWidth = mToolsFormWidth;
    }

    /**
     * 橡皮檫宽度
     *
     * @param mToolsEraserWidth
     */
    public void setmToolsEraserWidth(int mToolsEraserWidth) {
        this.mToolsEraserWidth = mToolsEraserWidth;
    }

    public void cleanActions() {
        padActions.clear();
        m_tl_CurrentPadAction = null;
        postInvalidate();
    }


}




