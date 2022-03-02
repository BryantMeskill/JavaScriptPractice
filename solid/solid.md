# SOLID Design Principles

## The basic pillars of Object-Oriented Programming.

- S - Single Responsibility Principle
- O - Open-Closed Principle
- L - Liskov Subsitution Principle
- I - Interface Segregation Principle
- D - Dependency Inversion Principle

# Single Responsibility Principle

_A class should only have one reason to change_

Every function we write should do exactly one thing. It should have one clearly defined goal.

Some strategies for this:

- If you find yourself wanting to name a function using _and_, I.E. **createGameAndLogWinner()**, you probably are breaking the Single Responsibility Principle. Break these into two separate functions.

* For every function you create, think if there's a useful part which can be extracted into an even smaller function.

* After you've created a function, scan through it again and see how many reusable functions you can extract.

That being said, there are cases of DRY (Don't Repeat Yourself) when it comes to this. If you have several very similarly linked functions, I.E. **getImages(), getTitle(), and getSubtext()** that are always called together, it may be a good idea to create a wrapper function called something like **getMedia()** to call all three functions together.

# Open-Closed Principle

Open-Closed Principle menas our JavaScript modules should be open to extension, but closed to modification. Meaning if someone wants to extend our module's behavior, they won't need to modify existing code if they don't want to.

# Liskov Substitution Principle

Best explained with an example:

In mathematics, a `Square` is a `Rectangle`. Indeed it is a specialization of a rectangle. The "is a" makes you want to model this with inheritance. However if in code you made `Square` derive from `Rectangle`, then a Square should be usable anywhere you expect a `Rectangle`. This makes for some strange behavior.

Imagine you had `SetWidth` and SetHeight methods on your `Rectangle` base class; this seems perfectly logical. However if your Rectangle reference pointed to a `Square`, then `SetWidth` and `SetHeight` doesn't make sense because setting one would change the other to match it. In this case `Square` fails the **Liskov Substitution Test** with `Rectangle` and the abstraction of having `Square` inherit from `Rectangle` is a bad one.

# Interface Segregation Principle

You shouldn't create bloated interfaces. Whenever you expose a module for use, make sure only the bare essentials are required and the rest are optional.

# Dependency Inversion Principle

Dependency Injection is all about handing over control from the function itself to the caller of the function. Defining who controls the type of parameters the function receives.
