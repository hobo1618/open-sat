---
sidebar_position: 2
draft: true
slug: "vertex-form"
---
# The Vertex Form 

## the general form (aka standard form)
### interpreting the model
this is the general form of a parabola, the form you are probably most familiar with:

$$y=ax^2+bx+c$$


#### the *a* value
the *a* value tells us two things:
1. whether the parabola opens upwards or downwards
2. how quickly the parabola is increasing or decreasing

the first is the more important concept, by far.
no matter what your current score is, you should understand this:

if $a>0$ , then the parabola opens upwards.
if $a<0$ , then the parabola opens downwards. that's it.

have a look for yourself:

<DesmosDetails id="seechwqkad" summary="try sliding the a value around, see what happens." />

The *a* value also tells us how quickly the parabola is increasing or decreasing.

More specifically, it tells how much the function increases if we take one step along the $x$-axis,
starting from the vertex. *Wha?*

Let's look at an example.

Imagine we have a parabola with this equation:

$$y=3x^2+6x+4$$

Which produces this graph:

<!-- TODO: add graphs -->

Notice the vertex is at $(-1, 1)$.
If we now take one step to the right, how many steps up do we need to go to rejoin the curve?

<DesmosDetails summary="Try it yourself" />

Notice it's kind of like the slope of a linear equation: *rise* / *run* .

So what would be the $a$ value of these graphs?

<!-- TODO: add graphs -->


#### The $c$-value

The $c$-value is simply the $y$-intercept of the parabola.
If $c>0$, then the curve will have a positive $y$-intercept.
If $c<0$, then the curve will have a negative $y$-intercept.

What are the $c$ values for the following graphs?

<!-- TODO: add graphs -->


### Finding the vertex

To find the vertex, we need to do a little more work, but not much.
Given the general form, $y=ax^2+bx+c$,
we can easily find the *axis* of symmetry by calculating:

$$x=-b/2a$$

This will give us the $x$-value of the vertex. 
To find the $y$-value, then, all we need to do is plug the $x$-value into the function:

$$y=f(\frac{-b}{2a})$$


Let's look at an example. Given the following function $f$,

$$f(x)=2x^2+12x+7$$

What are the coordinates of the vertex?

1. Figure out the $x$-coordinate (or axis of symmetry) by simply taking $-b/2a$:

$$b=12$$, $$a=2$$

$$x=\frac{-b}{2a} = \frac{-12}{2*2}$$

$$x=\frac{-12}{4}$$

$$x=-3$$

Now we need to find the $y$-value.
All we have to do is plug $x=-3$ into the function, like so:

$$f(-3)=2(-3)^2+12(-3)+7$$

$$f(-3)=2*9-36+7$$

$$f(-3)=18-36+7$$

$$f(-3)=-11$$


<!-- TODO: add desmos illustration -->

Try finding the coordinates of the vertex for the following equations:

<!-- TODO: add exercises -->

### Finding solutions

We can find the solutions in a few different ways:
1. Graphing the function on desmos
2. Factoring the quadratic
3. Completing the square
4. Using the quadratic formula

We won't be covering desmos here.
If you are unclear on how to solve equations using desmos,
it's absolutely vital that you first 'check out the [desmos](/docs/math/desmos/applications.md) section. 

So let's skip to method #2. Factoring 

#### Factoring 

