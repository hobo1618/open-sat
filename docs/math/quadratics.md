---
sidebar_position: 2
draft: true
---
# Quadratic Equations, Models & Systems

## Modelling

<aside>
ℹ️ *********solutions********* are where the graph crosses the $x$-axis. We can also refer to **********solutions********** as:

- *****zeros*****
- $x$-intercepts
- *****roots*****
</aside>

<aside>
ℹ️ The discriminant in the quadratic formula is $b^2-4ac$. The value of the discriminant tell us how many solutions the quadratic has:

$b^2-4ac>0$  ⇒ this means the quadratic has $**2$ solutions**.

$b^2-4ac=0$  ⇒ this means the quadratic has $**1$ solution**.

$b^2-4ac<0$  ⇒ this means the quadratic has $**0$ solutions**.

</aside>

<aside>
⚠️ **Don’t forget to change the sign** when you read the solutions from the factored form! **This is major source of careless errors on the SAT.**

❌ $0=(x+1)(x-10)$  ⇒  $x=\left\{-10,\ 1\right\}$  ************wrong!************

✅ $0=(x+1)(x-10)$  ⇒  $x=\left\{-1,\ 10\right\}$  ************right!************

</aside>

<aside>
⛔ Notice that we have to be careful with the signs here. In short, we have to switch the sign of the x-coordinate $h$ , but not the y-coordinate $k$.

Here are some more examples:

$y=\left(x+2\right)^{2}+3$ has a vertex of $(-2, 3)$

$y=\left(x-2\right)^{2}+3$ has a vertex of $(2, 3)$

$y=\left(x+2\right)^{2}-3$ has a vertex of $(-2, -3)$

$y=\left(x-2\right)^{2}-3$ has a vertex of $(2, 3)$

</aside>

## Theory

