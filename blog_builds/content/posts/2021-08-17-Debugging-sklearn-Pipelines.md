---
title: "Debugging Inside Scikit-Learn Pipelines"
date: 2021-08-17T18:01:26+05:30
draft: false
description: Writing a custom transformer in scikit-learn for debugging pipelines.
tags: [python, hacks]
---

Click the given link to skip to the code and spare yourself my tortuous introduction: [code for sklearn Pipeline debugging Transformer](#code). _Don't_ click the link if you're debugging at 2pm on a slow Thursday and want something, _anything_, to distract you from staring at VSCode and its quickly blurring lines of code. I can help you pretend you're working as you scan the next few paragraphs of my inner monologue.

Hello, hi, welcome! If you're like me and work with Python to do Machine Learning, you probably often find yourself writing complicated pre-processing and modelling code using the scikit-learn library[^1]. If you're even more like me, which is to say you're a fan of writing end-to-end transformers & estimators to avoid pulling your hair out with complicated testing procedures, you probably find yourself using scikit-learn's Pipeline funtionality[^2] a whole lot too. Good on you! 

However, if you're _even more_ even more like me (which like, are you sure we aren't clones made by a Quatermass-type[^3] wacky scientist?), you also make mistakes. Quite a few of those, at that. Good on you! Making mistakes is not always a bad thing - I always seem to learn something new and cool about writing robust and reproducible code when I make mistakes. 

Here's something I asked myself when I realised I was doing something wrong with a transformation function I used in my sklearn Pipeline object to do some pre-processing on my data: wouldn't it be so much cooler to have discovered allll this after I was done with the transformation, but before I'd proceeded next with anything else?

And there's a really simple solution: you can write your custom Transformer object to print out the intermediate state of the data/any other stats you want to see! This is really easy, and probably something one can deploy during the intial phase where you've just built a pipeline and are previewing it to make sure everything is in order. It helps especially when you've chained together like five different transformations that operate on like seven different columns of your data and then slammed them together for your final output. 

Here's the code for this!

### <a name="code"></a> Python Code for scikit-learn Pipeline Debug Object

```python

from sklearn.base import TransformerMixin, BaseEstimator

class Debugger(BaseEstimator, TransformerMixin):

    def transform(self, data):

        # Here you just print what you need + return the actual data. You're not transforming anything. 

        print("Shape of Pre-processed Data:", data.shape)
        print(pd.DataFrame(data).head())
        return data

    def fit(self, data, y=None, **fit_params):

        # No need to fit anything, because this is not an actual  transformation. 

        return self

# Create a pipeline for training
train_pipe = Pipeline(
        steps=[
            ('preprocessor', preprocessor),  # preprocessor pipeline - I usually have one I've written already that I throw into the training pipeline
            ('debugger', Debugger()), ######## -> POSITION THIS WHEREVER YOU WANT TO SEE THE OUTPUT
            ('classifier', ExtraTreesClassifier(n_jobs = -1))  # the classification model
        ]
    )

```

Hope this helps anyone else who was trying to get a little peek into their transformer Pipeline for whatever reason! 

## References:

[^1]: [scikit-learn Documentation](https://scikit-learn.org/stable/index.html)
[^2]: [Pipeline Documentation](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline)
[^3]: See: [The Quatermass Xperiment](https://en.wikipedia.org/wiki/The_Quatermass_Xperiment)