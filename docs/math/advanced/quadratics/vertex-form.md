---
sidebar_position: 2
slug: "vertex-form"
---
# The Vertex Form 

## interpreting the model
This is the vertex form of a parabola:

$$y=a(x-h)^2+k$$

The vertex form, also known as the *turning point* form is designed to show the coordinates of the minimum/maximum.

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

There's definitely more to say about the $a$-value,
but it's all the same as for [standard form of a parabola](/docs/math/advanced/quadratics/standard-form.md),
which is covered in some detail [here](/docs/math/advanced/quadratics/standard-form.md#the-a-value).
Make sure to read that first.


### The $h$ and $k$-values

The $h$ and $k$ values are simply the coordinates of the vertex.

If you have a quadratic in vertex form like this, for example:

> $$f(x)=(x-3)^2+7$$

The vertex of the parabola will be at $(3,7)$.

That's it. 

<!-- TODO: #links add link uncreated transformations -->
Why? If you know anything about transformations,
you'll recall that we can translate any function to left or right
by adding or subtracting a number from the $x$. 

> $f(x-h)$ is equivalent to $f(x)$ shifted $h$ spaces along the $x$-axis. 

And we can translate any function up or down by adding or subtracting a 
number to the entire function:

> $f(x) + k$ is equivalent to $f(x)$ shifted $k$ spaces along the $y$-axis. 

So you can think the vertex form of the parabola as being a regular old $y=x^2$ parabola
that's been shifted $h$ spaces horizontally and $k$ spaces vertically.

Just to be clear, the $a$-value doesn't have any effect on the location of the vertex.
So this function:

$$
f(x)=5(x-2)^2+7
$$

has its vertex at $(2, 7)$, and the $5$ has no effect its location.

<DesmosDetails summary="Try messing around with some a values to see for yourself" id="whj0rsaw87" />

### Exercise
What are coordinates of the vertex for each of the following quadratics?

<details>
    <summary>$y=(x-5)^2+8$</summary>

    The vertex is at $(5, 8)$
</details>
<details>
    <summary>$y=(x+1)^2-2$</summary>

    The vertex is at $(-1, -2)$
</details>
<details>
    <summary>$f(x)=(x-11)^2-11$</summary>

    The vertex is at $(11, -11)$
</details>
<details>
    <summary>$f(x)=(x+2)^2-2$</summary>

    The vertex is at $(-2, -2)$
</details>
<details>
    <summary>$f(x)=3(x+4)^2-5$</summary>

    The $a$-value has no impact on the vertex,
    so the vertex is simply at $(-4, -5)$,
    just like for the other examples.
</details>
<details>
    <summary>$g(x)=-(x+7)^2-12$</summary>

    The negative $a$-value also has no impact on the vertex,
    so the vertex is simply at $(-7, -12)$,
    just like for the other examples.
</details>
<details>
    <summary>$p(x)=(x+2a)^2-3b$</summary>

    Don't let the letters confuse you!
    $2a$ is just a number,
    as is $3b$.
    So the vertex is at $(-2a, -3b)$
</details>


## Finding the solutions

Given the vertex form of a parabola,
there are two reasonable methods for finding the solutions,
and one terrible one:

1. Graphing the function on desmos (reasonable)
2. Taking the square root of both sides (reasonable)
3. Expanding the brackets, then [solving from the standard form of a parabola ](/docs/math/advanced/quadratics/standard-form.md#finding-solutions) (terrible).

We won't be covering desmos here.
If you are unclear on how to solve equations using desmos,
it's absolutely vital that you first 'check out the [desmos](/docs/math/desmos/applications.md) section. 

So let's skip to method #2. Taking the square root of both sides. 

### Square rooting both sides 

The vertex form of a parabola is actually one of the easiest forms to solve 
<!-- TODO: #link -->
(other than the $x$-intercept form).

Let's look at an example. 

> Given the function $f(x)=(x-4)^2-9$, find the $x$-intercepts of the $f$

<!-- TODO: #link -->
For starters, to get the $x$-intercepts of any function we need to set the function equal to zero. This gives us:

$$
0=(x-4)^2-10
$$

So now what? 
This often where students get unreasonable and skip to method number 3 above,
which is terrible.

<details>
    <summary>Here's what terrible method looks like:</summary>

    $0=(x-4)^2-10$

    $0=x^2-8x+16-10$

    $0=x^2-8x+6$

    This, alas, does not factor.

    So can complete the square, 
    which takes us back to where we started,
    or we can use the quadratic formula, 

    $$
    x=\frac{-b}{2a}\pm\frac{\sqrt{b^{2}-4ac}}{2a}
    $$

    where $a=1$, $b=-8$, $c=6$.

    This gives us the following:

    $$
    x=\frac{-\left(-8\right)}{2\left(1\right)}\pm\frac{\sqrt{\left(-8\right)^{2}-4\left(1\right)\left(6\right)}}{2\left(1\right)}
    $$

    $$
    x=\frac{8}{2}\pm\frac{\sqrt{64-24}}{2}
    $$

    $$
    x=4\pm\frac{\sqrt{40}}{2}
    $$

    $$
    x=4\pm\frac{\sqrt{4\cdot10}}{2}
    $$

    $$
    x=4\pm\frac{\sqrt{4}\cdot\sqrt{10}}{2}
    $$

    $$
    x=4\pm\frac{2\cdot\sqrt{10}}{2}
    $$

    $$
    x=4\pm\sqrt{10}
    $$

</details>

Now let's compare that to the better way. Starting with this, again.

$$
0=(x-4)^2-10
$$

We should first move the $10$ over to the left.

$$
10=(x-4)^2
$$

Now we can simply take the square root of both sides to give this:

$$
\pm\sqrt{10}=x-4
$$

:::danger
Don't forget the damned plus-minus symbol $\pm$!
:::

and now we just isolate $x$:

$$
x=4\pm\sqrt{10}
$$

And that's it.

Compare it the terrible method now. Which would you rather do? Duh.

One basic tip to always keep in mind is this:

:::tip
Don't expand brackets unless you must.
:::

Expressions in brackets are, by definition, we structured,
so when you expand you are basically making a mess 
that you'll have to clean up later. 
And while that may well be necessary at times, 
it often leads to unnecessary steps, pain, and heartbrake.
So don't do it.


## Solution Sets

It's not commonly asked for the vertex form, but we can pretty easily find the number of solutions by considering the following:

$$
f(x)=a(x-h)^2+k
$$

$$
0=a(x-h)^2+k
$$

$$
-k=a(x-h)^2
$$

$$
\frac{-k}{a}=(x-h)^2
$$

Now if we want to solve the equation,
the next step would be to take the square root of both sides.

But if $-k/a$ is negative, it won't work. 
So if $-k/a<0$, the quadratic has 0 solutions.

And if $-k/a=0$, then $\sqrt{\frac{-k}{a}}=0$ 
so we lose the $\pm$ symbol and there is only one solution.

Lastly, if $-k/a>0$, the quadratic has two solutions.

:::tip
$-k/a<0$ => the quadratic has 0 solutions.

$-k/a=0$ => the quadratic has 1 solutions.

$-k/a>0$ => the quadratic has 2 solutions.
:::

## "Real World" Problems

Most “real world” word problems involving quadratics describe some kind of object flying through the air.
This could be a ball or a spear or whatever.
A typical model, where $t$ is time and $h$ is height, might look like this:

$$
h(t)=-3(t-2)^2+25
$$

<iframe 
    width="100%" 
    height="500px" 
    src="https://www.desmos.com/calculator/ww53z3vgw7?embed"
/>

In this model, the function $h$ shows the height of an object flying through the air over time.
You can even visualize the object starting on the left hand side of the graph and ending on the floor on the right hand side.

When the quadratic model is in the vertex form,
the values of $h$ and $k$ tell us where the object reaches its lowest or, in this case, highest point.

So if you see a real-world quadratic modelling problem where the model is in the vertex form,
you should already anticipate that the answer will probably include the words
*minimum* / *maximum* / *highest* / *lowest*.


<!-- TODO: #exercises -->
<!-- ## Exercises -->
