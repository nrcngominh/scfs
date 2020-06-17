package com.example.sfcs_hcmut.di;

import com.example.sfcs_hcmut.presenters.IMainPresenter;
import com.example.sfcs_hcmut.presenters.MainPresenter;
import com.example.sfcs_hcmut.views.MainActivity;

import dagger.Component;

@Component(modules = ApplicationInjectionModule.class)
public interface ApplicationComponent {
    IMainPresenter injectPresenter();
}
