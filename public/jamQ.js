const jamQ = (selector) => {
  // The selector being targeted
  this.selector = selector || null;
  // The actual DOM element
  this.element = null;
}

jamQ.prototype.eventHandler = {
  events: [], // Array of events & callbacks the element is subscribed to.
  
  bindEvent(event, callback, targetElement) {
  // Remove any duplicate event
    this.unbindEvent(event, targetElement);

    // Bind event listener to DOM element
    targetElement.addEventListener(event, callback, false);

    this.events.push({
      type: event,
      event: callback,
      target: targetElement,
    }); // Push the new event into our events array.
  },

  findEvent(event) {
    return this.events.filter(event =>
      (event.type === event) // If event type is a match return
      , event)[0];
  },

  unbindEvent(event, targetElement) {
    // Search events
    const foundEvent = this.findEvent(event);

    // remove event listener if found
    if (foundEvent !== undefined) {
      targetElement.removeEventListener(event, foundEvent.event, false);
    }

    // Update the events array
    this.events = this.events.filter(evt => (evt.type !== event), event)
  },
};

jamQ.prototype.on = (event, callback) => {
  this.eventHandler.bindEvent(event, callback, this.element);
}

jamQ.prototype.off = (event) => {
  this.eventHandler.unbindEvent(event, this.element);
}

jamQ.prototype.val = (newVal) => {
  return (newVal !== undefined ? this.element.value = newVal :
    this.element.value);
}

jamQ.prototype.append = (html) => {
  this.element.innerHTML = this.element.innerHTML + html;
}

jamQ.prototype.prepend = (html) => {
  this.element.innerHTML = html + this.element.innerHTML;
}

jamQ.prototype.html = (html) => {
  if (html === undefined) {
    return this.element.innerHTML;
  }
  return this.element.innerHTML = html;
};

jamQ.prototype.init = () => {
  switch (this.selector[0]) {
    case '<':
      // create element
      const matches = this.selector.match(/<([\w-]*)>/)
      if (matches === null || matches === undefined) {
        throw 'Invalid Selector / Node';
        return false;
      }
      const nodeName = matches[0].replace('<', '').replace('>', '');
      this.element = document.createElement(nodeName);
      break;

    default: this.element = document.querySelector(this.selector)
  }
};

$ = (selector) => {
  const element = new jamQ(selector); // new jamQ
  element.init(); // initialize the jamQ
  return element; // return jamQ
}
