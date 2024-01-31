---
sidebar_position: 0
slug: "standard-form"
---
# The Standard Form

## interpreting the model
this is the general form of a parabola, the form you are probably most familiar with:

> $$y=ax^2+bx+c$$


### the *a* value
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

> $$y=3x^2-30x+80$$

Which produces this graph:


<iframe src="https://www.desmos.com/calculator/ehieg4tux1?embed" width="500" height="500" />

Notice the vertex is at $(5, 5)$ and if we take one step to the right, we have to take 3 steps up
to get back to the curve at the point $(6, 8)$.
That vertical change of 3 is what the $a$ value tells us in the quadratic function.

<DesmosDetails summary="Try messing around with some a values to see for yourself" id="79bo1scajt" />

Notice it's kind of like the slope of a linear equation: *rise* / *run* .

So what would be the $a$ value of these graphs?

<iframe src="https://www.desmos.com/calculator/obkpsanmvk?embed" width="500" height="500" />
<details>
  <summary>What is the $a$-value for the graph above?</summary>

    The $a$-value is 2 because the curve *rises* by two steps for one step to the right from the vertex.
</details>

<iframe src="https://www.desmos.com/calculator/ul9lhkhd1o?embed" width="500" height="500" />
<details>
  <summary>What is the $a$-value for the graph above?</summary>

    The $a$-value is 4 because the curve *rises* by four steps for one step to the right from the vertex.
</details>

<iframe src="https://www.desmos.com/calculator/u3nrp1pnx1?embed" width="500" height="500" />
<details>
  <summary>What is the $a$-value for the graph above?</summary>

    The $a$-value is -2 because the curve *decreases* by two steps for one step to the right from the vertex.
</details>


### The $c$-value

The $c$-value is simply the $y$-intercept of the parabola.
If $c>0$, then the curve will have a positive $y$-intercept.
If $c<0$, then the curve will have a negative $y$-intercept.

What are the $c$ values for the following graphs?

<iframe src="https://www.desmos.com/calculator/ifp2woky8b?embed" width="500" height="500" />
<details>
  <summary>What is the $c$-value for the graph above?</summary>

    The $c$-value is 7 because the curve intersects the $y$ axis at a height of $7$.
</details>

<iframe src="https://www.desmos.com/calculator/lq5lxoeym5?embed" width="500" height="500" />
<details>
  <summary>What is the $c$-value for the graph above?</summary>

    The $c$-value is 2 because the curve intersects the $y$ axis at a height of $7$.
</details>

<iframe src="https://www.desmos.com/calculator/dtpdplrwcc?embed" width="500" height="500" />
<details>
  <summary>What is the $c$-value for the graph above?</summary>

    The $c$-value is -5 because the curve intersects the $y$ axis at a height of $-5$.
</details>


## Finding the vertex

To find the vertex, we need to do a little more work, but not much.
Given the general form, $y=ax^2+bx+c$,
we can easily find the *axis* of symmetry by calculating:

> $$x=-b/2a$$

This will give us the $x$-value of the vertex. 
To find the $y$-value, then, all we need to do is plug the $x$-value into the function:

> $$y=f(\frac{-b}{2a})$$


Let's look at an example. Given the following function $f$,

> $$f(x)=2x^2+12x+7$$

What are the coordinates of the vertex?

> 1. Figure out the $x$-coordinate (or axis of symmetry) by simply taking $-b/2a$:
>
> > $$b=12$$, $$a=2$$
> > 
> > $$x=\frac{-b}{2a} = \frac{-12}{2*2}$$
> > 
> > $$x=\frac{-12}{4}$$
> > 
> > $$x=-3$$
>
> 2. Now we need to find the $y$-value.
All we have to do is plug $x=-3$ into the function, like so:
>
> > $$f(-3)=2(-3)^2+12(-3)+7$$
> > 
> > $$f(-3)=2*9-36+7$$
> > 
> > $$f(-3)=18-36+7$$
> > 
> > $$f(-3)=-11$$

Try finding the coordinates of the vertex for the following equations:

<details>
    <summary>$$y=x^2+8x+8$$</summary>

    $$x_{v}=-\frac{b}{2a}=-\frac{8}{2}=-4$$

    $$y_{v}=\left(-4\right)^{2}+8\left(-4\right)+8$$

    $$y_{v}=16-32+8$$

    $$y_{v}=-8$$

    The vertex is, therefore, at $(-4, -8)$
</details>
<details>
    <summary>$$y=3x^{2}+12x+2$$</summary>

    $$x_{v}=-\frac{b}{2a}=-\frac{12}{6}=-2$$

    $$y_{v}=3\left(-2\right)^{2}+12\left(-2\right)+2$$

    $$y_{v}=12-24+2$$

    $$y_{v}=-10$$

    The vertex is, therefore, at $(-2, -10)$
