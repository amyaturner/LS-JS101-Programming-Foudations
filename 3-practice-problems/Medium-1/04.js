/* Alyssa was asked to write an implementation
of a rolling buffer. You can add and
remove elements from a rolling buffer.
However, once the buffer becomes full,
any new elements will displace the oldest elements in the buffer.

She wrote two implementations of the code for
adding elements to the buffer. In presenting
the code to her team leader, she said "Take your pick.
Do you prefer push() or concat() for modifying the buffer?".

Is there a difference between these implementations,
other than the method she used to add an element to the buffer?
*/

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// Answer: No ?

// Incorrect.

// Provided Solution:
/* "Yes, there is a difference.
While both methods have the same return value,
the first implementation mutates the argument
represented by buffer. That is, the caller will
see that the array is different when the function returns.
The rollingBuffer2 implementation doesn't mutate the
argument specified by the value of buffer."

My own notes: This is because, a function parameter makes a 'shallow copy'
of the reference or value of the argument and uses that inside the
function (rather than the original value). If the argument is a value, you
can't mutate it, and if you reassign the local variable inside the function,
it does not reassign the original variable. However, since the parameter is a
shallow copy of the argument, if it is an object and you mutate that object,
the original object will also be mutated, since the copy is of the reference
and those references both point at the same object.
*/
