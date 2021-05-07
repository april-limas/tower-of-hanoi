Development Plan:

1. Find a way to select the topmost disk from the pile and move the disc by clicking to another pile

    a. Player clicks twice - one to pick up the disc, then another to pick the destination tower.
    (Use a variable to keep track of which mode the player is in. --> ?)

    b. Add a click handler to each of the three towers. Use event.currentTarget inside the event handler to determine which tower was clicked.
 
        * Use the DOM property childElementCount to find how many disks are in a tower.
        * Use the DOM property lastElementChild to find the disk on top of a tower.
        * Use the Element.clientWidth property to get the width of your disk elements.

    c. Use the DOM method appendChild() to add a disk to a tower. 

        * Note that when you use appendChild on an element that already has a parent, it is automatically removed from the old parent and added to the new one.

Play the Tower of Hanoi here: https://april_limas.gitlab.io/hanoi/