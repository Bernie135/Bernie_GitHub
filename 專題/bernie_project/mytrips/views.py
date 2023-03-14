from threading import local
from django.shortcuts import render
from django.http import HttpResponse
from .models import Iccard
from datetime import datetime
from plotly.offline import plot
import plotly
from plotly.graph_objs import Scatter,Layout,Figure
import plotly.graph_objs as go
import plotly.offline as py
import joblib
'''import zmq
context = zmq.Context()
recvive = context.socket(zmq.REQ)
recvive.connect("tcp://192.168.0.8:2222")
'''
def delete(request):
    id=request.POST.get('IC')
    records=Iccard.objects.filter(id = id)
    records.delete()
    p=Iccard.objects.all()
    return render(request,"user.html",locals())

def modify(request):
        id=request.POST.get('IC')
        p=Iccard.objects.filter(id = id)
        return render(request,"modify.html",locals())

def qrcode(request):
    return render(request,"qrcode.html",locals())

def graph(request):
    username=request.session['username']
    id_card=request.session['id_card']
    p=Iccard.objects.filter(name = username,id_card = id_card).order_by('-id')
    num=len(p)
    x_date=[]
    y_date=[]
    t_date=[]
    ps_date=[]
    pd_date=[]
    h_date=[]
    i=0
    while i < num:
        x_date+=[p[i].testdate]##日期寫入[]
        y_date+=[p[i].weight] ##體重寫入[]
        t_date+=[p[i].temperature]##溫度寫入[]
        ps_date+=[p[i].pressures]##收縮壓
        pd_date+=[p[i].pressured]##舒張壓
        h_date+=[p[i].heartbeat]##心跳
        i=i+1

    trace1 = Scatter(
    x=x_date , y=y_date , mode='markers+lines',
    name='a' , marker_color = 'green'
    )

    trace2 = Scatter(
    x=x_date , y=t_date , mode='markers+lines',
    name='a' , marker_color = 'green'
    )

    trace3 = go.Bar(
        x=x_date, y=ps_date , name='收縮壓'
    )

    trace4 = go.Bar(
        x=x_date, y=pd_date , name='舒張壓'
    )

    trace5 = go.Bar(
        x=x_date, y=h_date , name='心跳'
    )

    data=[trace1]
    data_one=[trace2]
    data_second=[trace3,trace4,trace5]
    ##---體重折線圖
    layout = Layout(title='歷史體重', xaxis_title='Year')
    fig = Figure(data = data, layout = layout)
    plot_graph_weight=plot(fig,validate=False,output_type='div',image_width=200,image_height=400)
    ##---
    ##---體溫折線圖
    layout = Layout(title='歷史體溫', xaxis_title='Year')
    fig = Figure(data = data_one, layout = layout)
    plot_graph_temperature=plot(fig,validate=False,output_type='div',image_width=200,image_height=400)
    ##---
    ##---分組條形圖
    layout = go.Layout(
        barmode='group'
    )
    fig = go.Figure(data=data_second, layout=layout)
    plot_graph_pre_hreat=plot(fig,validate=False,output_type='div',image_width=200,image_height=400)
    ##---
    if p:
        return render(request,'graph.html',context={'plot_graph_weight' : plot_graph_weight,'plot_graph_temperature' : plot_graph_temperature,'plot_graph_pre_hreat' : plot_graph_pre_hreat,'p':p})
    else:
        return render(request,"hello_world.html",locals())