Some quadratics are best solved by simply transforming the general form into the [factored form](#the-factored-form-aka-intercept-form).

In short, this means transforming a quadratic from this form:

$$y=ax^2+bx+c$$

into this form:

$$y=a(x-p)(x-q)$$

We can then set $y=0$ (where the $x$-intercepts are),
and solve for $x$ using the [null product rule](/docs/math/algebra/slope-intercept-form.md). 

But how do we actually transform the first form into the second?

There are many methods for factoring quadratics, but I won't be getting into all of them here. 
If you want more information on how to factor quadratics,
there are probably thousands of great resources a few clicks away. 

Nevertheless, I'll go over a few simple examples to show you what you are expected to understand:

##### No $c$ term

*Example 1:* $$y=x^2+7x$$

In this quadratic, we **don't have a $c$ term**, so factoring this function will be **very** easy.
All you have to do is take out the $x$:

$$y=x(x+7)$$

And the quadratic is factored. 

Any quadratic without a $c$ is basically this easy to solve. 
So if you are tasked with solving one of these,
and you frequently will be, 
you probably shouldn't reach for a more complicated tool than factoring.

Let's look at a slightly harder (but still easy) example:

*Example 2:* $$y=4x^2+8x$$

Again, no $c$ term, so we can simply factor out an $x$.
But we can also factor out the $4$,
since both the $a$ and $b$ terms are divisible by $4$. This gives us the following factored quadratic:

$$y=4x(x+2)$$

##### No $a$ term

If you don't have an $a$ term, then the quadratic **may** factor easily enough. 
What you need to look for are two numbers the multiply to give $c$ 
and add up to give $b$.

*Example 1*: $$y=x^2+8x+15$$

We can factor this quadratic by finding two values that:
- add up to give $8$
- multiply to give $15$

In this case, $3$ and $5$ do the trick, which gives us the following factored quadratic:

$$y=(x+3)(x+5)$$

##### Try some

<!-- TODO: exercises -->

#### Completing the square

Sometimes, however, you will be tasked with a quadratic that looks simple enough,
but doesn't actually factor:

$$y=x^2 + 8x + 3$$

Can you think of two numbers that add up to give $8$ and multiply to give $3$?
No. You can't. So stop trying.

The problem is that the $c$ value is too small.
It only as $1$ and $3$ as factors, so you won't be able reach $8$ by adding them up.
This is a pretty common tell, by the way. 
If you see a quadratic with a small $c$ value and a large $b$ value, 
it probably won't factor.

So what do you do?

Here [desmos](/docs/math/desmos/applications.md) is probably a great option,
especially if you are scoring the 500-650 range. 
But if you are aiming higher, 
you will need to know how to do this sort of thing by hand.

This is where *completing the square* comes in.

When we *complete the square*,
we transform an equation from the general form into the [vertex form](#the-vertex-form-aka-turning-point-form),
<!-- TODO: change the link below to be more targeted -->

$$y=ax^2+bx+c$$

becomes

$$y=a(x-h)^2+k$$

which makes it much easier [to solve](#the-vertex-form-aka-turning-point-form).

So how do we transform the function from one form to the other?

Let's start by looking at the vertex form more closely:

$$y=a(x-h)^2+k$$

This is basically a perfect square, $(x-h)^2$ , plus a number $k$ lobbed onto the end.
So if we can transform our original quadratic into a perfect square plus some number,
we can factor *part* of the quadratic into a perfect square.

Let's look at the example from earlier:

$$y=x^2 + 8x + 3$$

If we just take the first two terms, $x^2+8x$ ,
we can transform this into a perfect square by adding $16$.
This gives us a new quadratic with this equation:

$$x^2 + 8x + 16$$

Which can be factored into a perfect square:

$$(x+4)^2$$

Ok, so we have our perfect square,
now we need figure out the value of the constat $k$.

Well, since we added $16$ to the expression above,
we just need to subtract 16 from the $3$ to balance things out.

This means $k=3-16=-13$

And we are left with $y=(x+4)^2 -13$ 

Now we set $y=0$:

$0=(x+4)^2 -13$

And solve.

But how did we come up with the $16$???? That was pretty random.

There is a simple trick for figuring out what the magic number to add/subtract is.
You simply take the $b$ value, divide it by $2$, and square that result.

In our case, with this quadratic,

$$y=x^2 + 8x + 3$$

$b=8$, so $b/2=8/2=4$ by $2$. Then do $4^2=16$.

This works because of how perfect squares work when you expand them:

$$ (x+k)^2=x^2+2kx+k^2 = x^2+bx+c$$

If you look at the function on right, we see that 

$$c=k^2$$

$$b=2k$$

So the relationship between the $b$ and $c$ terms, 
is this:

$$b/2=k$$

$$c=(b/2)^2$$

Now, if you are given a quadratic like this one:

$$y=x^2+10x+4$$

You can quickly convert it into vertex form by adding $(10/2)^2=25$ to form a perfect square,
then subtracting the same amount to balance things out:

$$y=x^2+10x+25-25+4$$

$$y=(x+5)^2-25+4$$

$$y=(x+5)^2-21$$x

<!-- TODO: try some yourself -->



#### The Quadratic Formula

If all else fails, you can always use the quadratic formula to solve any quadratic.
**But this is rarely a good idea*.

Nevertheless, it's a handy back-up, so make sure to memorize it:

$$
x=\frac{-b}{2a}\pm\frac{\sqrt{b^{2}-4ac}}{2a}
$$

The formula is composed of two parts:
1. the [x-coordinate of the vertex](#finding-the-vertex) $(-b/2a)$;
2. the number of steps to reach the solutions from the axis of symmetry. 

To figure out the number of solutions to a quadratic, you can use the *discriminant*, i.e. the bit underneath the root:

$$b^{2}-4ac$$

$b^2-4ac>0$  ⇒ this means the quadratic has $2$ solutions.

$b^2-4ac=0$  ⇒ this means the quadratic has $1$ solution.

$b^2-4ac<0$  ⇒ this means the quadratic has $0$ solutions.


Assuming the quadratic has solutions, all you have to do is plug your values of $a$, $b$, and $c$ into the formula above,
and you'll get your solutions.
For example, the solutions of the following function can be found using the quadratic formula:

$$0=3x^2+6x-4$$

In this equation, $a=3$, $b=6$, and $c=-4$.

Plugging this into the quadratic formula, we get:

$$ x=\frac{-(6)}{2(3)}\pm\frac{\sqrt{(6)^{2}-4(3)(-4)}}{2(3)} $$

$$ x=-1\pm\frac{\sqrt{36+48}}{6} $$

$$ x=-1\pm\frac{\sqrt{84}}{6} $$

$$ x=-1\pm\frac{2\sqrt{21}}{6} $$

$$ x=-1\pm\frac{\sqrt{21}}{3} $$


Not a ton of fun.

Which is why you should really just use desmos on just about all problems that cannot
be solved by factoring or completing the square.

That said, there are some rare questions where using the quadratic formula is the best method. 
In those problems, there is often one important step you need to take before plugging your values
for $a$, $b$, and $c$ into the formula. Have a look at this quadratic:

$$0=3x^2+6x+18$$

What should you do first? 

That's right, divide everything by $3$.
Just look at how much easier things are if you simplify first:

*not simplifying first*

$$0=3x^2+6x-18$$

$a=3$, $b=6$, $c=-18$

$$ x=\frac{-(6)}{2(3)}\pm\frac{\sqrt{(6)^{2}-4(3)(-18)}}{2(3)} $$

$$ x=-1\pm\frac{\sqrt{36+216}}{6} $$

$$ x=-1\pm\frac{\sqrt{252}}{6} $$

$$ x=-1\pm\frac{\sqrt{4*63}}{6} $$

$$ x=-1\pm\frac{2\sqrt{63}}{6} $$

$$ x=-1\pm\frac{2\sqrt{9*7}}{6} $$

$$ x=-1\pm\frac{6\sqrt{7}}{6} $$

$$ x=-1\pm\sqrt{7} $$

*simplifying first*

$$0=3x^2+6x-18$$

$$0=x^2+2x-6$$

$a=1$, $b=2$, $c=-6$

$$ x=\frac{-(2)}{2}\pm\frac{\sqrt{(2)^{2}-4(1)(-6)}}{2} $$

$$ x=-1\pm\frac{\sqrt{4+24}}{2} $$

$$ x=-1\pm\frac{\sqrt{28}}{2} $$

$$ x=-1\pm\frac{\sqrt{4*7}}{2} $$

$$ x=-1\pm\frac{2\sqrt{7}}{2} $$

$$ x=-1\pm\sqrt{7} $$

Both are pretty annoying, but the second is still less work.

This is especially helpful when you have fractional coefficients. For example,

$$0=\frac{3}{2}x^2+5x+\frac{9}{2}$$

Should be multiplied by $2$ to get

$$0=3x^2+10x+9$$

and

$$0=\frac{5}{3}x^2+\frac{1}{2}x+\frac{7}{2}$$

Should be multiplied by $6$ to get

$$0=10x^2+3x+21$$

<!-- TODO: get problems from old SAT to illustrate the point -->


### "Real World" Problems

Most “real world” word problems involving quadratics describe some kind of object flying through the air. This could be a ball or a spear or whatever. A typical model, where $t$ is time and $h$ is height, might look like this:

$$
h(t)=-t^2+2.25t+1.5
$$

<iframe 
    width="100%" 
    height="500px" 
    src="https://www.desmos.com/calculator/j1vnklpflq?embed"
/>

In this model, the function $h$ shows the height of an object flying through the air over time.
You can even visualize the object starting on the left hand side of the graph and ending on the floor on the right hand side.
The $y$-intercept shows us the initial height of the object.
The $y$-intercept, in other words, is where $x=0$, or in this case where time is zero $(t=0)$. 





## The Vertex Form (aka Turning Point Form)

### Interpreting the Model

<aside>
⛔ Notice that we have to be careful with the signs here. In short, we have to switch the sign of the x-coordinate $h$ , but not the y-coordinate $k$.

Here are some more examples:

$y=\left(x+2\right)^{2}+3$ has a vertex of $(-2, 3)$

$y=\left(x-2\right)^{2}+3$ has a vertex of $(2, 3)$

$y=\left(x+2\right)^{2}-3$ has a vertex of $(-2, -3)$

$y=\left(x-2\right)^{2}-3$ has a vertex of $(2, 3)$

</aside>
### Solving Equations


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



## The Factored Form (aka Intercept Form)

### Interpreting the Model

<aside>
⚠️ **Don’t forget to change the sign** when you read the solutions from the factored form! **This is major source of careless errors on the SAT.**

❌ $0=(x+1)(x-10)$  ⇒  $x=\left\{-10,\ 1\right\}$  ************wrong!************

✅ $0=(x+1)(x-10)$  ⇒  $x=\left\{-1,\ 10\right\}$  ************right!************

</aside>
### Solving Equations


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


## Solution Sets?
## Applied problems?













## Theory

### Factored Form: $y=a(x-p)(x-q)$


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