</details>

## Finding solutions

We can find the solutions in a few different ways:
1. [Graphing the function on desmos](/docs/math/desmos/applications.md)
2. [Factoring the quadratic](#factoring)
3. [Completing the square](#completing-the-square)
4. [Using the quadratic formula](#the-quadratic-formula)

We won't be covering desmos here.
If you are unclear on how to solve equations using desmos,
it's absolutely vital that you first 'check out the [desmos](/docs/math/desmos/applications.md) section. 

So let's skip to method #2. Factoring 

### Factoring 

Some quadratics are best solved by simply transforming the general form into the [factored form](#the-factored-form-aka-intercept-form).

In short, this means transforming a quadratic from this form:

> $$y=ax^2+bx+c$$

into this form:

> $$y=a(x-p)(x-q)$$

We can then set $y=0$ (where the $x$-intercepts are),
and solve for $x$ using the [null product rule](/docs/math/algebra/slope-intercept-form.md). 

But how do we actually transform the first form into the second?

There are many methods for factoring quadratics, but I won't be getting into the details here. 
If you want more information on how to factor quadratics,
there are probably thousands of great resources a few clicks away. 

Nevertheless, I'll go over a few simple examples to show you what you are expected to understand:

#### No $c$ term

*Example 1:* 

> $$y=x^2+7x$$

In this quadratic, we **don't have a $c$ term**, so factoring this function will be **very** easy.
All you have to do is take out the $x$:

> $$y=x(x+7)$$

And the quadratic is factored. 

Any quadratic without a $c$ is basically this easy to solve. 
So if you are tasked with solving one of these,
and you frequently will be, 
you probably shouldn't reach for a more complicated tool than factoring.

Let's look at a slightly harder (but still easy) example:

*Example 2:* 

> $$y=4x^2+8x$$

Again, no $c$ term, so we can simply factor out an $x$.
But we can also factor out the $4$,
since both the $a$ and $b$ terms are divisible by $4$. This gives us the following factored quadratic:

> $$y=4x(x+2)$$

#### No $a$ term

If you don't have an $a$ term, then the quadratic **may** factor easily enough. 
What you need to look for are two numbers the multiply to give $c$ 
and add up to give $b$.

*Example 1*: 

> $$y=x^2+8x+15$$

We can factor this quadratic by finding two values that:
- add up to give $8$
- multiply to give $15$

In this case, $3$ and $5$ do the trick, which gives us the following factored quadratic:

> $$y=(x+3)(x+5)$$

#### Try some

Try factoring the the expressions below.

<details>
    <summary>$$x^{2}+8x+12$$</summary>
    
    Find the sum and product:

    $$6+2=8$$

    $$6\cdot2=12$$

    Now you have your factors:

    $$x^{2}+8x+12=\left(x+6\right)\left(x+2\right)$$

</details>

<details>
    <summary>$$x^{2}-6x+5$$</summary>

    Find the sum and product:

    $$\left(-1\right)+\left(-5\right)=-6$$

    $$\left(-1\right)\cdot\left(-5\right)=5$$

    Now you have your factors:

    $$x^{2}-6x+5=\left(x-1\right)\left(x-5\right)$$
</details>

<details>
    <summary>$$x^{2}+11x-26$$</summary>

    Find the sum and product:

    $$13+\left(-2\right)=11$$

    $$13\cdot\left(-2\right)=-26$$

    Now you have your factors:

    $$x^{2}+11x-26=\left(x+13\right)\left(x-2\right)$$

</details>

### Completing the square

Sometimes, however, you will be tasked with a quadratic that looks simple enough,
but doesn't actually factor:

> $$y=x^2 + 8x + 3$$

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

> $$y=ax^2+bx+c$$

becomes

> $$y=a(x-h)^2+k$$

<!-- TODO: change the link below to be more targeted -->
which makes it much easier to solve.
<!-- which makes it much easier [to solve](#the-vertex-form-aka-turning-point-form). -->

So how do we transform the function from one form to the other?

Let's start by looking at the vertex form more closely:

> $$y=a(x-h)^2+k$$

This is basically a perfect square, $(x-h)^2$ , plus a number $k$ lobbed onto the end.
So if we can transform our original quadratic into a perfect square plus some number,
we can factor *part* of the quadratic into a perfect square.

Let's look at the example from earlier:

> $$y=x^2 + 8x + 3$$

If we just take the first two terms, $x^2+8x$ ,
we can transform this into a perfect square by adding $16$.
This gives us a new quadratic with this equation:

> $$x^2 + 8x + 16$$

Which can be factored into a perfect square:

> $$(x+4)^2$$

Ok, so we have our perfect square,
now we need figure out the value of the constat $k$.

Well, since we added $16$ to the expression above,
we just need to subtract 16 from the $3$ to balance things out.

This means $k=3-16=-13$

And we are left with $y=(x+4)^2 -13$ 

Now we set $y=0$:

> $0=(x+4)^2 -13$

And solve.

But how did we come up with the $16$???? That was pretty random.

There is a simple trick for figuring out what the magic number to add/subtract is.
You simply take the $b$ value, divide it by $2$, and square that result.

In our case, with this quadratic,

> $$y=x^2 + 8x + 3$$
>
> $b=8$, 

so 

> $b/2=8/2=4$

Then do 

> $4^2=16$.

This works because of how perfect squares work when you expand them:

> $$ (x+k)^2=x^2+2kx+k^2 = x^2+bx+c$$

If you look at the function on right, we see that 

> $$c=k^2$$
>
> $$b=2k$$

So the relationship between the $b$ and $c$ terms, 
is this:

> $$b/2=k$$
>
> $$c=(b/2)^2$$

Now, if you are given a quadratic like this one:

> $$y=x^2+10x+4$$

You can quickly convert it into vertex form by adding $(10/2)^2=25$ to form a perfect square,
then subtracting the same amount to balance things out:

> $$y=x^2+10x+25-25+4$$
> 
> $$y=(x+5)^2-25+4$$
> 
> $$y=(x+5)^2-21$$x

<!-- TODO: try some yourself -->



### The Quadratic Formula

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

> $b^2-4ac>0$  ⇒ this means the quadratic has $2$ solutions.
> 
> $b^2-4ac=0$  ⇒ this means the quadratic has $1$ solution.
> 
> $b^2-4ac<0$  ⇒ this means the quadratic has $0$ solutions.


Assuming the quadratic has solutions, all you have to do is plug your values of $a$, $b$, and $c$ into the formula above,
and you'll get your solutions.
For example, the solutions of the following function can be found using the quadratic formula:

$$
0=3x^2+6x-4
$$

In this equation, $a=3$, $b=6$, and $c=-4$.

Plugging this into the quadratic formula, we get:

$$ 
x=\frac{-(6)}{2(3)}\pm\frac{\sqrt{(6)^{2}-4(3)(-4)}}{2(3)}
$$

$$
x=-1\pm\frac{\sqrt{36+48}}{6}
$$

$$
x=-1\pm\frac{\sqrt{84}}{6}
$$

$$
x=-1\pm\frac{2\sqrt{21}}{6}
$$

$$
x=-1\pm\frac{\sqrt{21}}{3} 
$$


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

$$ 
0=3x^2+6x-18 
$$

So we know that $a=3$, $b=6$, $c=-18$

$$ 
x=\frac{-(6)}{2(3)}\pm\frac{\sqrt{(6)^{2}-4(3)(-18)}}{2(3)} 
$$

$$ 
x=-1\pm\frac{\sqrt{36+216}}{6} 
$$

$$ 
x=-1\pm\frac{\sqrt{252}}{6} 
$$

$$ 
x=-1\pm\frac{\sqrt{4*63}}{6} 
$$

$$ 
x=-1\pm\frac{2\sqrt{63}}{6} 
$$

$$ 
x=-1\pm\frac{2\sqrt{9*7}}{6} 
$$

$$ 
x=-1\pm\frac{6\sqrt{7}}{6} 
$$

$$ 
x=-1\pm\sqrt{7} 
$$

*simplifying first*

$$ 
0=3x^2+6x-18 
$$

$$ 
0=x^2+2x-6 
$$

So we know that $a=1$, $b=2$, $c=-6$

$$ 
x=\frac{-(2)}{2}\pm\frac{\sqrt{(2)^{2}-4(1)(-6)}}{2} 
$$

$$ 
x=-1\pm\frac{\sqrt{4+24}}{2} 
$$

$$ 
x=-1\pm\frac{\sqrt{28}}{2} 
$$

$$ 
x=-1\pm\frac{\sqrt{4*7}}{2} 
$$

$$ 
x=-1\pm\frac{2\sqrt{7}}{2} 
$$

$$ 
x=-1\pm\sqrt{7} 
$$

Both are pretty annoying, but the second is still less work.

This is especially helpful when you have fractional coefficients. For example,

$$0=\frac{3}{2}x^2+5x+\frac{9}{2}$$

Should be multiplied by $2$ to get

$$ 
0=3x^2+10x+9 
$$

and

$$ 
0=\frac{5}{3}x^2+\frac{1}{2}x+\frac{7}{2} 
$$

Should be multiplied by $6$ to get

$$ 
0=10x^2+3x+21
$$

<!-- TODO: get problems from old SAT to illustrate the point -->


## "Real World" Problems

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