def hello_world(request):
    if request.POST:
        username = request.POST['username']
        id_card = request.POST['id_card']
        request.session['username']=username
        request.session['id_card']=id_card
        username1="admin"
        id_num="1234"
        ##--判斷是否為管理者
        if (username == 'admin') & (id_card =='1234'):
            p=Iccard.objects.all()
            return render(request,'user.html',locals())
        else:
            p=Iccard.objects.filter(name = username,id_card = id_card).order_by('-id')
            x_test=[]
            y_text=[]
            x_test+=[p[0].temperature]
            x_test+=[p[0].weight]
            x_test+=[p[0].pressures]
            x_test+=[p[0].pressured]
            x_test+=[p[0].heartbeat]
            y_test=[p[0].temperature]
            y_test+=[p[0].weight]
            y_test+=[p[0].pressures]
            y_test+=[p[0].pressured]
            y_test+=[p[0].heartbeat]
            z_test=[x_test,y_test]
            ck=joblib.load('SVM.sav')
            test=ck.predict(z_test)
        
            if test[0]== False:
                ##--正常判斷，但還是多判斷pressureS和體溫
                if int(p[0].pressures)>140:
                    message1='目前舒張壓正常但是收縮壓偏高喔，少吃油炸、精緻食物能幫住您減低血管硬化的風險喔'
                elif int(p[0].pressures)>100:
                    message1='恭喜你非常健康，請保持目前的生活作息，能使你更有活力喔'
                else:
                    message1='收縮壓偏低、舒張正常，請規律生活及運動'

                message1='恭喜你還非常的健康喔，保持目前的生活作息，能使你更有活力喔'
                message2='體溫在正常範圍內，但請不要忘記戴口罩防範Covid Nineteen喔'
                message3="心跳正常喔"
                ##--
            else:
                ##--血壓建議
                if int(p[0].pressures)>140:
                    if int(p[0].pressured)>90:
                        message1='收縮血壓、擴張血壓數據偏高，勞煩您近期多注意自己的身體，有需要能前往醫院進行更精密的檢查'
                    elif int(p[0].pressured)>70:
                        message1='目前舒張壓正常但是收縮壓偏高喔，少吃油炸、精緻食物能幫住您減低血管硬化的風險喔'
                    else:
                        message1='收縮偏高、舒張偏低，請養成運動習慣，每次20到30分鐘，能幫助您降低血壓'
                elif int(p[0].pressures)>100:
                    if int(p[0].pressured)>90:
                        message1='收縮血壓正常、舒張壓數據偏高，勞煩您近期多注意自己的身體，有需要能前往醫院進行更精密的檢查'
                    elif int(p[0].pressured)>70:
                        message1='恭喜你非常健康，請保持目前的生活作息，能使你更有活力喔'
                    else:
                        message1='收縮壓正常、舒張壓偏低，若有頭暈現象可能是低血壓前兆喔。'
                else:
                    if int(p[0].pressured)>90:
                        message1='收縮血壓偏低、舒張壓數據偏高，最近工作很勞累喔，請多多活動身體，讓自己喘口氣吧'
                    elif int(p[0].pressured)>70:
                        message1='收縮壓偏低、舒張正常，請規律生活及運動'
                    else:
                        message1='收縮壓偏低、舒張壓偏低小心有休克、低血壓的危機喔，請密切觀察盡早處理。'
            
                ##--

                ##--體溫判斷建議
                if float(p[0].temperature) >38.0:
                    message2='體溫過高，請盡速前往醫院做盡一步檢查'
                elif float(p[0].temperature) >37.0:
                    message2='體溫稍微偏高喔，多注意身體狀況'
                else:
                    message2="體溫在正常範圍內，但請不要忘記戴口罩防範Covid Nineteen喔"
                ##--     
                if int(p[0].heartbeat)>80:
                    message3="心跳過快，勞煩您近期注意身體，建議適度的運動、充足的睡眠和補充足夠的水分能夠改善狀況喔"
                elif int(p[0].heartbeat)<60:
                    message3="心跳過低，建議您到醫院進一步做心臟的檢查喔"
                else:
                    message3="心跳正常"
        if p:
            return render(request,'hello_world.html',locals())
        else:
            return render(request,"index.html",locals())
    else:
        return render(request,"index.html",locals())

def index(request):
    return  render(request,'index.html',locals())
counter=0
def index_one(request):
        n=Iccard.objects.all().order_by('-id')
        p=Iccard.objects.filter(name = n[0].name,id_card = n[0].id_card).order_by('-id')
        request.session['username']=n[0].name
        request.session['id_card']=n[0].id_card
        q=request.user
        if p:
            return render(request,'hello_world.html',locals())
        else:
            return render(request,"index.html",locals())
