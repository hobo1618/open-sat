---
sidebar_position: 1
slug: "factored-form"
---
# The Factored Form 

## Interpreting the Model
This is the factored form, or $x$-intercept form of a parabola:

$$
f(x)=a(x-p)(x-q)
$$

### the *a* value
the *a* value tells us two things:
1. whether the parabola opens upwards or downwards
2. how quickly the parabola is increasing or decreasing

the first is the more important concept, by far.
no matter what your current score is, you should understand this:

if $a>0$ , then the parabola opens upwards.
if $a<0$ , then the parabola opens downwards. that's it.

have a look for yourself:

<DesmosDetails id="zv4ggng1hi" summary="try sliding the a value around, see what happens." />

The *a* value also tells us how quickly the parabola is increasing or decreasing.

There's definitely more to say about the $a$-value,
but it's all the same as for [standard form of a parabola](/docs/math/advanced/quadratics/standard-form.md),
which is covered in some detail [here](/docs/math/advanced/quadratics/standard-form.md#the-a-value).
Make sure to read that first.


### the $p$ and $q$-values

These tell you where to find the solutions to the parabola. Here's why.

When you want to know where the solutions, or $x$-intercepts, are,
you start by setting $y=0$.

$$
0=a(x-p)(x-q)
$$

Now we can divide by $a$ to get:

$$
0=(x-p)(x-q)
$$

And here's where we use the *null product* rule,
which you should remember from your high school classes. 

In short, the null product rule says that if two numbers multiply to give zero, 
then one or both of the numbers must be equal to zero.

So if $(x-p)(x-q)=0$, then 

$$
x-p=0
$$

or 

$$
x-q=0
$$

Solving for each possible value of $x$, we get that $x=\left\{p,\ q\right\}$

In other words, the solutions to the quadratic are simply given to us in the form,
which is why the form is called the $x$-intercept form to begin with. 

:::danger
⚠️ **Don’t forget to change the sign** when you read the solutions from the factored form! **This is major source of careless errors on the SAT.**

❌ $0=(x+1)(x-10)$  ⇒  $x=\left\{-10,\ 1\right\}$

✅ $0=(x+1)(x-10)$  ⇒  $x=\left\{-1,\ 10\right\}$
:::

What about the $a$-value. 
Did you notice how the $a$ value just vanished like Keyser Sose?

That's because in this form, the $a$ value has no impact on where the quadratic crosses the $x$-axis.

<DesmosDetails id="zv4ggng1hi" summary="Notice a changing a-value has no impact on the x-intercepts" />

### Exercise
What are the $x$-intercepts of the following quadratic functions?

<details>
    <details>
        <summary>$y=(x-5)(x-7)$</summary>

        The quadratic has solutions at $x=\left\{5,\ 7\right\}$
    </details>
        <summary>$y=(x+4)(x-2)$</summary>

        The quadratic has solutions at $x=\left\{-4,\ 2\right\}$
    </details>
<details>
    <summary>$y=(x+19)(x+1)$</summary>

    The quadratic has solutions at $x=\left\{-19,\ -1\right\}$
</details>
<details>
    <summary>$y=(x-5)^2$</summary>

    Note that this is basically the same as $y=(x-5)(x-5)$,
    so the quadratic has just one solution at $x=5$
</details>
<details>
    <summary>$y=(x-a)(x-3b)$</summary>

    Don't let yourself be weirded out, 
    just because there are letters in the brackets
    instead of numbers.

    Just remember that $a$ is just a number, actually, 
    as is $3b$, so th quadratic has solutions at $x=\left\{a,\ 3b\right\}$
</details>
<details>
    <summary>$y=19(x-7)(x+2)$</summary>
    
    The $a$-value here has no effect on the solutions,
    so the quadratic has solutions at $x=\left\{7,\ -2\right\}$
</details>
<details>
    <summary>$y=a(x+3p)(x-2q)$</summary>

    The $a$-value here has no effect on the solutions,
    and remember that $3p$ and $2q$ are just numbers,
    so the quadratic has solutions at $x=\left\{-3p,\ 2q\right\}$
</details>


### Finding the vertex
To find the axis of symmetry, you may be tempted to expand the brackets,
and use what you learned about [finding the vertex in standard form](/docs/math/advanced/quadratics/standard-form.md#finding-the-vertex).

If so, good job on trying to make links to different areas of knowledge.

But it's a bad idea.

Remember what we said [about exanding brackets](/docs/math/advanced/quadratics/vertex-form.md#finding-the-solutions)? 
In short, avoid it if you can. 

Let's do it anyway so we can compare this method to the better method we'll see next.

For example, given this quadratic function:

$$
f(x)=(x-6)(x-10)
$$

We could expand the brackets:

$$
f(x)=x^2-6x-10x+60
$$

$$
f(x)=x^2-16x+60
$$

and then find the axis of symmetry by calculating $\frac{-b}{2a}$:

$$
x_v=\frac{-b}{2a} = \frac{-(-16)}{2(1)} = 8 
$$

now to find $y$ we can plug our value of $x$ into the function:

$$
f(8)=(8)^2-16(8)+60=64-128+60=-4
$$

That wasn't too bad, but we can do worse...
Imagine if instead of using $-b/2a$,
we instead [completed the square](/docs/math/advanced/quadratics/standard-form.md#completing-the-square) after expanding.

$$
f(x)=x^2-16x+60
$$

$$
f(x)=x^2-16x+64-64+60
$$

$$
f(x)=(x-8)^2-4
$$

And now we can read from the [vertex form](/docs/math/advanced/quadratics/vertex-form.md) that the vertex lies at $(8, -4)$

Ok fine, it wasn't too painful either,
but both of these methods are silly compared the fastest way.

Let's start at the beginning, before we expanded the brackets.

$$
f(x)=(x-6)(x-10)
$$

So we know that solutions are $x=6$ and $x=10$ from the form. 
Now let's consider the quadratic visually, as a parabola in the $xy$-coordinate plane:

<DesmosDetails summary="Where is the vertex in relation to the solutions? Try clicking the solutions and vertex" id="co8ud8ra7v"/>

Did you figure out that the vertex is right smack in the middle of the two solutions? 

That means that given the factored form $f(x)=a(x-p)(x-q)$,
we can simply take the midpoint of the solutions and we have our axis of symmetry:

$$
x_v=\frac{p+q}{2}
$$

In our case:

$$
x_v=\frac{6+10}{2}= \frac{16}{2} = 8
$$

Now to find $y$ we just plug our $x$-value into the original function:

$$
f(8)=(8-6)(8-10)=2*-2=-4
$$

Much nicer.







