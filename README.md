# Pneumonia-Prediction-web
# OSSP: medical classification project
---------------------------------------------------------
**Day 1~3**



- OSSP 주제선정


 주제는 처음 주제는 알약을 분류하고 알약 사진에 대한 예측 값을 가져와서이에 따라
알약의 성분 및 정보를 알려주는 주제를 하려고 하였다. 하지만 이는 시간적으로 부족하기도 하고 
이를 진행 했을 때 완성도와 성능도 떨어질 것이라 예측하여 주제를 바꾸게 되었다.




이번 프로젝트는 의료데이터를 사용하고 이를 통해 웹서비스를 배포하고 싶은 생각을 하며 주제를 정하게 되었다.


주제는 **질병의 질환을 예측하는 서비스**를 구성해보려고 한다.


- 자료 수집


주제에 따른 내용에 대해 자세히 알아보기 위해 google, github, youtube, kaggle을 이용하여 자료를 수집하고 
참고할만한 자료들을 수집했다.


1. [당뇨병 예측 플라스크](https://github.com/AbhishekThorawashe/Diabetes_Prediction_Flask)


당뇨병에 대해서 사람의 나이와 당도 등 몇몇 정보를 기입하면 이에 따라서 당뇨병에 대해서 예측을 하는 웹서비스 이다. 


이는 csv로 파일을 받아와서 데이터베이스와 연동하여 실행이 되는 것이다.


2. [질병 다중 예측](https://github.com/justinhtn/disease-classification)


질병의 종류를 여러가지로 하여 하나하나 모델링을 하고 이를 분류하여 플라스크로 연동을 한다.



3. [Disease Prediction](https://github.com/shubhammadke/Multiple-Disease-Prediction)


당뇨병, 유방암, 심장질환, 신장, 간, 말라리아, 폐렴 총 7가지의 질병을 예측하는 분류기이다. 


데이터 세트는 kaggle에서 다운받았고 이는 Flask web framework로 
서비스를 이용할 수 있다.


4. [X-ray classification](https://github.com/Ibtastic/Medical-Diagnosis-using-Deep-Learning)


X-Ray 사진을가지고 폐 의료 영상을 분류하는 것이다.


5. [유방암 진단](https://www.youtube.com/watch?v=Hj0EA0y9eGU)


유방암 진단 인공지능 서비스를 간단하게 만드는 유튜브이다. 이를 보고 진행하는 것도 나쁘지 않다고 생각이 들었다. 


___최종적으로 X-ray 사진을 가지고 의료 영상을 분류하는 서비스가 괜찮다고 생각하여 이를 가지고 DB를 찾아보았다.___


소스코드


1. [X-ray data](https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia)


kaggle에 있는 데이터로 test, validation data 약 5800장 정도가 있다.


2. [aihub 폐암 진단 데이터](https://aihub.or.kr/aidata/34151)


aihub의 헬스케어에 있는 데이터 이다. 이를 이용하면 좋을 것 같지만 일단은 신청해 놓은 상태이다.



-----------------------------------------------------------------------------------------------------------------------


**Day 4**


-OSSP 주제선정 확정


질병 예측 웹 서비스 : 폐렴 


병원에서는 의사의 눈으로 X-ray상에서 폐렴인지 아닌지 구분을 하게된다. 그 결과 간혹 폐렴 환자를 정상환자로 구분할 수가 있다. 이러한 오류를 막기위해 X-ray 사진을 학습시켜서 환자의 정확한 진단을 돕는 다는 취지의 웹 서비스를 구현하려고 한다.


- 구성


dataset : crawling , Kaggle, github 활용 예정 


Learning model : vgg-16(불확실) transfer - learning or finetuning  


개발환경 : Colab(pro)

programing : pytorch, Flask, HTML, CSS 


------------------------------------------------------------------------------------------------------------


**Day 5**


- Dataset : Kaggle ( Chest X-ray )


training data : 약 5000장 
validation data : 약 600장 


- 개발 환경 : Colab(pro)

- 학습설계 

1. 데이터 전처리 

2. 모델 학습 : vgg-16 이용

(tranfer learning and Finetuning)


3. 모델 추출 : 

4. Flask web : Flask 사용 또는 Django 사용 예정 


--------------------------------------------------------------------


**Day 6**


데이터 : kaggle   -> train data , validation 

변동사항: 기존의 pytorch는 쓰지않고 java이용할 예정


oss 사용할 것 : liscense 확인 하였을 때 MIT 라이센스로 활용이 가능하다.

javascripts + HTML + CSS 

Js 로 vgg16 구현 및 모델 학습 후 웹 서비스 구현 예정 


개발 환경: intellij 


Deeplearning4j : tutorial 참고 

변동이유 : 이전에 프로젝트로 pytorch로 vgg16에 대해서 구현 해본적이 있어서 새로운 시도를 해보고 싶어서 시도하게 되었다. java 로도 딥러닝이 가능하고 java scripts를 웹 프레임워크로 이용하는 것도 새로운 시도가 될 것 같아서 시도하려한다.


java 자체에서도 딥러닝이 가능하고 처리 속도가 python보다 더 빠르다는 장점이 있고 colab에서 딥러닝을 실행한다면 세션이 종료 되었을 때 학습을 처음부터 다시 해야된다는 불편함이 있다.  이를 방지하기 위하여 intellij를 이용할 예정이다. 또한 무료 배포판에서 시행하는 것보다는 개발자용이 더 원할하다 판단되어 개발자용으로 시도하겠다.



구현이 완료 된다면 그래프로하여 에폭수를 조정하고 학습률을 조정하는 방향으로 비교하여 모델의 성능을 시각화 할 예정



reference 

[vgg 16 구현](https://github.com/shmishtopher/pneumonia-CNN)


[chest data](https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia)


[intellij](https://goddaehee.tistory.com/195)


[model load](https://ichi.pro/ko/tensorflow-jsleul-sayonghayeo-beulaujeoe-meosin-leoning-gajyeo-ogi-pateu-iii-108657045606563)


[web tutorial](https://jindodog.tistory.com/5)


-----------------------------------------------------------------------------------------------------------------


**Day 7**


model learning  성공 
 javascript로 진행 

 합성곱 신경망 CNN 으로 진행

개발환경 visual studio code

---------------------------------------------------------------------------------------------------------------------
**Day 8~10**


22.01.17 ~ 22.01.19


- Model learning 성공
 
 
-  main.js model.js data.js 작성 
 

-  index.html predict.js 작성


-  open live server에서 테스트 


-  정상작동 및 사진 업로드 가능


-  프로젝트 발표 준비 및 소스코드 정리 

