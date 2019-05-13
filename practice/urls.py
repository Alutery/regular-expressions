from django.urls import path, re_path

from . import views

urlpatterns = [
    # path('', views.practice, name='practice'),
    path('gettask/', views.GetTasks.as_view(), name='get_tasks'),
    path('chainAcceptance/', views.ChainAcceptance.as_view(), name='chain_acceptance'),
    path('langDescription/', views.LangDescription.as_view() ,name='lang_description'),
    path('simplifyRegex/', views.SimplifyRegex.as_view() ,name='simplify_regex'),
    path('expressionBelongs/', views.ExpressionBelongs.as_view(), name='expression_belongs'),
    path('accordance/', views.Accordance.as_view(), name='accordance'),
    path('taskDFAtoregex/', views.TaskDFAtoregex.as_view(), name='task_DFA_to_regex'),
    path('validate_regex/', views.validate_regex, name='validate_regex'),
    path('send_result/', views.send_result, name='send_result'),
]