[quadratics-22-01-23](https://www.desmos.com/calculator/loa62yrzdf)

### ************************General Form: $y=ax^2+bx+c$**

**************************************The $a$ value**

The $a$ value shows if the parabola opens upwards or downwards.

The equation of the graph below is $y=-x^2$. The value of  $a$ is therefore $-1$, so the parabola opens downwards:

[here **a** is negative so the parabola opens downwards](https://www.desmos.com/calculator/yv9t8xxsmw?embed)

here **a** is negative so the parabola opens downwards

Whereas here below the equation of the parabola is $y=x^2$, so $a=1$ and the parabola opens upwards:

[here **a** is positive so the parabola opens downwards](https://www.desmos.com/calculator/zgwmagrbaj?embed)

here **a** is positive so the parabola opens downwards

********The $c$ value**

The "c" value is the y-intercept of the parabola:

[https://www.desmos.com/calculator/6ldp57jslk](https://www.desmos.com/calculator/6ldp57jslk)

************The axis of symmetry, or $x$-coordinate of the vertex**

Given the form $y=ax^2+bx+c$, we can easily calculate the $x$-coordinate of the vertex with:

$$
x_v=-\frac{b}{2a}
$$

See for yourself on desmos. You can try moving the sliders around to see

[https://www.desmos.com/calculator/jemau1ola6](https://www.desmos.com/calculator/jemau1ola6)

**Finding the solutions**

The “solutions” of a quadratic function are simply where the graph crosses the $x$-axis. 

To find the solutions of any quadratic function in the general form $y=ax^2+bx+c$ , we use the quadratic formula:

$$
x=\frac{-b}{2a}\pm\frac{\sqrt{b^{2}-4ac}}{2a}
$$

The formula is composed of two parts: the x-coordinate of the vertex $(-b/2a)$ ; plus/minus the number of steps to reach the solutions from the axis of symmetry. To figure out the number of solutions to a quadratic, you can use the **********discriminant**********, i.e. the bit underneath the root:

******************In word problems******************

Most “real world” word problems involving quadratics describe some kind of object flying through the air. This could be a ball or a spear or whatever. A typical model, where $t$ is time and $h$ is height, might look like this:

$$
h(t)=-t^2+2.25t+1.5
$$

[https://www.desmos.com/calculator/j1vnklpflq?embed](https://www.desmos.com/calculator/j1vnklpflq?embed)

In this model, the function $h$ shows the height of an object flying through the air over time. You can even visualize the object starting on the left hand side of the graph and ending on the floor on the right hand side. 

In this type of model, the $y$-intercept shows us the initial height of the object. The $y$-intercept, in other words, is where $x=0$, or in this case where time is zero $(t=0)$. 

### Factored Form: $y=a(x-p)(x-q)$

**************************************The $a$ value**

The $a$ value in the factored form works in exactly the same way as in the general form. If need a reminder, [click here to jump back to those notes](https://www.notion.so/Quadratic-Equations-Models-Systems-cf5c458f549048d0bf5fafefb39a7cdc?pvs=21).

****************************The constants $p$ and $q$**

The constants $p$ and $q$ show us  [the solutions](https://www.notion.so/Quadratic-Equations-Models-Systems-cf5c458f549048d0bf5fafefb39a7cdc?pvs=21) of the quadratic function. So if we have a quadratic function like this,

$$
y=(x-5)(x+7)
$$

its graph will cross the $x$-axis at $5$ and $-7$. Notice that we had to switch the signs! This is because we want values of $x$ that make $y=0$, which is another way of saying we want to find the $x$-intercepts, which is where $y$ is equal to zero. Therefore if $x=5$ we would get:

$y=(5-5)(5+7)$

$y=0*12=0$

So when $x=5$,  $y=0$ and $5$ is thus a solution to the quadratic.

And if $x=-7$ we would get:

$y=(-7-5)(-7+7)$

$y=-12*0=0$

So when $x=-7$,  $y=0$ and $-7$ is thus a solution to the quadratic.

******************************************The axis of symmetry & the vertex******************************************

To find the axis of symmetry, we can simply find the midpoint of the solutions. 

[https://www.desmos.com/calculator/cbhldrkvbt](https://www.desmos.com/calculator/cbhldrkvbt)

### ************************Vertex Form: $y=a(x-h)^2+k$**

The vertex form of a quadratic explicitly shows the coordinates of the vertex as constants $h$ and $k$. Try moving the sliders around to see how the values of $h$ and $k$ relate to the vertex:

[https://www.desmos.com/calculator/wqth0g7xc3](https://www.desmos.com/calculator/wqth0g7xc3)

**************************************The $a$ value**

The $a$ value in the factored form works in exactly the same way as in the general form. If need a reminder, [click here to jump back to those notes](https://www.notion.so/Quadratic-Equations-Models-Systems-cf5c458f549048d0bf5fafefb39a7cdc?pvs=21).

****************************The constants $h$ and $k$**

The constants $h$ and $k$ show us the coordinates of the vertex of our quadratic function. So if we have a quadratic function in the form of $y=a\left(x-h\right)^{2}+k$ , like this,

$$
y=\left(x-7\right)^{2}+2
$$

the vertex will be equal to $(7, 2)$ , where $h=7$ (the x-coordinate of the vertex) and $k=2$ (the y-coordinate of the vertex). 

**************************************************Solving quadratic equations from the vertex form**************************************************

In most cases solving a quadratic equation will be easiest using desmos. But if you’re aiming for a very high math score, you’ll need to know how to manipulate and solve quadratics by hand. So let’s look at how to best accomplish this for equations in the vertex form.

*******Example*******

Given this system of equations,

$$
y=5\left(x+2\right)^{2}+10 \\ y=90
$$

for what value of $x$ does the equations intersect?

Whenever we want to find the intersection of two functions, we can always start by setting the two equal to one another, like this:

$$
90=5\left(x+2\right)^{2}+10
$$

Now we just need to solve this quadratic. There are two approaches, one of which is pretty horrendous. Let’s look at that way first.

1. **The horrendous way**
    
    First we expand and move everything to right hand side of the equation:
    
    $$
    90=5\left(x^{2}+4x+4\right)+10 \\ 90=5x^{2}+20x+20+10 \\ 0=5x^{2}+20x-60
    $$
    
     Now we have to factor this thing. The best is to first factor out the 5, then factor the remaining quadratic:
    
    $$
    0=5\left(x^{2}+4x-12\right) \\ 0=5\left(x+6\right)\left(x-2\right)
    $$
    
    Now we can see that for the right hand side to equal 0, these statements must be true:
    
    $$
    x+6=0 \\ x-2=0
    $$
    
    and therefore
    
    $$
    x=\left\{-6,\ 2\right\}
    $$
    
2. ************************The better way************************
    
    First ask yourself, why was the previous method so painful? Well, it’s because we made a mess of everything when we expanded the brackets, and then we had to clean that mess up when we factored it again. So the best would be if we could ************************************************************avoid breaking open the brackets in the first place.************************************************************  
    
    $$
    90=5\left(x+2\right)^{2}+10 \\ 80=5\left(x+2\right)^{2} \\ 16=\left(x+2\right)^{2} \\ \pm\sqrt{16}=x+2 \\ \pm4=x+2 \\ x=-2\pm4
    $$
    
    This leaves us with two possible values of $x$ :
    
    $$
    x=\left\{-6,\ 2\right\}
    $$
    
    It’s about as many lines of algebra, but those lines are **wa**y easier to produce.
    

********************Determining the number of solutions********************

If $-k/a>0$, the quadratic has two solutions

If $-k/a=0$, the quadratic has 1 solution

If $-k/a<0$, the quadratic has 0 solutions

   

[Untitled Graph](https://www.desmos.com/calculator/o2ltbhjatm)

## Applications

- **Sample Question ([CBD2.04U.22](https://www.notion.so/CBD2-04U-22-55db5677c8ee4b1ebbed9d31f6162614?pvs=21))**
    
    <aside>
    🔥 **difficulty 5/5**
    
    </aside>
    
    <aside>
    ⛔ **spoilers**: digital test 2
    
    </aside>
    
    $$
    f(x)=ax^2-4x+c
    $$
    
    1. In the given quadratic function, $a$ and $c$ are constants. The graph of $y=f(x)$ in the $xy$-plane is a parabola that opens upward and has a vertex at the point $(h,k)$ where $h$ and $k$ are constants. If $k<0$ and $f(9)=f(3)$, which of the following must be true? (CBD-2-98)
        
        I. $c<0$
        
        II. $a\le1$
        
        1. I only
        2. II only
        3. I and II
        4. Neither I nor II
        
        - ****************Solutions****************
            - **************With algebraic manipulation (bad)**************
                
                $$
                f\left(x\right)=ax^{2}+4x+c \\ f\left(-9\right)=81a-36+c \\ f\left(3\right)=9a+12+c \\ f\left(-9\right)=f\left(3\right) \\  81a-36+c=9a+12+c \\ 81a-36=9a+12 \\  72a=48 \\ a=\frac{48}{72} \\ a=\frac{2}{3}
                $$
                
                Now we plug our value of $a$ back into the original function,
                
                $$
                f\left(x\right)=\frac{2}{3}x^{2}+4x+c
                $$
                
                and we consider the other piece of information in the problem, which we have haven’t used yet:
                
                $$
                k<0
                $$
                
                This means that the $[y$-coordinate of the vertex should be less than zero](https://www.notion.so/Quadratic-Equations-Models-Systems-cf5c458f549048d0bf5fafefb39a7cdc?pvs=21). To find the $y$-coordinate of the vertex from the general form, [we can first find the $x$-coordinate by using $-b/2a$](https://www.notion.so/Quadratic-Equations-Models-Systems-cf5c458f549048d0bf5fafefb39a7cdc?pvs=21) . So, given our function:
                
                $$
                f\left(x\right)=\frac{2}{3}x^{2}+4x+c
                $$
                
                the $x$-coordinate of the vertex will be:
                
                $$
                x_{v}=-\frac{b}{2a}=-\frac{4}{2\cdot\left(\frac{2}{3}\right)} \\x_{v}=-\frac{b}{2a}=-\frac{4}{\frac{4}{3}}\\x_{v}=-\frac{b}{2a}=-4\cdot\frac{3}{4}=-3\\x_{v}=-3
                $$
                
                Now we plug our value of $x$ into the original function to get the $y$-value of the vertex in terms of $c$
                
                $$
                f\left(-3\right)=y_{v}=\frac{2}{3}\left(-3\right)^{2}+4\left(-3\right)+c \\ y_{v}=\frac{2}{3}\cdot9-12+c \\ y_{v}=6-12+c \\ y_{v}=-6+c
                $$
                
                And we want $y_v<0$ , so we can say that
                
                $$
                -6+c<0 \\ c<6
                $$
                
                and as a reminder, we also have that $a=2/3$. Let’s look at the statements again. The question asks, Which of the following ******must****** be true?
                
                I. $c<0$
                
                II. $a\le1$
                
                1. I only
                2. II only
                3. I and II
                4. Neither I nor II
                
                **Statement I is false** because $c$ could equal $5$, for example, and the parabola would still have its vertex below the $x$-axis.
                
                **Statement II is true** because $2/3 < 1$
                
            - **********************With desmos (good)**********************
                
                [https://www.desmos.com/calculator/y6b6grh6fk](https://www.desmos.com/calculator/y6b6grh6fk)
                
            
    
- ******************************Sample Question******************************
    
    For what value of h would the system of equations have just one solution?
    
    $$
    y=\left(x-h\right)^{2}+7 \\ y=3x
    $$
    
    - ****************Solution****************
        
        [https://www.desmos.com/calculator/qizrkxludp](https://www.desmos.com/calculator/qizrkxludp)
        
    
- **Sample Question**
    
    <aside>
    🔥 **difficulty 6/5  (harder than the real test)**
    
    </aside>
    
    For what value of  would the system of equations below have just one solution?
    
    $$
    y=a\left(x-5\right)^{2}+7 \\ y=-2x+8
    $$
    
    - **Solutions**
        
        [https://www.desmos.com/calculator/al1cp1qumt](https://www.desmos.com/calculator/al1cp1qumt)
        

## Rearranging & Isolating

### Sample Questions

---

$$
\frac{x^{2}}{\sqrt{x^{2}-c^{2}}}=\frac{c^{2}}{\sqrt{x^{2}-c^{2}}}+39
$$

1. In the given equation, $c$ is a positive constant. Which of the following is one of the solutions to the given equation? (CBD-2-97)
    - **Solution**
        
        **************With algebraic manipulation (TODO)**************
        
        **With desmos**
        
        [https://www.desmos.com/calculator/yfgxrce3mc](https://www.desmos.com/calculator/yfgxrce3mc)
        

## notes

- Advanced
    - Factoring quadratic & polynomial expressions
    - Radicals & rational exponents
    - Operations with polynomials
    - Operations with rational expressions
    - Nonlinear functions
    - Isolating quantities
    - Solving quadratic equations
    - Linear & quadratic systems
    - Radical, rational, and absolute value equations
    - Quadratic & exponential word problems
    - Quadratic graphs
    - Exponential graphs
    - Polynomial & other nonlinear graphs
