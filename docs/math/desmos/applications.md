---
sidebar_position: 3
title: Applications
---
# Applications

## Finding Solutions

### Solving 1-variable equations

#### Entering your equation into a single desmos line

If you try graphing $x=5$ into desmos, what will the graph look like?

<ol type="A">
    <li>A vertical line</li>
    <li>A horizontal line</li>
    <li>A downward sloping line</li>
    <li>An upward sloping line</li>
</ol>

<DesmosDetails />

You should have found, if you didn't know it already, that the equation $x=3$ will produce a **vertical** line where every $x$ value is equal to $3$.
This makes sense because the statement $x=3$ plots all points where the $x$-coordinate of the line is $3$.

But how does this help us solve equations? Well now try graphing $10 - x = 7$ . What do you get?

<ol type="A">
    <li>A vertical line</li>
    <li>A horizontal line</li>
    <li>A downward sloping line</li>
    <li>An upward sloping line</li>
</ol>


Try it yourself to confirm your answer.

<DesmosDetails />

You should have gotten another vertical line, again where $x$ is equal to $3$.
This is because the only value of $x$ that satisfies the equation is $3$, so just like before desmos plots all points on the plane where the $x$-coordinate is equal to $3$.
In other words, *desmos has solved the equation for us* 🤔😲🤯 

And while this may not seem useful for the equation $10-x=7$, try solving this by hand:

$$ 

\frac{7-2\left(6-x\right)}{3}+\frac{\left(x-3\right)-2\left(x+8\right)}{5}=\frac{-x-\left(-2+5\right)}{7}

$$

Probably not much fun.
And probably really easy to make a mistake with the algebra.
Just look at all those negatives. 

Desmos, on the other hand, makes this sort of equation easy. 
Try typing the whole thing into desmos to see if you get the right answer.

<DesmosDetails summary="Solution" id="zmjidgxcoj"/>

Did you get it right? 

Notice for this equation you had to click on the $x$-intercept to get the decimals because the solution isn't an integer.
So is this ok?
Are there enough decimal places in the solution desmos gives me?
Yes.
Thankfully.
In fact, desmos gives you _exactly_ the number of digits you need to provide for grid-in questions.
So if the answer isn't an obvious integer, just click the $x$-intercept and desmos will usually show you the decimals to enter into the system.

_Usually?_

Yes, usually it works. But sometimes it doesn't.
For example, try using the approach above to solve this equation:

$$\frac{10}{x}=5$$

<DesmosDetails id="3hxwnnwxo2" summary="try clicking on the solution. Does it work?" />

From looking at the equation and the solution on the graph it seems pretty obvious that the answer is $2$, but why can't we click it to see the actual value?

I don't know why, exactly, but it has to do with how desmos parses and computes different types of equations.
For linear and quadratic equations, desmos will always allow you to click the solution.
For anything else, you will need to take a slightly different approach.

:::info
linear and quadratic equations with one variable are solvable on one desmos line.
:::
:::warning
other types of equations, such as radical or rational equations, are not solvable on one desmos line.
:::

#### Entering your equation into two desmos lines
There is an easy workaround, thankfully.

Instead of entering your equation into a single desmos input, try splitting it into two halves and entering it into desmos like so:

| input field | equation |
| --- | --- |
| line 1 | $$y=\frac{10}{x}$$ | 
| line 2 | $$y=5$$ |

Can you find the solution to equation on the graph?

<DesmosDetails />

<DesmosDetails id="sceohq9it3" summary="Solution" />

This is a really important concept, particularly when it comes to [determining the number of solutions to a given equation or system](#determining-the-number-of-solutions). Learn it well.

### Solving systems of equations

### Exercises

[exercises](https://drive.google.com/file/d/18vpgN_T2vvRdTvDSatn-mIv8HP-mF1TT/view?usp=drive_link)

[answers](https://drive.google.com/file/d/15BOMWhOLdyKp2uVLWcb-YJ106ayL52cG/view?usp=drive_link)


## Determining the number of solutions

#### Linear equations

<iframe width="100%" height="500px" src="https://www.desmos.com/calculator/xut7zdrwtx"/>

### Linear systems

<iframe width="100%" height="500px" src="https://www.desmos.com/calculator/xut7zdrwtx"/>

### Non-linear equations

### Non-linear systems

## Plug-in

Some questions ask us to rearrange an expression into an equivalent form. These questions can vary widely in difficulty, so it’s nice to have a backup plan if the algebra gets messy. 

Consider this question:

$$
\left(\frac{\pi a^{4}}{12r^{3}}\right)\left(\frac{18\pi a^{3}r^{2}}{5}\right)
$$

1. Which expression is equivalent to the given product for all $r \gt 6$ ?

<ol type='A'>
    <li> $\frac{3\pi^{2}a^{7}}{10r}$ </li>
    <li> $\frac{5a}{216r^{5}}$ </li>
    <li> $\frac{3\pi^{2}a^{7}}{10}$ </li>
    <li> $\frac{216r^{5}}{5a}$ </li>
</ol>
    
    - **Solution**
        
        You could simplify the expression by cancelling out factors in the numerators and denominators, but if you’re uncomfortable with that approach, desmos is once again here to save the day. All you have to do is write in the initial expression, and allow desmos to create sliders for $a$ and $r$. Then you write in the answer choices and see which one produces the same output:
        
<iframe width="100%" height="500px" src="https://www.desmos.com/calculator/ilhxiescus"/>
        
        In our case, no matter which values you select for $r$ and $a$ , answer choice (A) always produces the same output, so it’s equivalent to the initial expression. Try sliding the knobs around to see the outputs change. See?
        
## Assessing the effect of transformations

The SAT occasionally asks you to consider how a function changes if it’s shifted vertically or horizontally. For example, you could be given a quadratic function like this one:

$$
f(x)=2x^{2}+2x-3
$$

and then asked to find the x-intercepts of $f(x+1)$. The (tactically) WRONG way to go about this would be to substitute $x$ with $x+2$, like so:

$$
f(x+1)=3(x+2)^{2}+2(x+2)-3
$$

and then set $f(x)=-1$ , like so:

$$
-1=3(x+2)^{2}+2(x+2)-3
$$

and solve from there.
Desmos, on the other hand, makes this problem trivially easy.

<DesmosDetails />
<DesmosDetails id="lajpemppqo" summary="Solution" />

## Exercises

Solving the following problems using the desmos app, **even if it’s not the most efficient method**. 

### Question 1
    
    Which expression is equivalent to $x^2+3x-40$ ?
    
<ol type='A'>
    <li> $(x-4)(x+10)$ </li>
    <li> $(x-5)(x+8)$ </li>
    <li> $(x-8)(x+5)$ </li>
    <li> $(x-10)(x+4)$ </li>
</ol>

<DesmosDetails summary="Use desmos to solve the problem" />
<details><summary>Solution</summary> B </details>
    
    
### Question 2
    
    $$
    \frac{55}{x+6}=x
    $$
    
    What is the positive solution to the given equation?
    
<DesmosDetails summary="Use desmos to solve the problem" />
<details><summary>Solution</summary> 5 </details>

    
### Question 3
    
    $$
    g\left(x\right)=11\left(\frac{1}{2}\right)^{x}
    $$
    
    If the given function $g$ is graphed in the $xy$-plane, where $y=g(x)$, what is the $y$-intercept of the graph?
    
<ol type='A'>
    <li> $(0,11)$ </li>
    <li> $(0,132)$ </li>
    <li> $(0,1)$ </li>
    <li> $(0,12)$ </li>
</ol>
    
<DesmosDetails summary="Use desmos to solve the problem" />
<details><summary>Solution</summary> A </details>

    
### Question 4
    
    A rectangle has a length of of $x$ units and a width of $(x-15)$ units. If the rectangle has an area of $154$ square units, what is the value of $x$?
    
<ol type='A'>
    <li> $7$ </li>
    <li> $22$ </li>
    <li> $29$ </li>
    <li> $154$ </li>
</ol>


<DesmosDetails summary="Use desmos to solve the problem" />
<DesmosDetails summary="Solution" id="n4bgr2hogt" />
<details><summary>Solution</summary> B </details>
    
    
### Question 5
    
    $$
    7x+2y=4 \\
    6x+7y=-23
    $$
    
    The solution to the system of equations is $(x, y)$. What is the value of $y$ ?
    
<ol type='A'>
    <li> $-5$ </li>
    <li> $2$ </li>
    <li> $14$ </li>
    <li> $18$ </li>
</ol>
    
https://www.desmos.com/calculator/

<DesmosDetails summary="Use desmos to solve the problem" />
<DesmosDetails summary="Solution" id="oen6wpknj3" />
    
### Question 6
    
    $$
    f\left(x\right)=4x^{2}-20x+144
    $$
    
    The given equation defines the function $f$. For what value of $x$ does $f(x)$ reach its minimum?
    
<DesmosDetails summary="Use desmos to solve the problem" />
<DesmosDetails summary="Solution" id="ezev2snx1v" />
    
### Question 7
    
    The expression $\frac{24}{6x+42}$ is equivalent to $\frac{4}{x+b}$ , where $b$ is a constant and $x>0$. What is the value of $b$ ?
    
<ol type='A'>
    <li> $7$ </li>
    <li> $10$ </li>
    <li> $24$ </li>
    <li> $252$ </li>
</ol>

<DesmosDetails summary="Use desmos to solve the problem" />
<DesmosDetails summary="Solution" id="jaopethgs4"/>
    
### Question 8
    
    The function $f$ is defined by $f(x)=x^3+12$. What is the value of $f(3)$?
    
<ol type='A'>
    <li> $18$ </li>
    <li> $21$ </li>
    <li> $36$ </li>
    <li> $39$ </li>
</ol>

<DesmosDetails summary="Use desmos to solve the problem" />
<DesmosDetails summary="Solution" id="asfdog09mf" />


